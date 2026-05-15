import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { BookOpen, Clock, User, X, Check, Share2, ChevronRight, ChevronDown, Sparkles } from 'lucide-react';
import RoughAnnotation from './RoughAnnotation';

// Helper function to extract YAML frontmatter
function parseFrontmatter(rawText) {
  if (!rawText) return {};
  const match = rawText.match(/^---[\s\S]*?---/);
  if (!match) return {};
  const yamlBlock = match[0].replace(/---/g, '').trim();
  const meta = {};
  yamlBlock.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      meta[key] = value;
    }
  });
  return meta;
}

// Vite glob import for markdown files in public assets
const articleModules = import.meta.glob('../../public/assets/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

// Built-in articles fallback data in case of asset path differences in various Vite build targets
const defaultArticlesData = [
  {
    id: 'production-rag-fastapi-hybrid-search',
    category: 'Generative AI Architecture',
    readTime: '7 min read',
    date: 'October 2026',
    author: 'Pratiksha Sanap',
    title: 'Building Production-Grade RAG Systems with FastAPI and Hybrid Search',
    excerpt: 'A practical architectural guide to overcoming vector search failure modes using hybrid BM25 lexical search, dense embeddings, FlashRank reranking, and sub-100ms FastAPI token streaming.'
  },
  {
    id: 'autonomous-multi-agent-orchestration',
    category: 'Agentic AI Systems',
    readTime: '8 min read',
    date: 'October 2026',
    author: 'Pratiksha Sanap',
    title: 'Architecting Multi-Agent Autonomous Workflows with Python and LangGraph',
    excerpt: 'Design patterns for building robust stateful multi-agent execution graphs using LangGraph, Pydantic state schemas, conditional cyclic branching, and human-in-the-loop review nodes.'
  },
  {
    id: 'fullstack-ai-token-streaming-fastapi-react',
    category: 'Fullstack Engineering',
    readTime: '6 min read',
    date: 'October 2026',
    author: 'Pratiksha Sanap',
    title: 'Fullstack AI: Streaming LLM Tokens from FastAPI to React via Server-Sent Events',
    excerpt: 'A comprehensive architectural blueprint for streaming LLM tokens with sub-100ms latency from Python FastAPI backends to React frontend interfaces using Server-Sent Events and custom hooks.'
  },
  {
    id: 'architecting-scalable-ai-on-aws',
    category: 'Cloud Architecture',
    readTime: '9 min read',
    date: 'October 2026',
    author: 'Pratiksha Sanap',
    title: 'Deploying Scalable AI Microservices on AWS: Cloud Best Practices',
    excerpt: 'A practical guide to containerizing, securing, and deploying production AI microservices on AWS using ECS Fargate, IAM least-privilege policies, S3 caching, and CloudWatch metrics.'
  }
];

function discoverArticles() {
  const list = [];
  for (const path in articleModules) {
    const rawText = articleModules[path];
    const filename = path.split('/').pop().replace(/\.md$/, '');
    const meta = parseFrontmatter(rawText);

    list.push({
      id: meta.id || filename,
      filePath: `/assets/articles/${filename}.md`,
      rawText: rawText,
      category: meta.category || 'Generative AI',
      readTime: meta.readTime || '6 min read',
      date: meta.date || 'October 2026',
      author: meta.author || 'Pratiksha Sanap',
      title: meta.title || filename.replace(/-/g, ' '),
      excerpt: meta.excerpt || 'Technical publication by Pratiksha Sanap.'
    });
  }

  // If Vite glob returns items, return them. Otherwise return mapped defaultArticlesData.
  if (list.length > 0) return list;

  return defaultArticlesData.map((d) => ({
    ...d,
    filePath: `/assets/articles/${d.id}.md`,
    rawText: ''
  }));
}

export default function ArticlesCarousel({ theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [articles, setArticles] = useState(discoverArticles);
  const [selectedArticleId, setSelectedArticleId] = useState(() => (articles[0] ? articles[0].id : ''));
  const [visibleCount, setVisibleCount] = useState(4);
  const [parsedHtml, setParsedHtml] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isReaderOpen, setIsReaderOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const discovered = discoverArticles();
    setArticles(discovered);
    if (discovered.length > 0 && !discovered.some((a) => a.id === selectedArticleId)) {
      setSelectedArticleId(discovered[0].id);
    }
  }, []);

  const currentArticle = articles.find((a) => a.id === selectedArticleId || a.filePath.includes(selectedArticleId)) || articles[0];

  // Sync state with URL Hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article-')) {
        const articleId = hash.replace('#article-', '');
        const found = articles.find((a) => a.id === articleId || a.filePath.includes(articleId));
        if (found) {
          setSelectedArticleId(found.id);
          openArticleReader(found);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [articles]);

  const openArticleReader = async (article) => {
    setSelectedArticleId(article.id);
    setIsReaderOpen(true);
    setIsLoading(true);

    try {
      let rawContent = article.rawText;
      if (!rawContent) {
        const res = await fetch(`/assets/articles/${article.id}.md`);
        if (res.ok) {
          rawContent = await res.text();
        }
      }

      // Strip frontmatter before parsing markdown
      const cleanContent = rawContent.replace(/^---[\s\S]*?---/, '').trim();
      const html = marked.parse(cleanContent);
      setParsedHtml(html);
    } catch (err) {
      setParsedHtml('<p>Unable to load article content at this moment.</p>');
    } finally {
      setIsLoading(false);
    }
  };

  const closeReader = () => {
    setIsReaderOpen(false);
    if (window.location.hash.startsWith('#article-')) {
      window.history.replaceState(null, '', '#articles');
    }
  };

  const copyShareLink = (e, articleId) => {
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#article-${articleId}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(articleId);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  return (
    <section id="articles" className={`py-24 px-6 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#091322] border-[#1f3354] text-[#e2e8f0]' : 'bg-[#fafbfc] border-[#dfe1e6] text-[#172b4d]'
    }`}>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase mb-3 bg-[#0c66e4]/10 text-[#388bff] border border-[#0c66e4]/30">
            <BookOpen className="w-3.5 h-3.5 text-[#0c66e4]" />
            <span>Architecture & Engineering Notes</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isDark ? 'text-[#ffffff]' : 'text-[#091e42]'
          }`}>
            Engineering Deep-Dives.{' '}
            <RoughAnnotation
              type="underline"
              color="#0c66e4"
              show={true}
              strokeWidth={3}
            >
              <span className="text-[#0c66e4]">Production Guides.</span>
            </RoughAnnotation>
          </h2>

          <p className={`text-base sm:text-lg font-normal leading-relaxed ${
            isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'
          }`}>
            Practical technical papers covering hybrid vector retrieval, stateful multi-agent systems, low-latency token streaming, and cloud architectures.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {articles.slice(0, visibleCount).map((art) => {
            const isCopied = copiedId === art.id;
            return (
              <div
                key={art.id}
                onClick={() => openArticleReader(art)}
                className={`rounded-xl p-6 sm:p-8 border transition-all cursor-pointer flex flex-col justify-between group hover:border-[#0c66e4]/60 ${
                  isDark 
                    ? 'bg-[#111c2e] border-[#1f3354] hover:shadow-2xl hover:shadow-black/60' 
                    : 'bg-[#ffffff] border-[#dfe1e6] hover:shadow-xl hover:shadow-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs font-mono">
                    <span className={`px-2.5 py-0.5 rounded font-semibold uppercase tracking-wider border ${
                      isDark ? 'bg-[#18263e] border-[#2b4166] text-[#388bff]' : 'bg-[#f4f5f7] border-[#dfe1e6] text-[#0c66e4]'
                    }`}>
                      {art.category}
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-[#8c9bab]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{art.readTime}</span>
                      </div>

                      {/* Share Button */}
                      <button
                        onClick={(e) => copyShareLink(e, art.id)}
                        className={`p-1.5 rounded border transition-all cursor-pointer flex items-center gap-1 text-[11px] ${
                          isCopied
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                            : isDark
                              ? 'bg-[#2c2c2e] border-white/10 text-[#86868b] hover:text-[#f5f5f7]'
                              : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#6e6e73] hover:text-[#1d1d1f]'
                        }`}
                        title="Copy Shareable Link"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5" />
                            <span>Share</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-3 group-hover:text-[#0071e3] transition-colors ${
                    isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
                  }`}>
                    {art.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 font-light ${
                    isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
                  }`}>
                    {art.excerpt}
                  </p>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? 'border-[#2c2c2e]' : 'border-[#d2d2d7]'
                }`}>
                  <div className="flex items-center gap-2 text-[#86868b]">
                    <User className="w-3.5 h-3.5 text-[#0071e3]" />
                    <span>{art.author} • {art.date}</span>
                  </div>

                  <button className="flex items-center gap-1 text-[#0071e3] font-bold group-hover:translate-x-1 transition-transform">
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Full-Screen Reader Modal Overlay */}
      {isReaderOpen && currentArticle && (
        <div className="fixed inset-0 z-50 bg-[#091e42]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className={`max-w-4xl w-full rounded-xl p-6 sm:p-10 border max-h-[90vh] overflow-y-auto relative ${
            isDark ? 'bg-[#111c2e] border-[#1f3354] text-[#e2e8f0]' : 'bg-[#ffffff] border-[#dfe1e6] text-[#172b4d]'
          }`}>
            
            {/* Modal Top Actions */}
            <div className="flex items-center justify-between pb-5 border-b border-[#1f3354]/40 mb-6">
              <button
                onClick={(e) => copyShareLink(e, currentArticle.id)}
                className={`px-3 py-1.5 rounded border text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  copiedId === currentArticle.id
                    ? 'bg-[#00875a]/20 text-[#36b37e] border-[#00875a]/40'
                    : isDark
                      ? 'bg-[#18263e] border-[#2b4166] text-[#e2e8f0] hover:bg-[#203354]'
                      : 'bg-[#f4f5f7] border-[#dfe1e6] text-[#172b4d] hover:bg-[#ebecf0]'
                }`}
              >
                {copiedId === currentArticle.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#36b37e]" />
                    <span>Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5 text-[#0c66e4]" />
                    <span>Shareable Deep Link</span>
                  </>
                )}
              </button>

              <button
                onClick={closeReader}
                className={`p-1.5 rounded border transition-colors cursor-pointer ${
                  isDark ? 'bg-[#18263e] border-[#2b4166] hover:bg-[#203354] text-[#8c9bab]' : 'bg-[#f4f5f7] border-[#dfe1e6] hover:bg-[#ebecf0] text-[#5e6c84]'
                }`}
                title="Close Reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <span className="text-xs font-mono text-[#388bff] uppercase tracking-wider block mb-2 font-semibold">
                {currentArticle.category} • {currentArticle.readTime}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                {currentArticle.title}
              </h2>
              <div className="text-xs font-mono text-[#8c9bab]">
                By {currentArticle.author} • {currentArticle.date}
              </div>
            </div>

            {isLoading ? (
              <div className="py-16 text-center text-sm font-mono text-[#8c9bab] animate-pulse">
                Parsing Markdown content...
              </div>
            ) : (
              <div 
                className={`markdown-article-body max-w-none text-base leading-relaxed pt-6 border-t ${
                  isDark ? 'border-[#1f3354] text-[#a6b5c5]' : 'border-[#dfe1e6] text-[#42526e]'
                }`}
                dangerouslySetInnerHTML={{ __html: parsedHtml }}
              />
            )}
          </div>
        </div>
      )}

    </section>
  );
}

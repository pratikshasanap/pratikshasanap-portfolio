import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  Zap, 
  Layers, 
  Database, 
  Search, 
  FileText, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import RoughAnnotation from './RoughAnnotation';

export default function FeaturedProjectsSection({ theme = 'dark' }) {
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-24 px-6 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#091322] border-[#1f3354] text-[#e2e8f0]' : 'bg-[#fafbfc] border-[#dfe1e6] text-[#172b4d]'
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header with Atlassian Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase mb-3 bg-[#0c66e4]/10 text-[#388bff] border border-[#0c66e4]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Deployments</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isDark ? 'text-[#ffffff]' : 'text-[#091e42]'
          }`}>
            Featured Enterprise{' '}
            <RoughAnnotation
              type="underline"
              color="#0c66e4"
              show={true}
              strokeWidth={3}
            >
              <span className="text-[#0c66e4]">AI Project</span>
            </RoughAnnotation>
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto font-normal ${
            isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'
          }`}>
            Production-grade generative AI architectures engineered with FastAPI backends, sub-second vector retrieval, and reactive React frontend interfaces.
          </p>
        </div>

        {/* Flagship Project Card: Multi-PDF Advanced RAG */}
        <div className={`rounded-xl border transition-all duration-300 p-6 sm:p-10 ${
          isDark 
            ? 'bg-[#111c2e] border-[#1f3354] shadow-2xl shadow-black/40 hover:border-[#388bff]/50' 
            : 'bg-[#ffffff] border-[#dfe1e6] shadow-xl shadow-slate-200/60 hover:border-[#0c66e4]/50'
        }`}>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            
            {/* Left Content Column */}
            <div className="flex-1">
              
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#0c66e4] text-white">
                  FLAGSHIP RAG ENGINE
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#00875a]/15 text-[#36b37e] border border-[#00875a]/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#36b37e] animate-pulse" />
                  Live in Production
                </span>
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium text-[#8c9bab]">
                  Groq Llama 3.1 8B Instant
                </span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-3 ${
                isDark ? 'text-[#ffffff]' : 'text-[#091e42]'
              }`}>
                Advanced Multi-PDF Chatbot with Pre-Cached Vector Indexing
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isDark ? 'text-[#a6b5c5]' : 'text-[#42526e]'
              }`}>
                A sub-second, enterprise-grade RAG platform capable of parsing multi-page complex PDF corpora with zero runtime cold-start lag. Employs dual dense-sparse retrieval, reciprocal rank fusion (RRF $k=60$), cross-encoder re-ranking with FlashRank, and Groq ultra-low latency generation.
              </p>

              {/* Architectural Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#388bff] shrink-0 mt-0.5" />
                  <span><strong>Zero-Delay Cold Starts:</strong> Pre-built vector store cache in ChromaDB with auto-seed fallback.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#388bff] shrink-0 mt-0.5" />
                  <span><strong>Hybrid Retrieval Engine:</strong> ChromaDB dense embeddings fused with BM25 keyword search via RRF.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#388bff] shrink-0 mt-0.5" />
                  <span><strong>FlashRank Re-ranking:</strong> Ultra-fast cross-encoder scoring top 15 candidates down to precise context.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#388bff] shrink-0 mt-0.5" />
                  <span><strong>ChatGPT-Style UI:</strong> React 18 frontend with interactive citation cards & source preview modals.</span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['Python 3.11', 'FastAPI', 'React.js', 'Groq Llama 3.1', 'LangChain', 'ChromaDB', 'BM25', 'FlashRank', 'Tailwind CSS', 'Vercel Serverless'].map((tech) => (
                  <span 
                    key={tech} 
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium ${
                      isDark 
                        ? 'bg-[#1a2942] text-[#8c9bab] border border-[#2a3f63]' 
                        : 'bg-[#f4f5f7] text-[#42526e] border border-[#dfe1e6]'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://pratiksha-sanap-multi-pdf-advanced.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded font-semibold text-xs tracking-wide transition-all bg-[#0c66e4] hover:bg-[#0052cc] text-white flex items-center gap-2 active:scale-95 shadow-md shadow-[#0c66e4]/30"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/pratikshasanap/multipdf-rag-base-chatbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded font-semibold text-xs tracking-wide transition-all border flex items-center gap-2 active:scale-95 ${
                    isDark
                      ? 'bg-[#18263e] hover:bg-[#203354] text-[#e2e8f0] border-[#2b4166]'
                      : 'bg-white hover:bg-[#f4f5f7] text-[#172b4d] border-[#dfe1e6]'
                  }`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              </div>

            </div>

            {/* Right Architecture Blueprint Column */}
            <div className={`w-full lg:w-[380px] rounded-lg p-5 border font-mono text-xs ${
              isDark 
                ? 'bg-[#0d1624] border-[#1f3354] text-[#8c9bab]' 
                : 'bg-[#f4f5f7] border-[#dfe1e6] text-[#42526e]'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-[#1f3354]/40 mb-3 text-[11px] font-bold text-[#388bff] uppercase tracking-wider">
                <span>RAG Pipeline Architecture</span>
                <span className="text-[#36b37e]">v2.4 Prod</span>
              </div>

              <div className="space-y-3">
                <div className={`p-2.5 rounded border ${isDark ? 'bg-[#111c2e] border-[#1f3354]' : 'bg-white border-[#dfe1e6]'}`}>
                  <div className="text-[#388bff] font-semibold text-[11px] mb-1">1. Pre-Caching Vector Store</div>
                  <div className="text-[11px]">PyMuPDF Extraction ➔ Page-aware Chunker ➔ ChromaDB Pre-built vectors</div>
                </div>

                <div className={`p-2.5 rounded border ${isDark ? 'bg-[#111c2e] border-[#1f3354]' : 'bg-white border-[#dfe1e6]'}`}>
                  <div className="text-[#388bff] font-semibold text-[11px] mb-1">2. Hybrid Retrieval (Dense + BM25)</div>
                  <div className="text-[11px]">Top-15 Semantic Vectors + Top-15 BM25 Lexical ➔ Reciprocal Rank Fusion ($k=60$)</div>
                </div>

                <div className={`p-2.5 rounded border ${isDark ? 'bg-[#111c2e] border-[#1f3354]' : 'bg-white border-[#dfe1e6]'}`}>
                  <div className="text-[#388bff] font-semibold text-[11px] mb-1">3. FlashRank Re-ranker</div>
                  <div className="text-[11px]">Cross-encoder re-ranking selects top 5 high-relevance context snippets</div>
                </div>

                <div className={`p-2.5 rounded border ${isDark ? 'bg-[#111c2e] border-[#1f3354]' : 'bg-white border-[#dfe1e6]'}`}>
                  <div className="text-[#388bff] font-semibold text-[11px] mb-1">4. Groq Inference & React UI</div>
                  <div className="text-[11px]">Groq Llama 3.1 8B instant output ➔ Citation Modal inspection in React</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Supporting Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* Card 2: Enterprise Agentic SQL Engine */}
          <div className={`rounded-xl border p-6 transition-all duration-300 ${
            isDark ? 'bg-[#111c2e] border-[#1f3354] hover:border-[#388bff]/40' : 'bg-[#ffffff] border-[#dfe1e6] hover:border-[#0c66e4]/40'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#6554c0]/15 text-[#8777d9] border border-[#6554c0]/30">
                Agentic Workflows
              </span>
              <span className="text-xs font-mono text-[#8c9bab]">LangChain • FastAPI</span>
            </div>
            <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#091e42]'}`}>
              Autonomous Agentic AI & Structured SQL Engine
            </h4>
            <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-[#a6b5c5]' : 'text-[#5e6c84]'}`}>
              Autonomous tool-calling agent framework converting conversational queries into validated SQL queries with sandboxed execution loops and dynamic React chart visualization.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {['FastAPI', 'LangChain', 'PostgreSQL', 'React', 'Redis'].map(t => (
                <span key={t} className={`px-2 py-0.5 rounded ${isDark ? 'bg-[#19273f] text-[#8c9bab]' : 'bg-[#f4f5f7] text-[#42526e]'}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: High-Throughput Inference Service */}
          <div className={`rounded-xl border p-6 transition-all duration-300 ${
            isDark ? 'bg-[#111c2e] border-[#1f3354] hover:border-[#388bff]/40' : 'bg-[#ffffff] border-[#dfe1e6] hover:border-[#0c66e4]/40'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#00a3bf]/15 text-[#00b8d9] border border-[#00a3bf]/30">
                Microservice Architecture
              </span>
              <span className="text-xs font-mono text-[#8c9bab]">Docker • Redis</span>
            </div>
            <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#091e42]'}`}>
              High-Throughput ML & Embedding Inference Service
            </h4>
            <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-[#a6b5c5]' : 'text-[#5e6c84]'}`}>
              Asynchronous FastAPI prediction microservice with batching, Redis response caching to avoid redundant vector calculations, and containerized Docker CI/CD delivery.
            </p>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {['Python', 'FastAPI', 'Redis', 'Docker', 'scikit-learn', 'Pytest'].map(t => (
                <span key={t} className={`px-2 py-0.5 rounded ${isDark ? 'bg-[#19273f] text-[#8c9bab]' : 'bg-[#f4f5f7] text-[#42526e]'}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

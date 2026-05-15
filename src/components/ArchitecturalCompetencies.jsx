import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cpu, Database, Cloud, Terminal, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import RoughAnnotation from './RoughAnnotation';

export default function ArchitecturalCompetencies({ theme = 'dark' }) {
  const isDark = theme === 'dark';

  const competencies = [
    {
      id: 'genai-rag',
      icon: Cpu,
      title: 'Generative AI & Advanced RAG',
      highlight: 'Production RAG',
      accent: '#0c66e4',
      description: 'End-to-end LLM architectures combining hybrid search (BM25 + dense vector embeddings), FlashRank cross-encoder reranking, structured tool execution, and prompt grounding.',
      deliverables: [
        'Sub-second inference using Groq Llama 3.1 8B instant endpoints',
        'Pre-cached vector store architectures with ChromaDB to eliminate cold-starts',
        'Reciprocal Rank Fusion (RRF k=60) combining lexical and semantic results',
        'Pydantic-enforced structured LLM schema extraction & validation'
      ],
      stack: ['LangChain', 'ChromaDB', 'BM25', 'FlashRank', 'Groq Llama 3.1', 'OpenAI']
    },
    {
      id: 'fastapi-backend',
      icon: Server,
      title: 'FastAPI & Async Microservices',
      highlight: 'High Concurrency',
      accent: '#00875a',
      description: 'High-throughput asynchronous backend APIs using Python 3.11+, asyncio event loops, dependency injection, and Pydantic v2 data contracts with OpenAPI docs.',
      deliverables: [
        'Async REST endpoints with auto-seeding database initialization',
        'Real-time token streaming via Server-Sent Events (SSE) and WebSockets',
        'Redis caching layers for embedding query deduplication and rate limiting',
        'Serverless and containerized deployment readiness (Vercel & Docker)'
      ],
      stack: ['Python 3.11', 'FastAPI', 'Pydantic v2', 'Redis', 'PostgreSQL', 'Docker', 'uv']
    },
    {
      id: 'react-frontend',
      icon: Code2,
      title: 'React.js & Streaming UIs',
      highlight: 'Fluid Interfaces',
      accent: '#6554c0',
      description: 'Responsive, accessible single-page web applications with React 18, Vite, modular design systems, sub-second hydration, and live streaming response visualizers.',
      deliverables: [
        'ChatGPT-style conversational interfaces with token-by-token streaming',
        'Interactive citation cards and modal source document previews',
        'Clean, accessible responsive UI crafted with Tailwind CSS and Framer Motion',
        'Modular, maintainable state management architecture'
      ],
      stack: ['React.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion']
    },
    {
      id: 'data-science',
      icon: Database,
      title: 'Data Science & Predictive ML',
      highlight: 'Statistical Models',
      accent: '#00a3bf',
      description: 'Statistical modeling, exploratory data analysis, and predictive machine learning pipelines deployed into automated production scoring endpoints.',
      deliverables: [
        'Feature engineering, outlier detection, and data cleansing pipelines',
        'Supervised regression and classification models with scikit-learn',
        'Data analysis and manipulation with Pandas and NumPy',
        'Evaluation benchmarks and metrics tracking for production ML'
      ],
      stack: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'Matplotlib']
    }
  ];

  return (
    <section id="competencies" className={`py-24 px-6 border-t transition-colors duration-300 ${
      isDark ? 'bg-[#0b1120] border-[#1f3354] text-[#e2e8f0]' : 'bg-[#ffffff] border-[#dfe1e6] text-[#172b4d]'
    }`}>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase mb-3 bg-[#0c66e4]/10 text-[#388bff] border border-[#0c66e4]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Technical Pillars</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${
            isDark ? 'text-[#ffffff]' : 'text-[#091e42]'
          }`}>
            Engineering Competencies &{' '}
            <RoughAnnotation
              type="underline"
              color="#0c66e4"
              show={true}
              strokeWidth={3}
            >
              <span className="text-[#0c66e4]">System Design</span>
            </RoughAnnotation>
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto font-normal ${
            isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'
          }`}>
            Deep specialization across the full lifecycle of AI product engineering: retrieval mechanics, API contracts, and responsive client experiences.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {competencies.map((comp) => {
            const Icon = comp.icon;
            return (
              <div
                key={comp.id}
                className={`p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isDark 
                    ? 'bg-[#111c2e] border-[#1f3354] hover:border-[#388bff]/50 shadow-lg shadow-black/20' 
                    : 'bg-[#ffffff] border-[#dfe1e6] hover:border-[#0c66e4]/50 shadow-md shadow-slate-200/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center border"
                      style={{ 
                        backgroundColor: `${comp.accent}15`, 
                        borderColor: `${comp.accent}40`,
                        color: comp.accent 
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span 
                      className="px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider"
                      style={{ 
                        backgroundColor: `${comp.accent}15`, 
                        color: comp.accent 
                      }}
                    >
                      {comp.highlight}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#091e42]'}`}>
                    {comp.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-[#a6b5c5]' : 'text-[#5e6c84]'}`}>
                    {comp.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {comp.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: comp.accent }} />
                        <span className={isDark ? 'text-[#8c9bab]' : 'text-[#42526e]'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1f3354]/30 flex flex-wrap gap-1.5">
                  {comp.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${
                        isDark 
                          ? 'bg-[#18263e] text-[#8c9bab] border border-[#233857]' 
                          : 'bg-[#f4f5f7] text-[#42526e] border border-[#dfe1e6]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

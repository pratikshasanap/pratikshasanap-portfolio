import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cpu, Database, Cloud, Terminal, CheckCircle2, ArrowUpRight } from 'lucide-react';
import RoughAnnotation from './RoughAnnotation';

export default function ArchitecturalCompetencies({ theme = 'dark' }) {
  const isDark = theme === 'dark';

  const competencies = [
    {
      id: 'genai-rag',
      icon: Cpu,
      title: 'Generative AI & Agentic Systems',
      highlight: 'Production RAG',
      accent: '#0071e3',
      description: 'End-to-end LLM architectures combining hybrid search (BM25 + dense embeddings), FlashRank semantic reranking, structured tool execution, and multi-agent coordination loops.',
      deliverables: [
        'Sub-100ms first-token streaming via SSE pipelines',
        'Stateful multi-agent orchestration graphs with LangGraph',
        'Confidential vector index caches with ChromaDB and Pinecone',
        'Pydantic-enforced structured LLM schema extraction'
      ],
      stack: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB', 'Llama 3.1', 'OpenAI']
    },
    {
      id: 'fastapi-backend',
      icon: Server,
      title: 'FastAPI & Async Microservices',
      highlight: 'High Concurrency',
      accent: '#30d158',
      description: 'High-throughput asynchronous backends using Python 3.12, asyncio event loops, dependency injection patterns, connection pooling, and strict OpenAPI documentation.',
      deliverables: [
        'Async database query pipelines with asyncpg and SQLAlchemy 2.0',
        'Real-time bi-directional messaging with WebSockets',
        'Distributed background tasks with Celery and Redis',
        'Comprehensive unit and integration test coverage with pytest'
      ],
      stack: ['Python', 'FastAPI', 'asyncio', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      id: 'react-frontend',
      icon: Code2,
      title: 'React & Modern JavaScript',
      highlight: 'Fluid Interfaces',
      accent: '#f5a623',
      description: 'Responsive, accessible single-page web applications with React 19, modular design systems, sub-second client-side hydration, and live streaming response visualizers.',
      deliverables: [
        'Custom React hooks for token-by-token LLM stream parsing',
        'Optimistic state synchronization and memoized state graphs',
        'Zero-layout-shift responsive layouts across mobile and desktop',
        'Accessible, keyboard-navigable components with semantic HTML'
      ],
      stack: ['React', 'JavaScript', 'TypeScript', 'TailwindCSS', 'Vite', 'Framer Motion']
    },
    {
      id: 'data-science',
      icon: Database,
      title: 'Data Science & Predictive Analytics',
      highlight: 'Statistical Models',
      accent: '#bf5af2',
      description: 'Statistical modeling, exploratory data analysis, and predictive machine learning pipelines deployed into automated production scoring endpoints.',
      deliverables: [
        'Feature transformation, outlier detection, and schema validation',
        'Supervised regression and classification with Scikit-learn',
        'High-dimensional cluster analysis and dimensionality reduction',
        'Interactive analytics dashboards with real-time KPI streaming'
      ],
      stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SciPy', 'Matplotlib']
    },
    {
      id: 'aws-cloud',
      icon: Cloud,
      title: 'AWS Cloud & Production Systems',
      highlight: 'AWS Certified',
      accent: '#ff9f0a',
      description: 'Certified cloud implementations following the AWS Well-Architected Framework: secure IAM configurations, containerized ECS Fargate services, serverless Lambdas, and S3 storage.',
      deliverables: [
        'AWS Certified Cloud Practitioner validated architectural foundations',
        'Containerized microservice packaging with multi-stage Docker builds',
        'Secure VPC subnet isolation, security groups, and API Gateways',
        'Telemetry, error alerting, and structured logging with AWS CloudWatch'
      ],
      stack: ['AWS ECS', 'AWS Lambda', 'AWS S3', 'AWS IAM', 'Docker', 'CloudWatch']
    }
  ];

  return (
    <section id="competencies" className={`py-24 px-6 border-t transition-colors duration-500 ${
      isDark ? 'bg-[#000000] border-[#2c2c2e] text-[#f5f5f7]' : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f]'
    }`}>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4 border text-[#0071e3] border-[#0071e3]/30 bg-[#0071e3]/10">
            <span>Core Technical Pillars</span>
          </div>
          
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
          }`}>
            Engineering Competencies.{' '}
            <RoughAnnotation
              type="highlight"
              color={isDark ? 'rgba(0, 113, 227, 0.35)' : 'rgba(0, 113, 227, 0.18)'}
              show={true}
              strokeWidth={2}
            >
              <span>Production Depth.</span>
            </RoughAnnotation>
          </h2>

          <p className={`text-base sm:text-lg font-light leading-relaxed ${
            isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
          }`}>
            Proven engineering across every layer of modern software: from low-level asynchronous Python backends to client-side React architectures and certified AWS cloud environments.
          </p>
        </div>

        {/* Competency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-3xl p-6 sm:p-8 border transition-all flex flex-col justify-between group hover:border-[#0071e3]/50 hover:-translate-y-1 ${
                  isDark 
                    ? 'bg-[#161617]/70 border-[#2c2c2e] hover:shadow-2xl hover:shadow-black/70' 
                    : 'bg-[#ffffff] border-[#d2d2d7] hover:shadow-xl hover:shadow-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform group-hover:scale-105"
                      style={{ 
                        backgroundColor: `${comp.accent}15`,
                        borderColor: `${comp.accent}35`,
                        color: comp.accent
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                      isDark ? 'bg-[#2c2c2e] border-white/10 text-[#86868b]' : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#6e6e73]'
                    }`}>
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight mb-2 group-hover:text-[#0071e3] transition-colors ${
                    isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
                  }`}>
                    {comp.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                    isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
                  }`}>
                    {comp.description}
                  </p>

                  {/* Concrete Deliverables List */}
                  <div className="space-y-2 mb-6">
                    {comp.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0071e3] shrink-0 mt-0.5" />
                        <span className={isDark ? 'text-[#a1a1a6]' : 'text-[#424245]'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tag Pills */}
                <div className={`pt-4 border-t flex flex-wrap gap-1.5 ${
                  isDark ? 'border-[#2c2c2e]' : 'border-[#d2d2d7]'
                }`}>
                  {comp.stack.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                        isDark ? 'bg-[#2c2c2e]/60 border-white/10 text-[#2997ff]' : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#0071e3]'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

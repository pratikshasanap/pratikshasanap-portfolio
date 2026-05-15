import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import RoughAnnotation from './RoughAnnotation';

export default function AISkillsMatrix({ isDark = true }) {
  const skillCategories = [
    {
      title: 'GenAI & Vector Search',
      color: '#0c66e4',
      skills: [
        { name: 'RAG Architecture', highlight: true, annotation: 'underline' },
        { name: 'LangChain & LangGraph', highlight: true, annotation: 'box' },
        { name: 'ChromaDB & BM25', highlight: true, annotation: 'highlight' },
        { name: 'Groq & Llama 3.1', highlight: true, annotation: 'circle' },
        { name: 'FlashRank Re-ranking', highlight: false },
      ]
    },
    {
      title: 'FastAPI & Backend',
      color: '#00875a',
      skills: [
        { name: 'FastAPI (Async)', highlight: true, annotation: 'box' },
        { name: 'Pydantic v2', highlight: true, annotation: 'underline' },
        { name: 'Python 3.11+', highlight: true, annotation: 'circle' },
        { name: 'Redis Caching', highlight: false },
        { name: 'PostgreSQL & Docker', highlight: false },
      ]
    },
    {
      title: 'React.js & Frontend',
      color: '#6554c0',
      skills: [
        { name: 'React 18 / 19', highlight: true, annotation: 'highlight' },
        { name: 'Real-time SSE Stream', highlight: true, annotation: 'underline' },
        { name: 'Tailwind CSS', highlight: true, annotation: 'box' },
        { name: 'JavaScript & TypeScript', highlight: false },
        { name: 'Vite & Responsive UI', highlight: false },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 6 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-3 text-left">
      
      {/* Atlassian Terminal Title Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-[#1f3354]/40 mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#388bff]" />
          <span className="text-xs font-mono font-bold tracking-wider text-[#388bff] uppercase">
            Pratiksha Sanap • Full-Stack AI Competencies
          </span>
        </div>
        <div className="text-[11px] font-mono text-[#8c9bab]">
          <span>Production Matrix</span>
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch overflow-y-auto scrollbar-none py-1"
      >
        {skillCategories.map((category) => (
          <div 
            key={category.title}
            className={`p-3.5 rounded-lg border flex flex-col justify-between transition-colors ${
              isDark 
                ? 'bg-[#111c2e] border-[#1f3354]' 
                : 'bg-[#ffffff] border-[#dfe1e6] shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span 
                  className="text-xs font-mono font-bold uppercase tracking-wider"
                  style={{ color: category.color }}
                >
                  {category.title}
                </span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.color }} />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={itemVariants}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                      skill.highlight
                        ? isDark
                          ? 'bg-[#18263e] text-white border border-[#2b4166]'
                          : 'bg-[#f4f5f7] text-[#091e42] border border-[#dfe1e6]'
                        : isDark
                          ? 'bg-[#0d1624] text-[#8c9bab]'
                          : 'bg-[#fafbfc] text-[#5e6c84]'
                    }`}
                  >
                    {skill.annotation ? (
                      <RoughAnnotation
                        type={skill.annotation}
                        color={category.color}
                        show={true}
                        strokeWidth={1.5}
                        animationDuration={800}
                      >
                        <span>{skill.name}</span>
                      </RoughAnnotation>
                    ) : (
                      <span>{skill.name}</span>
                    )}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-[#1f3354]/20 flex items-center gap-1.5 text-[11px] text-[#8c9bab]">
              <CheckCircle2 className="w-3 h-3 text-[#36b37e]" />
              <span>Production Verified</span>
            </div>
          </div>
        ))}
      </motion.div>

    </div>
  );
}

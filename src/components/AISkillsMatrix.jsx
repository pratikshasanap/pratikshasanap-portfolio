import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import RoughAnnotation from './RoughAnnotation';

export default function AISkillsMatrix({ isDark = true }) {
  const skillCategories = [
    {
      title: 'GenAI & Data Science',
      color: '#0071e3',
      skills: [
        { name: 'GenAI', highlight: true, annotation: 'underline' },
        { name: 'Python', highlight: true, annotation: 'circle' },
        { name: 'Data Science', highlight: true, annotation: 'highlight' },
        { name: 'Vector DBs', highlight: false },
        { name: 'RAG Architecture', highlight: true, annotation: 'underline' },
      ]
    },
    {
      title: 'Fullstack Engineering',
      color: '#30d158',
      skills: [
        { name: 'FastAPI', highlight: true, annotation: 'box' },
        { name: 'React', highlight: true, annotation: 'highlight' },
        { name: 'JavaScript', highlight: true, annotation: 'underline' },
        { name: 'TypeScript', highlight: false },
        { name: 'WebSockets', highlight: false },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      color: '#f5a623',
      skills: [
        { name: 'AWS Cloud', highlight: true, annotation: 'box' },
        { name: 'Docker', highlight: true, annotation: 'underline' },
        { name: 'PostgreSQL', highlight: false },
        { name: 'Microservices', highlight: false },
        { name: 'API Design', highlight: false },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 8 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-2 sm:p-4 text-left">
      
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-[#2c2c2e]/60 mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#0071e3] animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-[#0071e3] uppercase">
            Pratiksha Sanap • Core Production Stack
          </span>
        </div>
        <div className="text-[11px] font-mono text-[#86868b]">
          <span>Fullstack AI Stack</span>
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch overflow-y-auto scrollbar-none py-1"
      >
        {skillCategories.map((cat, catIdx) => (
          <div 
            key={catIdx}
            className={`rounded-2xl p-3.5 border transition-colors flex flex-col justify-between h-full ${
              isDark 
                ? 'bg-[#161617]/85 border-[#2c2c2e]' 
                : 'bg-[#ffffff]/90 border-[#d2d2d7] shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#86868b]">
                {cat.title}
              </h4>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2 my-auto">
              {cat.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold tracking-tight transition-all flex items-center gap-1.5 cursor-default ${
                    skill.highlight
                      ? isDark
                        ? 'bg-[#2c2c2e] border-white/15 text-[#f5f5f7] shadow-md shadow-black/40'
                        : 'bg-[#ffffff] border-[#0071e3]/40 text-[#1d1d1f] shadow-sm'
                      : isDark
                        ? 'bg-[#000000]/60 border-[#2c2c2e] text-[#a1a1a6]'
                        : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#6e6e73]'
                  }`}
                >
                  {skill.highlight ? (
                    <RoughAnnotation
                      type={skill.annotation || 'underline'}
                      color={cat.color}
                      show={true}
                      strokeWidth={2.2}
                    >
                      <span className="px-0.5">{skill.name}</span>
                    </RoughAnnotation>
                  ) : (
                    <span>{skill.name}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Terminal Footer Bar */}
      <div className={`pt-3 border-t text-[11px] font-mono flex flex-wrap items-center justify-between gap-2 ${
        isDark ? 'border-[#2c2c2e] text-[#86868b]' : 'border-[#d2d2d7] text-[#6e6e73]'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Production AI Architectures & High-Concurrency Systems</span>
        </div>
        <div className="flex items-center gap-2 font-semibold text-[#0071e3]">
          <span>Python • FastAPI • React • Data Science • GenAI • AWS</span>
        </div>
      </div>

    </div>
  );
}

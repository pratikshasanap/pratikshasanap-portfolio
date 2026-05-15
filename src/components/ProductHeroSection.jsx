import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, ShieldCheck, Terminal, Layers, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import RoughAnnotation from './RoughAnnotation';
import AISkillsMatrix from './AISkillsMatrix';

gsap.registerPlugin(ScrollTrigger);

export default function ProductHeroSection({ theme = 'dark' }) {
  const heroRef = useRef(null);
  const isDark = theme === 'dark';

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.85 } });

    tl.from('.hero-eyebrow', { opacity: 0, y: -16 })
      .from('.hero-main-title', { opacity: 0, y: 35, scale: 0.98 })
      .from('.hero-sub-title', { opacity: 0, y: 20 }, '-=0.35')
      .from('.hero-sub-text', { opacity: 0, y: 20 }, '-=0.35')
      .from('.hero-cta-buttons', { opacity: 0, y: 20 }, '-=0.3')
      .from('.hero-device-mockup', { opacity: 0, y: 40, scale: 0.95 }, '-=0.2');
  }, { scope: heroRef });

  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  return (
    <section ref={heroRef} id="overview" className={`relative pt-36 pb-20 px-6 overflow-hidden flex flex-col items-center transition-colors duration-300 ${
      isDark ? 'bg-[#0b1120] text-[#e2e8f0]' : 'bg-[#fafbfc] text-[#172b4d]'
    }`}>
      
      {/* Background Atlassian Subtle Radial Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#0c66e4]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-[#00b8d9]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
        
        {/* Atlassian Lozenge Badge */}
        <div className={`hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-semibold tracking-wide uppercase mb-6 border transition-colors ${
          isDark 
            ? 'bg-[#111c2e] border-[#1f3354] text-[#388bff]' 
            : 'bg-[#ffffff] border-[#dfe1e6] text-[#0052cc] shadow-sm'
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-[#0c66e4]" />
          <span>Full-Stack AI Engineer • GenAI • FastAPI • React.js</span>
        </div>

        {/* Big Name Headline */}
        <h1 className={`hero-main-title text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] text-center mb-4 ${
          isDark ? 'text-[#ffffff]' : 'text-[#091e42]'
        }`}>
          Pratiksha Sanap
        </h1>

        {/* Subheading */}
        <div className={`hero-sub-title text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-5 ${
          isDark ? 'text-[#e2e8f0]' : 'text-[#172b4d]'
        }`}>
          Building Production GenAI Systems.{' '}
          <RoughAnnotation
            type="underline"
            color="#0c66e4"
            show={true}
            strokeWidth={3}
            animationDuration={1000}
            className="px-1"
          >
            <span className="text-[#0c66e4]">FastAPI & React.js Core.</span>
          </RoughAnnotation>
        </div>

        {/* Subtext */}
        <p className={`hero-sub-text text-base sm:text-lg md:text-xl font-normal max-w-3xl leading-relaxed mb-8 ${
          isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'
        }`}>
          Specializing in end-to-end Generative AI engineering: low-latency RAG pipelines with hybrid vector search, asynchronous FastAPI backends, and responsive React streaming interfaces.
        </p>

        {/* Action Buttons with Atlassian styling */}
        <div className="hero-cta-buttons flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="#projects"
            className="px-6 py-3 rounded font-semibold text-xs tracking-wide transition-all bg-[#0c66e4] hover:bg-[#0052cc] text-white shadow-md shadow-[#0c66e4]/25 flex items-center gap-2 active:scale-95"
          >
            <span>Explore Featured Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://pratiksha-sanap-multi-pdf-advanced.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded font-semibold text-xs tracking-wide transition-all border flex items-center gap-2 active:scale-95 ${
              isDark
                ? 'bg-[#111c2e] hover:bg-[#1a2942] text-[#388bff] border-[#1f3354]'
                : 'bg-white hover:bg-[#f4f5f7] text-[#0052cc] border-[#dfe1e6] shadow-sm'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0c66e4]" />
            <span>Live Multi-PDF RAG Demo</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
          <a
            href="#contact"
            onClick={triggerCelebration}
            className={`px-6 py-3 rounded font-semibold text-xs tracking-wide transition-all border flex items-center gap-2 active:scale-95 ${
              isDark
                ? 'bg-[#111c2e] hover:bg-[#1a2942] text-[#8c9bab] hover:text-white border-[#1f3354]'
                : 'bg-white hover:bg-[#f4f5f7] text-[#5e6c84] hover:text-[#091e42] border-[#dfe1e6] shadow-sm'
            }`}
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Interactive Skills Card (Atlassian Jira/Confluence Canvas Style) */}
        <div className="hero-device-mockup w-full max-w-4xl relative">
          <div className={`rounded-xl p-3 border transition-all ${
            isDark 
              ? 'bg-[#111c2e] border-[#1f3354] shadow-2xl shadow-black/60' 
              : 'bg-[#ffffff] border-[#dfe1e6] shadow-xl shadow-slate-200/50'
          }`}>
            <div className={`rounded-lg overflow-hidden border p-4 sm:p-6 ${
              isDark ? 'bg-[#091322] border-[#1a2a44]' : 'bg-[#f4f5f7] border-[#ebecf0]'
            }`}>
              
              {/* Terminal Screen Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1f3354]/40 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5630]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffab00]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#36b37e]" />
                  <span className={`ml-2 font-medium ${isDark ? 'text-[#e2e8f0]' : 'text-[#172b4d]'}`}>
                    pratiksha@sanap-system ~ fullstack-ai
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#36b37e]">
                  <span>● python 3.11 • fastapi • react 18 • groq llama3</span>
                </div>
              </div>

              {/* Skills Matrix */}
              <div className="h-[270px] sm:h-[300px] w-full p-1 flex flex-col justify-between overflow-hidden mt-2">
                <AISkillsMatrix isDark={isDark} />
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

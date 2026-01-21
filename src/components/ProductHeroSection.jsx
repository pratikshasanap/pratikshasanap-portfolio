import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, ShieldCheck, Terminal, Layers } from 'lucide-react';
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
      .from('.hero-main-title', { opacity: 0, y: 40, scale: 0.97 })
      .from('.hero-sub-title', { opacity: 0, y: 24 }, '-=0.35')
      .from('.hero-sub-text', { opacity: 0, y: 24 }, '-=0.35')
      .from('.hero-cta-buttons', { opacity: 0, y: 20 }, '-=0.3')
      .from('.hero-device-mockup', { opacity: 0, y: 60, scale: 0.92 }, '-=0.2');

    gsap.to('.hero-device-mockup', {
      scale: 1.02,
      rotateX: 3,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: heroRef });

  const triggerCelebration = () => {
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.55 }
    });
  };

  return (
    <section ref={heroRef} id="overview" className={`relative pt-36 pb-20 px-6 overflow-hidden flex flex-col items-center transition-colors duration-500 ${
      isDark ? 'bg-[#000000] text-[#f5f5f7]' : 'bg-[#f5f5f7] text-[#1d1d1f]'
    }`}>
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#0071e3]/12 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/5 w-[380px] h-[380px] bg-[#2997ff]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
        
        {/* Eyebrow badge */}
        <div className={`hero-eyebrow inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border transition-colors ${
          isDark 
            ? 'bg-[#161617] border-[#2c2c2e] text-[#2997ff]' 
            : 'bg-[#ffffff] border-[#d2d2d7] text-[#0071e3] shadow-sm'
        }`}>
          <ShieldCheck className="w-4 h-4 text-[#0071e3]" />
          <span>Senior Fullstack AI Engineer • AWS Certified</span>
        </div>

        {/* Big Name Headline */}
        <h1 className={`hero-main-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.0] text-center mb-4 ${
          isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
        }`}>
          Pratiksha Sanap
        </h1>

        {/* Subheading */}
        <div className={`hero-sub-title text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-5 ${
          isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
        }`}>
          Engineering Production GenAI Systems.{' '}
          <RoughAnnotation
            type="underline"
            color="#0071e3"
            show={true}
            strokeWidth={3}
            animationDuration={1000}
            className="px-1"
          >
            <span className="text-[#0071e3]">Fullstack React & FastAPI Core.</span>
          </RoughAnnotation>
        </div>

        {/* Subtext */}
        <p className={`hero-sub-text text-base sm:text-lg md:text-xl font-light max-w-3xl leading-relaxed mb-8 ${
          isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
        }`}>
          Senior engineer specializing in Python, JavaScript, FastAPI, React, Data Science, and Generative AI. I design low-latency RAG architectures, multi-agent pipelines, and cloud-native services deployed on AWS.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-buttons flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#articles"
            className="px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-lg shadow-[#0071e3]/30 flex items-center gap-2 active:scale-95"
          >
            <span>Explore Architecture Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#certification"
            className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all border flex items-center gap-2 active:scale-95 ${
              isDark
                ? 'bg-[#161617] hover:bg-[#2c2c2e] text-[#f5f5f7] border-[#2c2c2e]'
                : 'bg-white hover:bg-slate-100 text-[#1d1d1f] border-slate-300 shadow-sm'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>AWS Certification</span>
          </a>
          <a
            href="#contact"
            onClick={triggerCelebration}
            className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all border flex items-center gap-2 active:scale-95 ${
              isDark
                ? 'bg-[#161617] hover:bg-[#2c2c2e] text-[#a1a1a6] hover:text-[#f5f5f7] border-[#2c2c2e]'
                : 'bg-white hover:bg-slate-100 text-[#6e6e73] hover:text-[#1d1d1f] border-slate-300 shadow-sm'
            }`}
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Laptop Device Frame Mockup (Apple Style) */}
        <motion.div
          whileHover={{ rotateX: 2, rotateY: -1.5, y: -4 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          className="hero-device-mockup w-full max-w-4xl relative perspective-1000"
        >
          {/* Laptop Lid Screen */}
          <div className="rounded-3xl p-3 bg-gradient-to-b from-[#2c2c2e] via-[#1c1c1e] to-[#161617] border border-white/15 shadow-2xl shadow-black/90">
            <div className="bg-[#000000] rounded-2xl overflow-hidden border border-[#2c2c2e] aspect-[16/10] relative flex flex-col justify-between p-5 sm:p-8">
              
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#2c2c2e] text-xs font-mono text-[#86868b]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[#f5f5f7] font-medium">pratiksha@sanap-macbook-pro ~ zsh</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#86868b]">
                  <span className="text-emerald-400">● node v22 • python 3.12</span>
                </div>
              </div>

              {/* Terminal Screen Body */}
              <div className="my-auto h-[260px] sm:h-[310px] w-full p-1 flex flex-col justify-between overflow-hidden">
                <AISkillsMatrix isDark={isDark} />
              </div>

            </div>
          </div>

          {/* Laptop Base Accent */}
          <div className="w-[85%] h-3 bg-gradient-to-r from-[#2c2c2e] via-[#1c1c1e] to-[#2c2c2e] rounded-b-xl mx-auto border-t border-white/20 shadow-md" />

        </motion.div>

      </div>

    </section>
  );
}

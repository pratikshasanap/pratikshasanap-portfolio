import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, Menu, X, Cpu, ShieldCheck } from 'lucide-react';
import RoughAnnotation from './RoughAnnotation';
import ProfessionalDoodle from './ProfessionalDoodle';

export default function ProductHeaderNav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Projects', href: '#projects' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Banner (Atlassian Blue Accent) */}
      <div className={`py-1.5 px-4 text-center text-xs transition-colors border-b flex items-center justify-center gap-2 ${
        isDark 
          ? 'bg-[#091322] text-[#8c9bab] border-[#1f3354]' 
          : 'bg-[#ebecf0] text-[#42526e] border-[#dfe1e6]'
      }`}>
        <Sparkles className="w-3 h-3 text-[#388bff]" />
        <span className={`font-semibold tracking-wide ${isDark ? 'text-[#e2e8f0]' : 'text-[#172b4d]'}`}>
          Full-Stack AI Engineer • GenAI • FastAPI • React.js
        </span>
      </div>

      {/* Main Nav Bar */}
      <div className={`transition-all duration-300 py-3.5 px-6 border-b ${
        scrolled
          ? isDark 
            ? 'bg-[#0b1120]/90 backdrop-blur-md border-[#1f3354] shadow-xl shadow-black/40'
            : 'bg-[#ffffff]/90 backdrop-blur-md border-[#dfe1e6] shadow-md shadow-slate-200/50'
          : isDark 
            ? 'bg-[#0b1120]/70 backdrop-blur-sm border-[#1f3354]/50'
            : 'bg-[#fafbfc]/70 backdrop-blur-sm border-[#dfe1e6]/60'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className={`text-lg md:text-xl font-bold tracking-tight flex items-center gap-2.5 ${
              isDark ? 'text-[#ffffff]' : 'text-[#091e42]'
            }`}>
              <div className="w-8 h-8 rounded bg-[#0c66e4] text-white flex items-center justify-center font-black text-xs shadow-sm">
                PS
              </div>
              <span>Pratiksha Sanap</span>
            </a>
            <span className={`text-xs font-mono hidden md:inline-block px-2 py-0.5 rounded border ${
              isDark ? 'bg-[#111c2e] text-[#8c9bab] border-[#1f3354]' : 'bg-[#f4f5f7] text-[#5e6c84] border-[#dfe1e6]'
            }`}>
              Full-Stack AI
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors hover:text-[#0c66e4] ${
                  isDark ? 'text-[#8c9bab]' : 'text-[#42526e]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Live demo direct pill */}
            <a
              href="https://pratiksha-sanap-multi-pdf-advanced.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-[#0c66e4] hover:bg-[#0052cc] text-white shadow-sm transition-all"
            >
              <span>Multi-PDF RAG</span>
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded border transition-colors cursor-pointer ${
                isDark 
                  ? 'bg-[#111c2e] hover:bg-[#1a2942] border-[#1f3354] text-[#ffab00]' 
                  : 'bg-[#ffffff] hover:bg-[#f4f5f7] border-[#dfe1e6] text-[#0c66e4]'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded border border-[#1f3354] text-[#8c9bab]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden pt-4 pb-2 border-t mt-3 flex flex-col gap-3 ${
            isDark ? 'border-[#1f3354]' : 'border-[#dfe1e6]'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold py-1.5 ${
                  isDark ? 'text-[#e2e8f0]' : 'text-[#172b4d]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://pratiksha-sanap-multi-pdf-advanced.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold py-2 px-3 rounded bg-[#0c66e4] text-white text-center mt-1"
            >
              Launch Multi-PDF RAG Demo
            </a>
          </div>
        )}

      </div>

    </header>
  );
}

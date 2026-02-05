import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, Menu, X, Cpu, ShieldCheck } from 'lucide-react';
import RoughAnnotation from './RoughAnnotation';
import ProfessionalDoodle from './ProfessionalDoodle';

export default function ProductHeaderNav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Certification', href: '#certification' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Banner (Apple Style) */}
      <div className={`py-1.5 px-4 text-center text-xs transition-colors border-b flex items-center justify-center gap-2 ${
        isDark 
          ? 'bg-[#161617]/90 text-[#86868b] border-[#2c2c2e]' 
          : 'bg-[#e8e8ed]/90 text-[#6e6e73] border-[#d2d2d7]'
      }`}>
        <ProfessionalDoodle type="sparkle" className="w-3.5 h-3.5 text-[#2997ff]" />
        <span className={`font-medium tracking-wide ${isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'}`}>
          Senior Fullstack AI Engineer • AWS Certified Cloud Practitioner
        </span>
      </div>

      {/* Sticky Local Nav */}
      <div className={`transition-all duration-300 py-3 px-6 border-b ${
        scrolled
          ? isDark 
            ? 'bg-[#161617]/85 backdrop-blur-xl border-[#2c2c2e] shadow-2xl shadow-black/80'
            : 'bg-[#ffffff]/85 backdrop-blur-xl border-[#d2d2d7] shadow-xl shadow-slate-200/50'
          : isDark 
            ? 'bg-[#161617]/50 backdrop-blur-md border-[#2c2c2e]/40'
            : 'bg-[#f5f5f7]/50 backdrop-blur-md border-[#d2d2d7]/40'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Brand & Designation */}
          <div className="flex items-baseline gap-3">
            <a href="#" className={`text-lg md:text-xl font-bold tracking-tight flex items-center gap-2.5 ${
              isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
            }`}>
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0071e3] to-[#2997ff] p-[1.5px] shadow-sm">
                <div className={`w-full h-full rounded-[6.5px] flex items-center justify-center font-bold text-xs ${
                  isDark ? 'bg-[#000000] text-[#2997ff]' : 'bg-[#ffffff] text-[#0071e3]'
                }`}>
                  PS
                </div>
              </div>
              <RoughAnnotation
                type="underline"
                color="#0071e3"
                show={true}
                strokeWidth={2}
              >
                <span>Pratiksha Sanap</span>
              </RoughAnnotation>
            </a>
            <span className={`text-xs font-mono hidden lg:inline-block ${
              isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
            }`}>Senior Fullstack AI Engineer</span>
          </div>

          {/* Desktop Nav Links & Controls */}
          <div className="flex items-center gap-6 text-xs">
            <nav className={`hidden md:flex items-center gap-6 font-medium ${
              isDark ? 'text-[#a1a1a6]' : 'text-[#6e6e73]'
            }`}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors hover:text-[#0071e3] ${
                    isDark ? 'text-[#a1a1a6]' : 'text-[#6e6e73]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className={`px-3 py-1.5 rounded-full border text-xs font-medium transition-all flex items-center gap-2 cursor-pointer active:scale-95 ${
                isDark
                  ? 'bg-[#2c2c2e] border-[#3a3a3c] text-[#f5f5f7] hover:bg-[#3a3a3c]'
                  : 'bg-[#e8e8ed] border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#d2d2d7]'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#0071e3]" />
                  <span>Dark</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1.5 rounded-lg border transition-colors ${
                isDark ? 'bg-[#2c2c2e] border-[#3a3a3c] text-[#f5f5f7]' : 'bg-[#e8e8ed] border-[#d2d2d7] text-[#1d1d1f]'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-6 py-4 border-b ${
          isDark ? 'bg-[#161617]/95 border-[#2c2c2e] text-[#f5f5f7]' : 'bg-[#ffffff]/95 border-[#d2d2d7] text-[#1d1d1f]'
        } backdrop-blur-xl`}>
          <nav className="flex flex-col gap-3 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#0071e3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

    </header>
  );
}

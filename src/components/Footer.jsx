import React from 'react';
import { ArrowUp, Mail, ShieldCheck, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ theme = 'dark' }) {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-500 pt-16 pb-12 relative overflow-hidden ${
      isDark ? 'bg-[#161617] border-[#2c2c2e] text-[#f5f5f7]' : 'bg-[#e8e8ed] border-[#d2d2d7] text-[#1d1d1f]'
    }`}>
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header Banner */}
        <div className={`flex flex-col md:flex-row items-center justify-between pb-12 border-b gap-6 ${
          isDark ? 'border-[#2c2c2e]' : 'border-[#d2d2d7]'
        }`}>
          <div>
            <div className={`flex items-center gap-2 text-2xl font-extrabold tracking-tight mb-1 ${
              isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
            }`}>
              <span>Pratiksha Sanap</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0071e3]" />
            </div>
            <p className={`text-xs font-light max-w-md ${isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'}`}>
              Senior Fullstack AI Engineer • AWS Certified Cloud Practitioner. Engineering production GenAI architectures, FastAPI backends, and responsive React web applications.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className={`px-4 py-2 rounded-full transition-all border cursor-pointer active:scale-95 flex items-center gap-1.5 text-xs font-semibold ${
                isDark
                  ? 'bg-[#2c2c2e] text-[#f5f5f7] hover:bg-[#3a3a3c] border-[#2c2c2e]'
                  : 'bg-[#ffffff] text-[#1d1d1f] hover:bg-[#f5f5f7] border-[#d2d2d7] shadow-sm'
              }`}
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b text-xs ${
          isDark ? 'border-[#2c2c2e]' : 'border-[#d2d2d7]'
        }`}>
          
          {/* Col 1: Sitemap */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#0071e3]">
              Navigation
            </h4>
            <ul className={`flex flex-col gap-2.5 font-medium ${isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'}`}>
              <li><a href="#overview" className="hover:text-[#0071e3] transition-colors">Overview</a></li>
              <li><a href="#competencies" className="hover:text-[#0071e3] transition-colors">Competencies</a></li>
              <li><a href="#certification" className="hover:text-[#0071e3] transition-colors">AWS Certification</a></li>
              <li><a href="#articles" className="hover:text-[#0071e3] transition-colors">Technical Articles</a></li>
              <li><a href="#contact" className="hover:text-[#0071e3] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 2: Core Stack */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#0071e3]">
              Technical Stack
            </h4>
            <ul className={`flex flex-col gap-2.5 font-medium ${isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'}`}>
              <li>Python 3.12 & asyncio</li>
              <li>FastAPI Microservices</li>
              <li>React 19 & Modern JavaScript</li>
              <li>Data Science & Scikit-learn</li>
              <li>Generative AI & Hybrid RAG</li>
              <li>LangGraph Multi-Agent Workflows</li>
            </ul>
          </div>

          {/* Col 3: Certification & Cloud */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#0071e3]">
              AWS Cloud Credentials
            </h4>
            <div className={`p-3.5 rounded-2xl border mb-3 ${
              isDark ? 'bg-[#000000]/60 border-[#2c2c2e]' : 'bg-[#ffffff] border-[#d2d2d7]'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold mb-1 text-[#ff9f0a]">
                <ShieldCheck className="w-4 h-4 text-[#ff9f0a]" />
                <span>AWS Certified</span>
              </div>
              <p className={`text-[11px] leading-relaxed ${isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'}`}>
                Cloud Practitioner validation covering AWS Security, Compute, S3 Storage, and Well-Architected Framework.
              </p>
            </div>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#0071e3]">
              Connect & Source
            </h4>
            <ul className={`flex flex-col gap-2.5 font-medium ${isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'}`}>
              <li>
                <a href="mailto:sanappratiksha@gmail.com" className="hover:text-[#0071e3] transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>sanappratiksha@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/pratikshasanap" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071e3] transition-colors flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/pratikshasanap</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071e3] transition-colors flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono ${
          isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
        }`}>
          <div>
            © {new Date().getFullYear()} Pratiksha Sanap. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19 • FastAPI Backend • Vite • AWS Ready</span>
          </div>
        </div>

      </div>

    </footer>
  );
}

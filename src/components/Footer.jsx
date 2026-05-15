import React from 'react';
import { ArrowUp, Mail, ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Footer({ theme = 'dark' }) {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-300 pt-16 pb-12 relative overflow-hidden ${
      isDark ? 'bg-[#091322] border-[#1f3354] text-[#e2e8f0]' : 'bg-[#ebecf0] border-[#dfe1e6] text-[#172b4d]'
    }`}>
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Header Banner */}
        <div className={`flex flex-col md:flex-row items-center justify-between pb-12 border-b gap-6 ${
          isDark ? 'border-[#1f3354]' : 'border-[#dfe1e6]'
        }`}>
          <div>
            <div className={`flex items-center gap-2 text-2xl font-black tracking-tight mb-1 ${
              isDark ? 'text-[#ffffff]' : 'text-[#091e42]'
            }`}>
              <span>Pratiksha Sanap</span>
              <span className="w-2 h-2 rounded-full bg-[#0c66e4]" />
            </div>
            <p className={`text-xs font-normal max-w-md ${isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'}`}>
              Full-Stack AI Engineer | GenAI • FastAPI • React.js. Engineering production RAG platforms, asynchronous microservices, and interactive streaming web clients.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className={`px-4 py-2 rounded transition-all border cursor-pointer active:scale-95 flex items-center gap-1.5 text-xs font-semibold ${
                isDark
                  ? 'bg-[#111c2e] text-[#e2e8f0] hover:bg-[#1a2942] border-[#1f3354]'
                  : 'bg-[#ffffff] text-[#091e42] hover:bg-[#f4f5f7] border-[#dfe1e6] shadow-sm'
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
          isDark ? 'border-[#1f3354]' : 'border-[#dfe1e6]'
        }`}>
          
          {/* Col 1: Sitemap */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#388bff]">
              Navigation
            </h4>
            <ul className={`flex flex-col gap-2.5 font-medium ${isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'}`}>
              <li><a href="#overview" className="hover:text-[#0c66e4] transition-colors">Overview</a></li>
              <li><a href="#projects" className="hover:text-[#0c66e4] transition-colors">Featured Projects</a></li>
              <li><a href="#competencies" className="hover:text-[#0c66e4] transition-colors">Competencies</a></li>
              <li><a href="#articles" className="hover:text-[#0c66e4] transition-colors">Technical Articles</a></li>
              <li><a href="#contact" className="hover:text-[#0c66e4] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 2: Core Stack */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#388bff]">
              Technical Stack
            </h4>
            <ul className={`flex flex-col gap-2.5 font-medium ${isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'}`}>
              <li>Python 3.11+ & asyncio</li>
              <li>FastAPI & Pydantic v2</li>
              <li>React 18 & Modern JavaScript</li>
              <li>Groq Llama 3.1 & LangChain</li>
              <li>ChromaDB & FlashRank Re-rank</li>
            </ul>
          </div>

          {/* Col 3: Key Deployments */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#388bff]">
              Featured Deployment
            </h4>
            <ul className={`flex flex-col gap-2.5 font-medium ${isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'}`}>
              <li>
                <a 
                  href="https://pratiksha-sanap-multi-pdf-advanced.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0c66e4] transition-colors flex items-center gap-1"
                >
                  <span>Multi-PDF RAG App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/pratikshasanap/multipdf-rag-base-chatbot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#0c66e4] transition-colors flex items-center gap-1"
                >
                  <span>RAG Engine Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>Pre-cached Vector Database</li>
              <li>Hybrid BM25 + Dense Search</li>
            </ul>
          </div>

          {/* Col 4: Verified Channels */}
          <div>
            <h4 className="font-mono font-bold uppercase tracking-wider mb-4 text-[11px] text-[#388bff]">
              Connect
            </h4>
            <div className="flex flex-col gap-3 font-medium">
              <a
                href="https://github.com/pratikshasanap"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 hover:text-[#0c66e4] transition-colors ${
                  isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/pratikshasanap</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 ${
          isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'
        }`}>
          <div>
            © {new Date().getFullYear()} Pratiksha Sanap. Engineered for production performance.
          </div>
          <div className="flex items-center gap-2">
            <span>Atlassian Design Inspired</span>
            <span>•</span>
            <span>FastAPI & React AI Architecture</span>
          </div>
        </div>

      </div>

    </footer>
  );
}

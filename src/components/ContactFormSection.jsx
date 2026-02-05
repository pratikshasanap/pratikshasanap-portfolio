import React, { useState } from 'react';
import { Send, Sparkles, CheckCircle2, Mail, User, MessageSquare, Tag, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import RoughAnnotation from './RoughAnnotation';

export default function ContactFormSection({ theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Generative AI Collaboration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Celebration Confetti Burst
    const count = 180;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });

    // Open mailto trigger
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${formData.topic}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Pratiksha,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n`
    );
    window.open(`mailto:sanappratiksha@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-24 px-6 border-t transition-colors duration-500 relative overflow-hidden ${
      isDark ? 'bg-[#000000] border-[#2c2c2e] text-[#f5f5f7]' : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f]'
    }`}>
      
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#0071e3]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4 border text-[#0071e3] border-[#0071e3]/30 bg-[#0071e3]/10">
            <Mail className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Initiate Direct Communication</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
          }`}>
            Let's Build Something.{' '}
            <RoughAnnotation
              type="underline"
              color="#0071e3"
              show={true}
              strokeWidth={3}
            >
              <span>Get in Touch.</span>
            </RoughAnnotation>
          </h2>

          <p className={`text-base sm:text-lg font-light leading-relaxed ${
            isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
          }`}>
            Available for Senior Fullstack AI Engineering roles, enterprise GenAI consulting, and high-concurrency architecture advisory.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className={`rounded-3xl p-8 sm:p-12 border transition-all ${
          isDark 
            ? 'bg-[#161617]/90 border-[#2c2c2e] shadow-2xl shadow-black/80' 
            : 'bg-[#ffffff] border-[#d2d2d7] shadow-xl shadow-slate-200'
        }`}>
          
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">Message Prepared</h3>
              <p className={`text-sm max-w-md mx-auto mb-6 ${isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'}`}>
                Your email client has been opened with your inquiry. You can also contact me directly at sanappratiksha@gmail.com.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold border transition-all cursor-pointer bg-[#0071e3] text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-xs font-mono font-semibold uppercase tracking-wider mb-2 ${
                    isDark ? 'text-[#a1a1a6]' : 'text-[#424245]'
                  }`}>
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm transition-all outline-none ${
                        isDark 
                          ? 'bg-[#000000] border-[#2c2c2e] text-[#f5f5f7] focus:border-[#0071e3]' 
                          : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] focus:border-[#0071e3]'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-mono font-semibold uppercase tracking-wider mb-2 ${
                    isDark ? 'text-[#a1a1a6]' : 'text-[#424245]'
                  }`}>
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm transition-all outline-none ${
                        isDark 
                          ? 'bg-[#000000] border-[#2c2c2e] text-[#f5f5f7] focus:border-[#0071e3]' 
                          : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] focus:border-[#0071e3]'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono font-semibold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-[#a1a1a6]' : 'text-[#424245]'
                }`}>
                  Discussion Topic
                </label>
                <div className="relative">
                  <Tag className="w-4 h-4 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm transition-all outline-none appearance-none cursor-pointer ${
                      isDark 
                        ? 'bg-[#000000] border-[#2c2c2e] text-[#f5f5f7] focus:border-[#0071e3]' 
                        : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] focus:border-[#0071e3]'
                    }`}
                  >
                    <option value="Generative AI Collaboration">Generative AI & LLM Systems Collaboration</option>
                    <option value="Fullstack AI Engineering">Fullstack AI Engineering (FastAPI + React)</option>
                    <option value="AWS Cloud Architecture">AWS Cloud Architecture & Deployment</option>
                    <option value="Technical Advisory">Technical Advisory & Data Science Consulting</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-xs font-mono font-semibold uppercase tracking-wider mb-2 ${
                  isDark ? 'text-[#a1a1a6]' : 'text-[#424245]'
                }`}>
                  Message & Scope
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Outline your engineering requirements, project scope, or role details..."
                    className={`w-full p-4 rounded-2xl border text-sm transition-all outline-none resize-none ${
                      isDark 
                        ? 'bg-[#000000] border-[#2c2c2e] text-[#f5f5f7] focus:border-[#0071e3]' 
                        : 'bg-[#f5f5f7] border-[#d2d2d7] text-[#1d1d1f] focus:border-[#0071e3]'
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-semibold text-xs tracking-wide uppercase transition-all bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-lg shadow-[#0071e3]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Dispatch Inquiry</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          )}

          {/* Direct channels */}
          <div className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-mono ${
            isDark ? 'border-[#2c2c2e] text-[#86868b]' : 'border-[#d2d2d7] text-[#6e6e73]'
          }`}>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#0071e3]" />
              <a href="mailto:sanappratiksha@gmail.com" className="hover:text-[#0071e3] transition-colors">
                sanappratiksha@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/pratikshasanap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#0071e3] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

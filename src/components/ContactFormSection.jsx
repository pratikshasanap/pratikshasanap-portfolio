import React, { useState } from 'react';
import { Send, Sparkles, CheckCircle2, Mail, User, MessageSquare, Tag, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import RoughAnnotation from './RoughAnnotation';

export default function ContactFormSection({ theme = 'dark' }) {
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Generative AI & Full-Stack Collaboration',
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
    window.open(`mailto:pratikshasanap2021@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setSubmitted(true);
  };

  return (
    <section id="contact" className={`py-24 px-6 border-t transition-colors duration-300 relative overflow-hidden ${isDark ? 'bg-[#0b1120] border-[#1f3354] text-[#e2e8f0]' : 'bg-[#fafbfc] border-[#dfe1e6] text-[#172b4d]'
      }`}>

      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0c66e4]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase mb-3 bg-[#0c66e4]/10 text-[#388bff] border border-[#0c66e4]/30">
            <Mail className="w-3.5 h-3.5 text-[#0c66e4]" />
            <span>Direct Communication</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 ${isDark ? 'text-[#ffffff]' : 'text-[#091e42]'
            }`}>
            Let's Build Together.{' '}
            <RoughAnnotation
              type="underline"
              color="#0c66e4"
              show={true}
              strokeWidth={3}
            >
              <span className="text-[#0c66e4]">Get in Touch.</span>
            </RoughAnnotation>
          </h2>

          <p className={`text-sm sm:text-base font-normal ${isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'
            }`}>
            Looking for a Senior Full-Stack AI Engineer to build RAG architectures, FastAPI async backends, or real-time React streaming web apps? Let's connect.
          </p>
        </div>

        {/* Contact Container with Atlassian Card Treatment */}
        <div className={`p-8 sm:p-12 rounded-xl border transition-all ${isDark
          ? 'bg-[#111c2e] border-[#1f3354] shadow-2xl shadow-black/50'
          : 'bg-[#ffffff] border-[#dfe1e6] shadow-xl shadow-slate-200/50'
          }`}>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

            {/* Left Channel Overview */}
            <div className="md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#091e42]'}`}>
                  Connect Directly
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'}`}>
                  Reach out through GitHub or send a message directly using the form.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://github.com/pratikshasanap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded border transition-colors ${isDark
                      ? 'bg-[#18263e] border-[#2b4166] text-[#e2e8f0] hover:border-[#388bff]'
                      : 'bg-[#f4f5f7] border-[#dfe1e6] text-[#172b4d] hover:border-[#0c66e4]'
                      }`}
                  >
                    <GithubIcon className="w-5 h-5 text-[#388bff]" />
                    <div className="text-xs">
                      <div className="font-semibold">GitHub Profile</div>
                      <div className="text-[11px] text-[#8c9bab]">@pratikshasanap</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1f3354]/40">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#36b37e]">
                  <span className="w-2 h-2 rounded-full bg-[#36b37e] animate-pulse" />
                  <span>Available for Full-Stack AI Roles</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className={`p-8 rounded border text-center flex flex-col items-center justify-center h-full ${isDark ? 'bg-[#0d1624] border-[#1f3354]' : 'bg-[#f4f5f7] border-[#dfe1e6]'
                  }`}>
                  <div className="w-12 h-12 rounded-full bg-[#36b37e]/15 text-[#36b37e] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-[#091e42]'}`}>
                    Message Prepared!
                  </h4>
                  <p className={`text-xs max-w-sm mb-4 ${isDark ? 'text-[#8c9bab]' : 'text-[#5e6c84]'}`}>
                    Your email client has been opened with your inquiry details. Looking forward to speaking with you!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#388bff] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className={`block font-semibold mb-1.5 ${isDark ? 'text-[#e2e8f0]' : 'text-[#172b4d]'}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded border outline-none transition-colors ${isDark
                        ? 'bg-[#0d1624] border-[#1f3354] text-white focus:border-[#388bff]'
                        : 'bg-white border-[#dfe1e6] text-[#091e42] focus:border-[#0c66e4]'
                        }`}
                    />
                  </div>

                  <div>
                    <label className={`block font-semibold mb-1.5 ${isDark ? 'text-[#e2e8f0]' : 'text-[#172b4d]'}`}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded border outline-none transition-colors ${isDark
                        ? 'bg-[#0d1624] border-[#1f3354] text-white focus:border-[#388bff]'
                        : 'bg-white border-[#dfe1e6] text-[#091e42] focus:border-[#0c66e4]'
                        }`}
                    />
                  </div>

                  <div>
                    <label className={`block font-semibold mb-1.5 ${isDark ? 'text-[#e2e8f0]' : 'text-[#172b4d]'}`}>
                      Inquiry Subject
                    </label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded border outline-none transition-colors ${isDark
                        ? 'bg-[#0d1624] border-[#1f3354] text-white focus:border-[#388bff]'
                        : 'bg-white border-[#dfe1e6] text-[#091e42] focus:border-[#0c66e4]'
                        }`}
                    >
                      <option>Generative AI & Full-Stack Collaboration</option>
                      <option>RAG System Architecture Consultation</option>
                      <option>FastAPI Backend Development</option>
                      <option>Full-time Career Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block font-semibold mb-1.5 ${isDark ? 'text-[#e2e8f0]' : 'text-[#172b4d]'}`}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe your project, architecture, or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded border outline-none transition-colors resize-none ${isDark
                        ? 'bg-[#0d1624] border-[#1f3354] text-white focus:border-[#388bff]'
                        : 'bg-white border-[#dfe1e6] text-[#091e42] focus:border-[#0c66e4]'
                        }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded font-semibold text-xs tracking-wide transition-all bg-[#0c66e4] hover:bg-[#0052cc] text-white shadow-md shadow-[#0c66e4]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

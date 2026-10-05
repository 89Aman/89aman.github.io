import React, { useState } from 'react';
import { Mail, Globe, Send, CalendarCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './ui/icons';

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shasarita23@gmail.com',
    href: 'mailto:shasarita23@gmail.com',
    color: '#4F98A3',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'sharmaaman26',
    href: 'https://linkedin.com/in/sharmaaman26',
    color: '#0077b5',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '89Aman',
    href: 'https://github.com/89Aman',
    color: '#6e5494',
  },
  {
    icon: Globe,
    label: 'Production Domain',
    value: 'amanworks.runs-on.dev',
    href: 'https://amanworks.runs-on.dev',
    color: '#6DBF8F',
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:shasarita23@gmail.com?subject=Contact from ${encodeURIComponent(
      formData.name
    )} (${encodeURIComponent(formData.email)})&body=${encodeURIComponent(formData.message)}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D12]/95 relative border-t border-[#1F1F2C] backdrop-blur-sm">
      <div className="w-full max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A24] border border-[#2A2A35] text-[#4F98A3] text-xs font-mono mb-4">
            <Mail size={13} />
            <span>Direct Channels</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">Let's Build Together</h2>
          <p className="text-[#797876] max-w-xl mx-auto text-base">
            Whether you want to collaborate on multi-agent workflows, need a Python/FastAPI engineer for high-concurrency systems, or want to discuss opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Methods */}
          <div className="space-y-6">
            <p className="text-[#CDCCCA] leading-relaxed text-sm md:text-base">
              I am open to high-impact software engineering roles, hackathon teams, and AI infrastructure collaborations.
              Reach out through any platform below or book a quick 30-minute sync.
            </p>

            <div className="space-y-3 pt-2">
              {CONTACT_METHODS.map((method) => {
                const IconComponent = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#13131A] border border-[#2A2A35] hover:border-[#4F98A3] transition-all group hover:shadow-lg hover:shadow-[#4F98A3]/5"
                  >
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center bg-[#0D0D12] shrink-0"
                      style={{ border: `1px solid ${method.color}` }}
                    >
                      <IconComponent size={20} style={{ color: method.color }} />
                    </div>
                    <div>
                      <span className="block text-xs text-[#797876] uppercase tracking-wider font-mono">
                        {method.label}
                      </span>
                      <span className="text-sm font-medium text-[#CDCCCA] group-hover:text-[#4F98A3] transition-colors">
                        {method.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="p-6 md:p-8 rounded-xl bg-[#13131A] border border-[#2A2A35]">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 size={48} className="mx-auto text-[#6DBF8F]" />
                <h3 className="text-xl font-bold text-white font-display">Message Prepared!</h3>
                <p className="text-sm text-[#A1A1AA]">
                  Your mail client has been opened with your message. Thank you for reaching out!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-[#1A1A24] text-xs font-mono text-[#4F98A3] border border-[#2A2A35] hover:bg-[#4F98A3] hover:text-[#0D0D12] transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[#797876] uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D12] border border-[#2A2A35] text-[#CDCCCA] placeholder-[#797876] focus:border-[#4F98A3] focus:outline-none transition-colors text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#797876] uppercase mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D12] border border-[#2A2A35] text-[#CDCCCA] placeholder-[#797876] focus:border-[#4F98A3] focus:outline-none transition-colors text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#797876] uppercase mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let's build a multi-agent system or discuss a project..."
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D12] border border-[#2A2A35] text-[#CDCCCA] placeholder-[#797876] focus:border-[#4F98A3] focus:outline-none transition-colors text-sm font-mono resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-[#4F98A3] text-[#0D0D12] rounded-lg font-semibold hover:bg-[#6DBF8F] transition-all flex items-center justify-center gap-2 font-mono text-sm shadow-lg shadow-[#4F98A3]/15 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send size={16} />
                  <span>Send Direct Email</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Book a Meeting CTA */}
        <div className="mt-16 text-center">
          <div className="relative inline-block w-full max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4F98A3] to-[#6DBF8F] rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative p-8 md:p-10 rounded-2xl bg-[#13131A] border border-[#2A2A35]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4F98A3] to-[#6DBF8F] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#4F98A3]/20">
                <CalendarCheck size={26} className="text-[#0D0D12]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                Prefer a <span className="text-[#4F98A3]">live conversation</span>?
              </h3>
              <p className="text-sm text-[#797876] max-w-md mx-auto mb-6">
                Skip the email queue. Book a 30-minute sync on Cal.com to discuss project architecture, hackathons, or engineering roles.
              </p>

              <a
                href="https://cal.com/aman-sharma-a0i0rd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#4F98A3] to-[#6DBF8F] text-[#0D0D12] rounded-xl font-semibold text-base shadow-lg shadow-[#4F98A3]/25 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <CalendarCheck size={18} />
                <span>Book a Meeting</span>
                <ArrowRight size={16} />
              </a>

              <p className="text-xs text-[#797876] mt-4 font-mono">⚡ Free · 30 min · Cal.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

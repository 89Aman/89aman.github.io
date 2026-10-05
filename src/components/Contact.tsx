import React, { useState } from 'react';
import { Mail, Globe, Send, CalendarCheck, ArrowRight, CheckCircle2, Video, Zap, Clock } from 'lucide-react';
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

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
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
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[#797876] uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D12] border border-[#2A2A35] text-[#CDCCCA] placeholder-[#797876] focus:border-[#4F98A3] focus:outline-none transition-colors text-sm font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-[#797876] uppercase mb-2">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#0D0D12] border border-[#2A2A35] text-[#CDCCCA] placeholder-[#797876] focus:border-[#4F98A3] focus:outline-none transition-colors text-sm font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[#797876] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Let's discuss autonomous agent architecture or backend systems..."
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

        {/* ULTRA-PREMIUM Book a Meeting Card with Apple Liquid Glass Effect */}
        <div className="text-center">
          <div className="relative inline-block w-full max-w-3xl mx-auto">
            {/* Apple Liquid Glass: Deep Fluid Caustic Backlight & Dispersion */}
            <div className="absolute -inset-4 rounded-[3.5rem] liquid-glass-glow opacity-55 pointer-events-none"></div>
            <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-r from-[#4F98A3] via-[#6DBF8F] to-[#38BDF8] opacity-40 blur-xl animate-pulse pointer-events-none"></div>

            {/* Apple Liquid Glass: Polished Specular Crystal Bevel & Border Frame */}
            <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-b from-white/40 via-[#4F98A3]/30 to-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(79,152,163,0.3)]">
              {/* Liquid Glass Body: High Refraction + Saturation + Frosted Depth */}
              <div className="relative p-8 sm:p-12 md:p-14 rounded-[2rem] bg-gradient-to-b from-[#161622]/80 via-[#111118]/75 to-[#0B0B10]/85 backdrop-blur-3xl backdrop-saturate-[200%] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),inset_0_-1px_1px_rgba(0,0,0,0.6)]">
                
                {/* Apple VisionOS Dynamic Shimmer Sweep */}
                <div className="liquid-glass-sheen" />

                {/* Specular Diagonal Sheen (Apple VisionOS Glass Refraction) */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.12] via-transparent to-transparent opacity-80" />
                
                {/* Razor-sharp Specular Meniscus Light Ribbon */}
                <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

                {/* Radial ambient liquid light pool inside card */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-50"
                  style={{
                    backgroundImage: 'radial-gradient(ellipse at 50% -10%, rgba(79, 152, 163, 0.45) 0%, rgba(109, 191, 143, 0.15) 50%, transparent 75%)',
                  }}
                />

                {/* Meeting Icon */}
                <div className="relative flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F98A3] to-[#6DBF8F] flex items-center justify-center shadow-xl shadow-[#4F98A3]/30 ring-4 ring-[#4F98A3]/10">
                    <CalendarCheck size={30} className="text-[#0D0D12]" />
                  </div>
                </div>

                {/* Heading */}
                <h3 className="relative text-3xl sm:text-4xl font-bold text-white mb-3 font-display tracking-tight">
                  Prefer a{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F98A3] via-[#6DBF8F] to-[#4F98A3]">
                    live conversation
                  </span>
                  ?
                </h3>

                {/* Subtitle */}
                <p className="relative text-[#A1A1AA] max-w-lg mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                  Skip the back-and-forth emails. Pick a time directly on my calendar to talk multi-agent architecture, backend infrastructure, or engineering collaborations.
                </p>

                {/* CTA Button */}
                <div className="relative">
                  <a
                    href="https://cal.com/aman-sharma-a0i0rd"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="book-meeting-cta"
                    className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 bg-gradient-to-r from-[#4F98A3] via-[#5ec4b1] to-[#6DBF8F] text-[#0D0D12] rounded-xl font-bold text-base shadow-xl shadow-[#4F98A3]/30 hover:shadow-[#4F98A3]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                  >
                    <CalendarCheck size={20} />
                    <span>Book a Meeting</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1.5 transition-transform duration-200"
                    />
                  </a>
                </div>

                {/* Feature Value Props */}
                <div className="relative mt-8 pt-6 border-t border-[#2A2A35]/60 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#797876]">
                  <span className="flex items-center gap-1.5">
                    <Zap size={14} className="text-[#6DBF8F]" />
                    <span>Instant Confirmation</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#4F98A3]" />
                    <span>30 Minutes · Free</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Video size={14} className="text-[#8B7EC8]" />
                    <span>Google Meet Link</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

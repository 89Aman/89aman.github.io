import React from 'react';
import { Terminal, Mail, ArrowUp, Calendar, Globe, Code2 } from 'lucide-react';
import { Github, Linkedin } from './ui/icons';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const navbarHeight = 80;
      const offset = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#09090D] border-t border-[#1F1F2C] relative z-10 overflow-hidden">
      {/* Top subtle gradient glow line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#4F98A3]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#1A1A24]">
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <a
                href="#home"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2.5 text-xl font-mono text-[#4F98A3] group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#13131A] border border-[#2A2A35] flex items-center justify-center group-hover:border-[#4F98A3] transition-colors">
                  <Terminal size={17} className="text-[#4F98A3]" />
                </div>
                <span className="font-bold text-white tracking-tight">aman.dev</span>
              </a>

              {/* Status Beacon */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#13131A] border border-[#2A2A35] text-[11px] font-mono text-[#CDCCCA]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
                </span>
                <span>Operational</span>
              </div>
            </div>

            <p className="text-[#8E8D8A] text-sm leading-relaxed max-w-sm">
              Engineering autonomous multi-agent architectures, production-grade RAG retrieval engines, and high-concurrency cloud backends.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-[#797876]">
              <span className="px-2.5 py-1 rounded-md bg-[#13131A] border border-[#22222E]">
                📍 Raipur, India
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#13131A] border border-[#22222E]">
                🌐 UTC+5:30 (IST)
              </span>
            </div>
          </div>

          {/* Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              System Index
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="group inline-flex items-center gap-2 text-[#8E8D8A] hover:text-[#4F98A3] transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2A2A35] group-hover:bg-[#4F98A3] transition-colors"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Channels (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Direct Channels
            </h4>
            <p className="text-xs text-[#8E8D8A] leading-relaxed">
              Available for technical collaborations, AI architecture discussions, and engineering opportunities.
            </p>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="https://github.com/89Aman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#13131A] border border-[#22222E] text-[#CDCCCA] hover:text-[#4F98A3] hover:border-[#4F98A3]/50 transition-all text-xs font-mono group"
              >
                <Github size={15} className="text-[#8E8D8A] group-hover:text-[#4F98A3] transition-colors" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sharmaaman26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#13131A] border border-[#22222E] text-[#CDCCCA] hover:text-[#4F98A3] hover:border-[#4F98A3]/50 transition-all text-xs font-mono group"
              >
                <Linkedin size={15} className="text-[#8E8D8A] group-hover:text-[#4F98A3] transition-colors" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:shasarita23@gmail.com"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#13131A] border border-[#22222E] text-[#CDCCCA] hover:text-[#4F98A3] hover:border-[#4F98A3]/50 transition-all text-xs font-mono group"
              >
                <Mail size={15} className="text-[#8E8D8A] group-hover:text-[#4F98A3] transition-colors" />
                <span>Email</span>
              </a>
              <a
                href="https://cal.com/aman-sharma-a0i0rd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#13131A] border border-[#22222E] text-[#6DBF8F] hover:text-white hover:border-[#6DBF8F]/50 transition-all text-xs font-mono group"
              >
                <Calendar size={15} className="text-[#6DBF8F]" />
                <span>Book 30m</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#797876]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Aman Sharma.</span>
            <span className="text-[#2A2A35]">·</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#8E8D8A]">
              <Code2 size={13} className="text-[#4F98A3]" />
              <span>Python 3.12 · FastAPI · React</span>
            </span>
            <span className="text-[#2A2A35]">·</span>
            <a
              href="https://amanworks.runs-on.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#4F98A3] hover:text-[#6DBF8F] transition-colors"
            >
              <Globe size={12} />
              <span>amanworks.runs-on.dev</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <a
        href="#home"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded-xl bg-[#13131A]/90 backdrop-blur-md border border-[#2A2A35] text-[#CDCCCA] z-40 hover:text-white hover:border-[#4F98A3] hover:shadow-lg hover:shadow-[#4F98A3]/20 transition-all hover:scale-105 active:scale-95"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}


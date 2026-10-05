import React from 'react';
import { Terminal, Mail, ArrowUp, Calendar } from 'lucide-react';
import { Github, Linkedin } from './ui/icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090D] border-t border-[#1F1F2C] relative z-10 overflow-hidden">
      {/* Top subtle gradient glow line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#4F98A3]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#1A1A24]">
          {/* Brand & Mission (7 cols) */}
          <div className="md:col-span-7 space-y-4">
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

            <p className="text-[#8E8D8A] text-sm leading-relaxed max-w-md">
              Engineering autonomous multi-agent architectures, production-grade RAG retrieval engines, and high-concurrency cloud backends.
            </p>
          </div>

          {/* Connect & Channels (5 cols) */}
          <div className="md:col-span-5 space-y-4">
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


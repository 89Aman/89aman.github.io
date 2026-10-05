import React from 'react';
import { Terminal, Mail, Heart, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './ui/icons';

const QUICK_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#skills' },
  { name: 'Journey', href: '#journey' },
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
    <footer className="bg-[#0D0D12] border-t border-[#2A2A35] relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xl font-mono text-[#4F98A3]"
            >
              <Terminal size={20} />
              <span className="font-bold text-white">aman.dev</span>
            </a>
            <p className="text-[#797876] text-sm leading-relaxed max-w-sm">
              Engineering autonomous multi-agent workflows, production RAG search engines, and resilient cloud backends.
            </p>
            <p className="text-[#797876] text-xs font-mono">
              Raipur, Chhattisgarh, India · Noventra Labs
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#CDCCCA] uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-[#797876] hover:text-[#4F98A3] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold text-[#CDCCCA] uppercase tracking-wider mb-4 font-mono">
              Connect
            </h4>
            <div className="flex gap-2.5">
              <a
                href="https://github.com/89Aman"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#797876] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/sharmaaman26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#797876] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:shasarita23@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#797876] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#2A2A35] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#797876]">
          <p>© {currentYear} Aman Sharma. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with</span>
            <Heart size={13} className="text-[#4F98A3] fill-current" />
            <span>and deployed on</span>
            <a
              href="https://amanworks.runs-on.dev"
              className="text-[#6DBF8F] hover:underline"
            >
              runs-on.dev
            </a>
          </p>
        </div>

        <p className="text-center text-[11px] text-[#797876]/70 mt-6 font-mono">
          © {currentYear} Aman Sharma · Python + React · Raipur, India
        </p>
      </div>

      {/* Back to top floating button */}
      <a
        href="#home"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center rounded-full bg-[#4F98A3] text-[#0D0D12] z-40 hover:bg-[#6DBF8F] shadow-lg shadow-[#4F98A3]/25 transition-all hover:scale-105 active:scale-95"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
}

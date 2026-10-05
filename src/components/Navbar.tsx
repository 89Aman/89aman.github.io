import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Github, Linkedin } from './ui/icons';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Tech Stack', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D12]/85 backdrop-blur-md border-b border-[#2A2A35] py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="flex items-center gap-2.5 font-mono text-[#CDCCCA] hover:text-[#4F98A3] transition-colors group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#1A1A24] border border-[#2A2A35] flex items-center justify-center text-[#4F98A3] group-hover:border-[#4F98A3] transition-colors">
            <Terminal size={16} />
          </div>
          <span className="font-bold text-base tracking-tight text-white">aman.dev</span>
          <span className="text-[11px] text-[#797876] hidden sm:inline border-l border-[#2A2A35] pl-2.5">
            Noventra Labs
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#4F98A3] bg-[#1A1A24] border border-[#2A2A35]'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-[#1A1A24]/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://github.com/89Aman"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#A1A1AA] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/sharmaaman26"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#A1A1AA] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-3.5 py-1.5 bg-[#4F98A3] text-[#0D0D12] text-xs font-semibold rounded-md hover:bg-[#6DBF8F] transition-all font-mono shadow-md shadow-[#4F98A3]/10"
          >
            Connect_
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#CDCCCA]"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D0D12]/95 backdrop-blur-xl border-b border-[#2A2A35] px-6 py-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-3 py-2 rounded-md text-base text-[#CDCCCA] hover:text-[#4F98A3] hover:bg-[#1A1A24]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#2A2A35] flex items-center gap-3">
            <a
              href="https://github.com/89Aman"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-[#1A1A24] border border-[#2A2A35] text-xs text-[#CDCCCA] flex items-center gap-2"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/sharmaaman26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-[#1A1A24] border border-[#2A2A35] text-xs text-[#CDCCCA] flex items-center gap-2"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

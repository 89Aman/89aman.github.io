import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Github, Linkedin } from './ui/icons';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navContainerRef = useRef<HTMLElement>(null);
  const isSmoothScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);

  // Reliable, buttery smooth Scroll Spy with rAF
  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 40);

        // Do not jitter active section while smooth scrolling after link click
        if (isSmoothScrollingRef.current) return;

        // 1. If in hero/top of page, clear active link
        if (scrollY < 200) {
          setActiveSection('');
          return;
        }

        // 2. If at bottom of page, activate last link (contact)
        const isAtBottom =
          window.innerHeight + Math.ceil(scrollY) >= document.documentElement.scrollHeight - 60;
        if (isAtBottom) {
          setActiveSection('contact');
          return;
        }

        // 3. Find section that spans across the viewport check line (160px from top)
        const checkLine = 160;
        const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
        let current = '';

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= checkLine && rect.bottom > checkLine) {
              current = section;
              break;
            }
          }
        }

        if (current) {
          setActiveSection(current);
        }
      });
    };

    // User manual interrupt (wheel/touch) cancels programmatic smooth scroll lock
    const handleUserInterrupt = () => {
      if (isSmoothScrollingRef.current) {
        isSmoothScrollingRef.current = false;
        if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleUserInterrupt, { passive: true });
    window.addEventListener('touchmove', handleUserInterrupt, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleUserInterrupt);
      window.removeEventListener('touchmove', handleUserInterrupt);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Collapse mobile drawer when clicking outside or pressing Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Auto-close mobile drawer on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      isSmoothScrollingRef.current = true;
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);

      const navbarHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

      // Keep target indicator locked during the smooth scroll animation
      scrollTimeoutRef.current = window.setTimeout(() => {
        isSmoothScrollingRef.current = false;
      }, 800);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection('');
    setIsMobileMenuOpen(false);
    isSmoothScrollingRef.current = true;
    if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    scrollTimeoutRef.current = window.setTimeout(() => {
      isSmoothScrollingRef.current = false;
    }, 800);
  };

  return (
    <>
      {/* Mobile Drawer Backdrop: smooth fade in/out blur overlay */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden="true"
      />

      <header
        ref={navContainerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
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
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ease-out ${
                    isActive
                      ? 'text-[#4F98A3] bg-[#4F98A3]/10 border border-[#4F98A3]/30 font-semibold shadow-sm shadow-[#4F98A3]/10'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-[#1A1A24]/60 border border-transparent'
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
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#A1A1AA] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/sharmaaman012"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#A1A1AA] hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-3.5 py-1.5 bg-[#4F98A3] text-[#0D0D12] text-xs font-semibold rounded-md hover:bg-[#6DBF8F] transition-all duration-200 font-mono shadow-md shadow-[#4F98A3]/10"
            >
              Connect_
            </a>
          </div>

          {/* Mobile Menu Button with smooth icon morph */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-[#CDCCCA] hover:text-white hover:border-[#4F98A3] transition-colors"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <span
                className={`absolute transition-all duration-300 ease-out transform ${
                  isMobileMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                }`}
              >
                <Menu size={20} />
              </span>
              <span
                className={`absolute transition-all duration-300 ease-out transform ${
                  isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
                }`}
              >
                <X size={20} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Drawer with smooth height + glide transition */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#0D0D12]/95 backdrop-blur-xl border-b ${
            isMobileMenuOpen
              ? 'max-h-[380px] opacity-100 translate-y-0 py-5 visible border-[#2A2A35]'
              : 'max-h-0 opacity-0 -translate-y-2 py-0 border-transparent invisible pointer-events-none'
          }`}
        >
          <div className="px-6 space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`block px-3.5 py-2.5 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#4F98A3] bg-[#4F98A3]/10 border border-[#4F98A3]/30 font-semibold'
                      : 'text-[#CDCCCA] hover:text-[#4F98A3] hover:bg-[#1A1A24] border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 border-t border-[#2A2A35] flex items-center gap-3">
              <a
                href="https://github.com/89Aman"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-xs text-[#CDCCCA] flex items-center gap-2 hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all duration-200"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/sharmaaman012"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#1A1A24] border border-[#2A2A35] text-xs text-[#CDCCCA] flex items-center gap-2 hover:text-[#4F98A3] hover:border-[#4F98A3] transition-all duration-200"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

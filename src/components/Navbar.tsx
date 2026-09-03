import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2.5 group"
          aria-label="Bros Annotation home"
        >
          <Logo />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-base tracking-tight text-white">
              BROS
            </span>
            <span className="font-display text-[10px] tracking-[0.2em] text-text-muted uppercase">
              Annotation
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-white bg-surface/60'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary text-sm"
          >
            Work With Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-x py-4 space-y-1 bg-bg/95 backdrop-blur-xl border-b border-border">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-white bg-surface'
                    : 'text-text-muted hover:text-white hover:bg-surface/50'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-primary w-full text-sm"
            >
              Work With Us
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="relative w-9 h-9 flex items-center justify-center">
      <svg viewBox="0 0 36 36" className="w-9 h-9">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="32" height="32" rx="8" fill="url(#logoGrad)" opacity="0.15" />
        <rect x="2" y="2" width="32" height="32" rx="8" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5" />
        <circle cx="18" cy="18" r="3" fill="url(#logoGrad)" />
        <circle cx="10" cy="10" r="1.8" fill="#60a5fa" />
        <circle cx="26" cy="10" r="1.8" fill="#a78bfa" />
        <circle cx="10" cy="26" r="1.8" fill="#a78bfa" />
        <circle cx="26" cy="26" r="1.8" fill="#60a5fa" />
        <line x1="10" y1="10" x2="18" y2="18" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
        <line x1="26" y1="10" x2="18" y2="18" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
        <line x1="10" y1="26" x2="18" y2="18" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
        <line x1="26" y1="26" x2="18" y2="18" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>
  );
}

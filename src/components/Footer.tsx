import { Mail, Phone } from 'lucide-react';

const solutions = [
  'LLM Post-Training',
  'Data Annotation',
  'LLM Evaluation',
  'RLHF',
  'AI Safety',
];

const company = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-bg-soft/50">
      <div className="container-x py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">

              {/* Bros Annotation Logo */}
              <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src="/logo bros.jpg"
                  alt="Bros Annotation"
                  className="w-12 h-12 object-contain"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-base text-white">
                  BROS
                </span>
                <span className="font-display text-[10px] tracking-[0.2em] text-text-muted uppercase">
                  Annotation
                </span>
              </div>
            </div>

            <p className="text-sm text-text-muted leading-relaxed mb-3">
              Human-powered data and evaluation services for better AI.
            </p>

            <p className="text-sm text-gradient font-display font-semibold">
              Human Intelligence. Better AI.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>

            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick('#solutions')}
                    className="text-sm text-text-muted hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>

            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.label}>
                  <button
                    onClick={() => handleNavClick(c.href)}
                    className="text-sm text-text-muted hover:text-white transition-colors"
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:brosannotation@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-text-muted hover:text-white transition-colors"
                >
                  <Mail size={16} className="shrink-0" />
                  brosannotation@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+918076542019"
                  className="flex items-center gap-2.5 text-sm text-text-muted hover:text-white transition-colors"
                >
                  <Phone size={16} className="shrink-0" />
                  +91 8076542019
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-text-dim text-center">
            &copy; 2026 Bros Annotation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

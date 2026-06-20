import { useEffect, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { profile } from '../data/portfolio';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-bg-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="font-mono text-sm text-ink-primary tracking-tight"
        >
          tanisha<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleLinkClick(link.id)}
                className="text-sm text-ink-secondary hover:text-ink-primary transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink-primary border border-bg-border hover:border-bg-borderHover rounded-md px-3.5 py-1.5 transition-colors"
        >
          <FileText size={14} />
          Resume
        </a>

        <button
          className="md:hidden text-ink-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg-surface border-t border-bg-border px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-left text-sm text-ink-secondary hover:text-ink-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border border-bg-border rounded-md px-3.5 py-2 w-fit"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

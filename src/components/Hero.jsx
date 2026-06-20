import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 relative"
    >
      <div className="max-w-content mx-auto w-full">
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent bg-accent-dim border border-accent-border rounded-full px-3 py-1 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Open to internship opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-primary tracking-tight leading-[1.1] mb-5">
            {profile.name}
          </h1>

          <p className="font-mono text-sm sm:text-base text-accent mb-6">
            {profile.role}
          </p>

          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-14">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-md px-5 py-2.5 transition-colors"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border border-bg-border hover:border-bg-borderHover rounded-md px-5 py-2.5 transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border border-bg-border hover:border-bg-borderHover rounded-md px-5 py-2.5 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>

          {/* Signature element: a quiet terminal card grounding her as a builder, not a gimmick */}
          <div className="max-w-md rounded-lg border border-bg-border bg-bg-surface overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-bg-border">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a40]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a40]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#3a3a40]" />
              <span className="font-mono text-[11px] text-ink-muted ml-2">whoami.sh</span>
            </div>
            <div className="px-4 py-3 font-mono text-[13px] leading-relaxed">
              <p className="text-ink-muted">
                <span className="text-accent">$</span> whoami
              </p>
              <p className="text-ink-secondary">B.Tech ECE-AI student · IGDTUW, 2027</p>
              <p className="text-ink-secondary">Building with React, Node.js, C++</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted hover:text-ink-secondary transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}


import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background glow — orange, off-center */}
      <div className="absolute top-10 right-1/4 w-[550px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage:
            'radial-gradient(circle at 50% 30%, black, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 30%, black, transparent 75%)',
        }}
      />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fadeUp">

        {/* Eyebrow */}
        <p className="font-mono text-xs sm:text-xs tracking-[0.18em] uppercase text-ink-secondary mb-7">
          ECE-AI Student
          <span className="mx-2 text-accent">•</span>
          Full-Stack Developer
          <span className="mx-2 text-accent">•</span>
          AI Enthusiast
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-4xl font-bold tracking-tight leading-[1.05] text-ink-primary mb-7">
          Hi, I'm{' '}
          <span className="text-accent">
            {profile.name}
          </span>
          .
        </h1>

        {/* Short tagline */}
        <p className="text-xl sm:text-5xl md:text-3xl font-medium text-ink-secondary mb-6">
          Building things, solving problems,
          <br className="hidden sm:block" />
          and exploring AI.
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-ink-muted mb-10">
          Currently working on SnapNewz, a full-stack news platform which
          transforms traditional news feed into an AI-powered way to
          understand what's being reported.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="
              group inline-flex items-center gap-2
              px-6 py-3
              rounded-lg
              bg-accent
              text-white
              font-medium
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_30px_rgba(249,115,22,0.35)]
            "
          >
            Explore My Projects

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById('about')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="
          hidden sm:flex
          absolute bottom-8 left-1/2 -translate-x-1/2
          text-ink-muted
          hover:text-accent
          transition-colors
          animate-bounce
        "
        aria-label="Scroll to About section"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
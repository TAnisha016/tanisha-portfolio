import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
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
          Currently working on SnapNewz, a full-stack news platform which transforms traditional news feed into an AI-powered way to understand what's being reported.  
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
              hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]
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
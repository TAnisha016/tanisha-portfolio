

import { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame;
    let width = 0;
    let height = 0;

    const nodes = [];
    const NODE_COUNT = 70;
    const MAX_DISTANCE = 150;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createNodes = () => {
      nodes.length = 0;

      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,

          // Small movement
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,

          radius: Math.random() * 1.5 + 0.5,

          // Used for glowing/pulsing nodes
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.015 + 0.008,
        });
      }
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);

      /*
       * Move nodes slowly.
       * The movement is intentionally very subtle.
       */
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around the screen
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;

        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        node.phase += node.speed;
      });

      /*
       * Draw connections.
       * Lines are strongest around the outer areas and
       * become quieter around the center where the text sits.
       */
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > MAX_DISTANCE) continue;

          const centerX = width / 2;
          const centerY = height / 2;

          const aCenterDistance = Math.sqrt(
            Math.pow(a.x - centerX, 2) +
              Math.pow(a.y - centerY, 2)
          );

          const bCenterDistance = Math.sqrt(
            Math.pow(b.x - centerX, 2) +
              Math.pow(b.y - centerY, 2)
          );

          const centerDistance =
            Math.min(aCenterDistance, bCenterDistance);

          /*
           * Keep the center relatively calm so the hero
           * text remains the main focus.
           */
          const centerFade = Math.min(
            centerDistance / (Math.min(width, height) * 0.45),
            1
          );

          const distanceFade = 1 - distance / MAX_DISTANCE;

          const opacity =
            distanceFade * centerFade * 0.45;

          if (opacity <= 0.01) continue;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);

          ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      /*
       * Draw glowing nodes
       */
      nodes.forEach((node) => {
        const pulse =
          Math.sin(node.phase + time * 0.001) * 0.5 + 0.5;

        const alpha = 0.25 + pulse * 0.35;

        ctx.beginPath();
        ctx.arc(
          node.x,
          node.y,
          node.radius + pulse * 0.7,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255, 138, 61, ${alpha})`;
        ctx.fill();
      });

      /*
       * A few slow flowing orange streaks.
       * These give the background more of the continuous
       * movement you're looking for.
       */
      for (let i = 0; i < 8; i++) {
        const progress =
          ((time * 0.000025 * (1 + i * 0.08) + i * 0.17) % 1);

        const x =
          width * progress;

        const y =
          height * (0.12 + i * 0.11) +
          Math.sin(progress * Math.PI * 2 + i) * 40;

        const length = 90 + i * 15;

        const gradient = ctx.createLinearGradient(
          x - length,
          y,
          x,
          y
        );

        gradient.addColorStop(
          0,
          'rgba(249, 115, 22, 0)'
        );

        gradient.addColorStop(
          0.7,
          'rgba(249, 115, 22, 0.12)'
        );

        gradient.addColorStop(
          1,
          'rgba(249, 115, 22, 0.45)'
        );

        ctx.beginPath();
        ctx.moveTo(x - length, y);
        ctx.lineTo(x, y);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    createNodes();

    const handleResize = () => {
  resize();
  createNodes();
};

window.addEventListener('resize', handleResize);

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* =====================================================
          ANIMATED TECHNOLOGY BACKGROUND
          ===================================================== */}
      <canvas
        ref={canvasRef}
        className="
          absolute inset-0
          w-full h-full
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* Soft orange atmospheric glow */}
      <div
        className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[350px]
          bg-orange-500/5
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      {/* Film grain texture */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          opacity-[0.035]
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fadeUp">

        {/* Eyebrow */}
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-ink-secondary mb-7">
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
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}
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
          absolute bottom-8 left-1/2
          -translate-x-1/2
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
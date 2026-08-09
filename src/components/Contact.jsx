import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Reach out to me',
    href: 'mailto:tanisha01603@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/tanisha-9908a4282/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my repositories',
    href: 'https://github.com/TAnisha016',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-7">
      <div className="max-w-4xl mx-auto text-center">

        <Reveal>
          {/* Eyebrow */}
          <p className="font-mono text-xs text-accent mb-4 tracking-wide">
            05 · Contact
          </p>

          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-primary tracking-tight leading-tight mb-6">
            Let's build something
            <br />
            <span className="text-accent">meaningful together.</span>
          </h2>

          {/* Description */}
          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Looking for the next place to learn, build, and make an impact.
            I'm excited to bring my curiosity, problem-solving skills, and
            love for building to a great team.
          </p>

          {/* Contact links */}
          <div className="flex flex-wrap justify-center gap-3">
            {CHANNELS.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 80}>
                <a
                  href={channel.href}
                  target={channel.label === 'Email' ? undefined : '_blank'}
                  rel={
                    channel.label === 'Email'
                      ? undefined
                      : 'noopener noreferrer'
                  }
                  className="
                    group
                    inline-flex items-center gap-3
                    rounded-lg
                    border border-bg-border
                    bg-bg-surface
                    px-5 py-3
                    transition-all duration-300
                    hover:border-accent-border
                    hover:bg-bg-raised
                  "
                >
                  <channel.icon
                    size={17}
                    className="
                      text-ink-muted
                      group-hover:text-accent
                      transition-colors
                    "
                  />

                  <div className="text-left">
                    <p className="font-mono text-[10px] uppercase tracking-wide text-ink-muted">
                      {channel.label}
                    </p>

                    <p className="text-ink-primary text-sm font-medium">
                      {channel.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-ink-muted
                      group-hover:text-accent
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      transition-all
                    "
                  />
                </a>
              </Reveal>
            ))}
          </div>

          {/* Closing line */}
          <p className="mt-12 font-mono text-xs text-ink-muted">
            Have an idea, opportunity, or just want to say hello?
            <span className="text-accent ml-1">I'd love to hear from you.</span>
          </p>

        </Reveal>

      </div>
    </section>
  );
}

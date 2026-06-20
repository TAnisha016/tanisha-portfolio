import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/portfolio';
import Reveal from './Reveal';

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my repositories',
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-bg-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="font-mono text-xs text-accent mb-3 tracking-wide">05 · Contact</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-primary tracking-tight mb-3">
            Let's work together
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base max-w-xl mb-12">
            I'm actively looking for internship opportunities in frontend or full-stack
            development. Reach out — I usually reply within a day.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 80}>
              <a
                href={channel.href}
                target={channel.label === 'Email' ? undefined : '_blank'}
                rel={channel.label === 'Email' ? undefined : 'noopener noreferrer'}
                className="group flex flex-col justify-between rounded-lg border border-bg-border bg-bg-surface hover:border-accent-border hover:bg-bg-raised transition-colors p-5 h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <channel.icon size={18} className="text-ink-muted group-hover:text-accent transition-colors" />
                  <ArrowUpRight
                    size={15}
                    className="text-ink-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all"
                  />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-muted mb-1">
                    {channel.label}
                  </p>
                  <p className="text-ink-primary text-sm font-medium break-all">
                    {channel.value}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

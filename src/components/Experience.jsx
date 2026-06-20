import { Award, Trophy, Users } from 'lucide-react';
import { experience, certifications, achievements, leadership } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-bg-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="04 · Experience"
            title="Experience & achievements"
            description="Internships, programs, and recognitions alongside coursework."
          />
        </Reveal>

        {/* Experience timeline */}
        <div className="mb-16">
          <div className="space-y-6">
            {experience.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="relative pl-6 border-l border-bg-border">
                  <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="text-ink-primary font-semibold text-base">{item.title}</h3>
                    <span className="font-mono text-xs text-ink-muted">{item.period}</span>
                  </div>
                  <p className="text-ink-secondary text-sm leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications, achievements, leadership grid */}
        <div className="grid md:grid-cols-3 gap-5">
          <Reveal delay={0}>
            <div className="rounded-lg border border-bg-border bg-bg-surface p-5 h-full">
              <div className="flex items-center gap-2 text-ink-muted mb-4">
                <Award size={16} />
                <span className="font-mono text-xs uppercase tracking-wide">Certifications</span>
              </div>
              <ul className="space-y-3.5">
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    <p className="text-ink-primary text-sm font-medium leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-ink-muted text-xs mt-0.5">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-lg border border-bg-border bg-bg-surface p-5 h-full">
              <div className="flex items-center gap-2 text-ink-muted mb-4">
                <Trophy size={16} />
                <span className="font-mono text-xs uppercase tracking-wide">Achievements</span>
              </div>
              <ul className="space-y-3.5">
                {achievements.map((a) => (
                  <li key={a.title}>
                    <p className="text-ink-primary text-sm font-medium leading-snug">
                      {a.title}
                    </p>
                    <p className="text-ink-secondary text-xs mt-1 leading-relaxed">{a.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-lg border border-bg-border bg-bg-surface p-5 h-full">
              <div className="flex items-center gap-2 text-ink-muted mb-4">
                <Users size={16} />
                <span className="font-mono text-xs uppercase tracking-wide">Leadership</span>
              </div>
              <ul className="space-y-3.5">
                {leadership.map((l) => (
                  <li key={l.role}>
                    <p className="text-ink-primary text-sm font-medium leading-snug">{l.role}</p>
                    <p className="text-ink-muted text-xs mt-0.5">{l.org}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { GraduationCap } from 'lucide-react';
import { about, education } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading eyebrow="01 · About" title={about.heading} />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          <Reveal className="md:col-span-2" delay={80}>
            <div className="space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-secondary leading-relaxed text-[16px]">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-lg border border-bg-border bg-bg-surface p-5 shadow-[0_0_60px_rgba(139,92,246,0.15)] ">
              <div className="flex items-center gap-2 text-ink-muted mb-3">
                <GraduationCap size={16} />
                <span className="font-mono text-xs uppercase tracking-wide">Education</span>
              </div>
              <p className="text-ink-primary text-sm font-medium leading-snug mb-1">
                {education.degree}
              </p>
              <p className="text-ink-secondary text-sm mb-2">{education.school}</p>
              <p className="font-mono text-xs text-ink-muted">{education.period}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

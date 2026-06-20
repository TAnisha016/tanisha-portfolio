import { skills } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-bg-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="02 · Skills"
            title="Tools I build with"
            description="Languages and tools I use regularly, from foundational algorithms to shipped frontend work."
          />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 40}>
              <div className="group rounded-lg border border-bg-border bg-bg-surface hover:border-bg-borderHover hover:bg-bg-raised transition-colors px-4 py-4">
                <p className="font-mono text-[10px] uppercase tracking-wide text-ink-muted mb-1.5">
                  {skill.category}
                </p>
                <p className="text-ink-primary font-medium text-sm">{skill.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

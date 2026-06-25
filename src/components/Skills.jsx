import { skillGroups, learning } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-bg-border">
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <SectionHeading
            eyebrow="02 · Skills"
            title="My Tech Stack"
            description="The technologies I use to design, build, and ship software while continuously learning new tools."
          />
        </Reveal>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-12">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-bg-border bg-bg-surface hover:bg-bg-raised transition-all duration-300 p-6">

                <h3 className="text-xl font-bold text-ink-primary mb-2">
                  {group.title}
                </h3>

                <p className="text-sm text-ink-secondary mb-6 leading-relaxed">
                  {group.description}
                </p>

                <div className="border-t border-bg-border mb-5"></div>

                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-ink-primary"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      {skill}
                    </li>
                  ))}
                </ul>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Currently Learning */}
        <Reveal delay={400}>
          <div className="mt-10 rounded-2xl border border-bg-border bg-bg-surface p-8">

            <h3 className="text-xl font-bold text-ink-primary mb-2">
              🚀 Currently Learning
            </h3>

            <p className="text-ink-secondary mb-6">
              Continuously expanding my knowledge through projects and practice.
            </p>

            <div className="flex flex-wrap gap-3">
              {learning.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-bg-border bg-bg-raised text-sm text-ink-primary"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

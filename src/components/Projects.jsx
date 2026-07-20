import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-bg-border">
      <div className="max-w-content mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="03 · Projects"
            title="Things I've built and building "
            description="A mix of full-stack apps, hackathon work, and platforms built to solve a real problem for a real user."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

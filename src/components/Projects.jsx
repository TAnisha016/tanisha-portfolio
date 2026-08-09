import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-7">
      <div className="max-w-content mx-auto">

        {/* Centered heading */}
        <Reveal>
          <div className="text-center">
            <SectionHeading
              eyebrow="03 · Projects"
              title="Things I've built"
            />
          </div>
        </Reveal>

        {/* Project cards stay normal */}
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

import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-lg border border-bg-border bg-bg-surface hover:border-bg-borderHover transition-colors overflow-hidden flex flex-col">
      {/* Placeholder visual: initials on a quiet gradient, no stock imagery */}
      <div className="h-36 flex items-center justify-center bg-gradient-to-br from-bg-raised to-bg-surface border-b border-bg-border">
        <span className="font-mono text-3xl text-ink-muted/40 tracking-tight">
          {project.title.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-ink-primary font-semibold text-base mb-1">{project.title}</h3>
        <p className="font-mono text-xs text-accent mb-3">{project.subtitle}</p>
        <p className="text-ink-secondary text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-ink-muted bg-bg-raised border border-bg-border rounded px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-1 border-t border-bg-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-secondary hover:text-ink-primary transition-colors pt-3"
          >
            <Github size={14} />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-secondary hover:text-ink-primary transition-colors pt-3"
          >
            <ExternalLink size={14} />
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
}

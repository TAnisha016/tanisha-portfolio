import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-bg-border py-8 px-6">
      <div className="max-w-content mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-muted hover:text-ink-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-muted hover:text-ink-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-xs text-ink-muted hover:text-ink-secondary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

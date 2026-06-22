import { Github, Linkedin, ArrowDown, FileText } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 relative"
    >
      <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center animate-fadeUp">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-accent bg-accent-dim border border-accent-border rounded-full px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Open to internship opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ink-primary tracking-tight leading-[1.1] mb-5">
              {profile.name}
            </h1>

            <p className="font-mono text-sm sm:text-base text-accent mb-6">
              {profile.role}
            </p>

            <p className="text-ink-secondary text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-14">
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-md px-5 py-2.5 transition-colors"
              >
                <FileText size={16} />
                Resume
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border border-bg-border hover:border-bg-borderHover rounded-md px-5 py-2.5 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-primary border border-bg-border hover:border-bg-borderHover rounded-md px-5 py-2.5 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div> 

          <div className="flex justify-center lg:justify-end">

            <div className="w-full max-w-xl rounded-lg border border-bg-border bg-bg-surface backdrop-blur-sm overflow-hidden font-mono shadow-[0_0_60px_rgba(139,92,246,0.15)]">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-bg-border">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-[11px] text-ink-muted">about_me.js</span>
              </div>

              <div className="px-4 py-3 text-[12.5px] leading-relaxed">
                <p>
                  <span className="text-[#C792EA]">const</span>{' '}
                  <span className="text-ink-primary">tanisha</span> = {'{'}
                </p>

                <p className="pl-4">
                  <span className="text-[#80CBC4]">role</span>:{' '}
                  <span className="text-[#C3E88D]">"ECE-AI Student"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-[#80CBC4]">focus</span>: [
                  <span className="text-[#C3E88D]">"Full-Stack Dev"</span>,{' '}
                  <span className="text-[#C3E88D]">"DSA"</span>,{' '}
                  <span className="text-[#C3E88D]">"AI"</span>],
                </p>

                <p className="pl-4">
                  <span className="text-[#80CBC4]">college</span>:{' '}
                  <span className="text-[#C3E88D]">"IGDTUW"</span>,
                </p>

                <p className="pl-4">
                  <span className="text-[#80CBC4]">gradYear</span>:{' '}
                  <span className="text-[#F78C6C]">2027</span>,
                </p>

                <p className="pl-4">
                  <span className="text-[#80CBC4]">languages</span>: [
                  <span className="text-[#C3E88D]">"C++"</span>,{' '}
                  <span className="text-[#C3E88D]">"JavaScript"</span>],
                </p>

                <p className="pl-4">
                  <span className="text-[#80CBC4]">frameworks</span>: [
                  <span className="text-[#C3E88D]">"React"</span>,{' '}
                  <span className="text-[#C3E88D]">"Node.js"</span>
                  <span className="text-[#C3E88D]">"Express.js"</span>],
                </p>
                 <p className="pl-4">
                  <span className="text-[#80CBC4]">current</span>: [
                  <span className="text-[#C3E88D]">"Building Projects & exploring AI"</span>],{' '}
                </p>
                <p className="pl-4">
                  <span className="text-[#80CBC4]">goal</span>: [
                  <span className="text-[#C3E88D]">"Solve real world problems with code"</span>],{' '}
                </p>


                <p>{'};'}</p>

                <p className="mt-2">
                  <span className="text-[#82AAFF]">console</span>.
                  <span className="text-[#82AAFF]">log</span>(
                  <span className="text-[#C3E88D]">
                    "Always learning, always building."
                  </span>
                  );
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 border-t border-bg-border">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                <span className="text-[11px] text-ink-muted">
                  Currently building the future
                </span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById('about')
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted hover:text-ink-secondary transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={18} />
        </a>
      </div>

    </section>
  );
}
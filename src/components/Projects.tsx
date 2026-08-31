import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          kicker="Selected Work"
          title="Projects"
          description="A mix of electronics, embedded systems, controls and 3D design."
        />
        {projects.some((p) => p.isExample) && (
          <div className="mb-10 rounded-xl border border-accent-2/30 bg-accent-2/5 px-5 py-3 text-sm text-accent-2">
            Cards marked <span className="font-mono-label text-xs uppercase">Example</span> are illustrative
            placeholders, not real projects. They&apos;ll be swapped for actual work soon.
          </div>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

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
          description="A mix of power electronics, embedded systems, digital design, and RF — each one built, tested, and documented end to end."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

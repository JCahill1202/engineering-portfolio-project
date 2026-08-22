import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const [from, to] = project.coverGradient;
  return (
    <Reveal delay={delay}>
      <Link
        href={`/projects/${project.slug}`}
        className="card-hover group block h-full rounded-2xl border border-border bg-bg-raised p-6"
      >
        <div
          className="relative mb-6 flex h-40 items-center justify-center overflow-hidden rounded-xl"
          style={{ background: `linear-gradient(135deg, ${from}22, ${to}22)` }}
        >
          <div
            className="absolute inset-0 opacity-40 bg-grid"
            style={{ maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)" }}
          />
          <span
            className="font-display text-4xl font-semibold opacity-90"
            style={{ color: from }}
          >
            {project.title
              .split(" ")
              .slice(0, 2)
              .map((w) => w[0])
              .join("")}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="font-mono-label text-[11px] uppercase text-accent">{project.category}</span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="font-display mt-3 flex items-start justify-between gap-2 text-xl font-semibold">
          {project.title}
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </Reveal>
  );
}

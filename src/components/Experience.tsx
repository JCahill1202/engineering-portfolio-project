import { experience } from "@/data/skills";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="Background" title="Experience & Education" />
        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-10">
            {experience.map((e, i) => (
              <Reveal key={e.role + e.period} delay={i * 0.1}>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                    <span className="font-mono-label text-xs uppercase text-muted">{e.period}</span>
                  </div>
                  <p className="text-sm text-accent">{e.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {e.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

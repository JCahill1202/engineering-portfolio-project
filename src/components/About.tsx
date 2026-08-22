import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="About" title="Physics fundamentals, EE hands-on" />
        <div className="grid gap-10 md:grid-cols-5">
          <Reveal delay={0.1} className="md:col-span-3">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a physics major at {site.school}, based in {site.location}, picking up a minor in
                electrical engineering. Physics gives me the theory; most of what I know about circuits,
                firmware, and actually getting hardware to work comes from projects I&apos;ve built on my own
                time.
              </p>
              <p>
                I&apos;ve also spent time in {site.school}&apos;s electronics and advanced physics labs, and
                worked as a physics lab instructor and as an optical engineering intern — different flavors of
                the same instinct: measure carefully, understand why something doesn&apos;t work, and fix it.
              </p>
              <p>
                I&apos;m looking for internships where I can keep building that hands-on engineering skill set —
                reach out if that overlaps with what your team is doing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-2">
            <div className="rounded-2xl border border-border bg-bg-raised p-6">
              <p className="font-mono-label text-xs uppercase text-muted">Quick facts</p>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">Location</dt>
                  <dd className="font-medium">{site.location}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">School</dt>
                  <dd className="font-medium text-right">{site.school}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">Degree</dt>
                  <dd className="font-medium text-right">{site.degree}</dd>
                </div>
                <div className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted">GPA</dt>
                  <dd className="font-medium">{site.gpa}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Status</dt>
                  <dd className="font-medium text-accent">Open to internships</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="About" title="From schematic to bench-tested hardware" />
        <div className="grid gap-10 md:grid-cols-5">
          <Reveal delay={0.1} className="md:col-span-3">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m an electrical engineering student at {site.school}, based in {site.location}. I like
                projects that force me across the whole stack — schematic capture, PCB layout, firmware, and
                the bench work to prove it actually does what the datasheet says it should.
              </p>
              <p>
                Most of what&apos;s on this site started as a personal or team project, not a class assignment:
                a motor controller for an e-skateboard, an FPGA audio effects unit, a mesh of solar-powered
                sensors. I write up what worked, what didn&apos;t, and what I&apos;d change on the next
                revision.
              </p>
              <p>
                Right now I&apos;m looking for internship or new-grad roles in power electronics, embedded
                systems, or hardware design — reach out if any of that overlaps with what your team is
                building.
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
                  <dt className="text-muted">Focus</dt>
                  <dd className="font-medium text-right">Power &amp; Embedded</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Status</dt>
                  <dd className="font-medium text-accent">Open to work</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

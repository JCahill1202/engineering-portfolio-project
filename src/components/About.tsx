import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading kicker="About" title="Background" />
        <div className="grid gap-10 md:grid-cols-5">
          <Reveal delay={0.1} className="md:col-span-3">
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Through my education at {site.school}, within the College of Science, I have accumulated a
                baseline knowledge of electronics alongside my Physics background. I have completed several
                courses of laboratory work including electronics and most recently, Northeastern&apos;s PHYS
                3600 Advanced Physics Lab, covering topics from spectroscopy and emissions to the Hall effect
                in semiconductors.
              </p>
              <p>
                I brainstorm, research and develop personal engineering projects in my free time to learn and
                improve my skills while working on things I am passionate about.
              </p>
              <p>
                I&apos;m searching for positions where I can keep building my hands-on engineering skill set.
                Please reach out if that aligns with your team&apos;s needs.
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

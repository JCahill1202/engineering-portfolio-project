import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Project`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const [from, to] = project.coverGradient;
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="flex-1 pt-24">
        <section className="relative border-b border-border">
          <div
            className="absolute inset-0 opacity-20 bg-grid"
            style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)" }}
          />
          <div className="relative mx-auto max-w-4xl px-6 py-16">
            <Reveal>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
              >
                <ArrowLeft size={16} />
                Back to projects
              </Link>

              {project.isExample && (
                <div className="mt-6 rounded-xl border border-accent-2/30 bg-accent-2/5 px-5 py-3 text-sm text-accent-2">
                  This is an illustrative example project, not real work. It will be replaced with an actual
                  project.
                </div>
              )}

              <div className="mt-6 flex items-center gap-3">
                <span className="font-mono-label text-xs uppercase text-accent">{project.category}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="text-xs text-muted">{project.year}</span>
              </div>

              <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted leading-relaxed">{project.tagline}</p>
              <p className="mt-2 text-sm text-muted">{project.role}</p>

              {project.links && project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {l.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <div
            className="relative mb-12 flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-border sm:h-72"
            style={{ background: `linear-gradient(135deg, ${from}22, ${to}22)` }}
          >
            {project.coverImage ? (
              <Image
                src={project.coverImage.src}
                alt={project.coverImage.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 896px, 100vw"
                priority
              />
            ) : (
              <span className="font-display text-6xl font-semibold opacity-90" style={{ color: from }}>
                {project.title.split(" ").slice(0, 2).map((w) => w[0]).join("")}
              </span>
            )}
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <h2 className="font-display text-xl font-semibold">Overview</h2>
              <p className="mt-4 text-muted leading-relaxed">{project.summary}</p>

              <h2 className="font-display mt-10 text-xl font-semibold">Highlights</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-muted leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-bg-raised p-6">
                <p className="font-mono-label text-xs uppercase text-muted">Tools &amp; Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                {project.specs && project.specs.length > 0 && (
                  <>
                    <p className="font-mono-label mt-6 text-xs uppercase text-muted">Specs</p>
                    <dl className="mt-4 space-y-3">
                      {project.specs.map((s) => (
                        <div key={s.label} className="flex justify-between border-b border-border pb-2 text-sm">
                          <dt className="text-muted">{s.label}</dt>
                          <dd className="text-right font-medium">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </>
                )}
              </div>
            </Reveal>
          </div>

          {project.variants && project.variants.length > 0 && (
            <div className="mt-16 space-y-14">
              {project.variants.map((variant) => (
                <Reveal key={variant.name}>
                  <h2 className="font-display text-xl font-semibold">{variant.name}</h2>
                  <p className="mt-3 max-w-2xl text-muted leading-relaxed">{variant.description}</p>
                  {variant.specs && variant.specs.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                      {variant.specs.map((s) => (
                        <p key={s.label} className="text-sm">
                          <span className="text-muted">{s.label}:</span>{" "}
                          <span className="font-medium">{s.value}</span>
                        </p>
                      ))}
                    </div>
                  )}
                  {variant.video && (
                    <div className="mt-6 w-full max-w-[220px] overflow-hidden rounded-2xl border border-border bg-bg-raised">
                      <video
                        src={variant.video.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full"
                      />
                      {variant.video.caption && (
                        <p className="font-mono-label border-t border-border px-4 py-2.5 text-xs uppercase text-muted">
                          {variant.video.caption}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {variant.images.map((img) => (
                      <div key={img.src} className="overflow-hidden rounded-2xl border border-border bg-bg-raised">
                        <div className="relative aspect-[4/3] w-full">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain p-3"
                            sizes="(min-width: 768px) 440px, 100vw"
                          />
                        </div>
                        {img.caption && (
                          <p className="font-mono-label border-t border-border px-4 py-2.5 text-xs uppercase text-muted">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </section>

        {otherProjects.length > 0 && (
          <section className="border-t border-border py-16">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="font-display text-xl font-semibold">More projects</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {otherProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="card-hover rounded-xl border border-border bg-bg-raised p-4"
                  >
                    <span className="font-mono-label text-[11px] uppercase text-accent">{p.category}</span>
                    <p className="font-display mt-2 text-sm font-semibold">{p.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

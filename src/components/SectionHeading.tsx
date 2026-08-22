import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="font-mono-label text-xs uppercase text-accent">{kicker}</p>
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </Reveal>
  );
}

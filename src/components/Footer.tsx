import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind.
        </p>
        <p className="font-mono-label uppercase">Designed &amp; developed from scratch</p>
      </div>
    </footer>
  );
}

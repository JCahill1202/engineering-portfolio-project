import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";
import { CircuitBackground } from "./CircuitBackground";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-28">
      <CircuitBackground />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-mono-label text-xs uppercase text-accent">Get in touch</p>
          <p className="mt-4 text-muted leading-relaxed">
            I&apos;m searching for internships where I can grow my hands-on electronics skills. If
            you&apos;re hiring or starting a project, please reach out.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.socials.email}
              className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              <Mail size={16} />
              {site.email}
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-muted">
            <a href={site.socials.github} className="transition-colors hover:text-fg" aria-label="GitHub">
              <GithubIcon size={22} />
            </a>
            <a href={site.socials.linkedin} className="transition-colors hover:text-fg" aria-label="LinkedIn">
              <LinkedinIcon size={22} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

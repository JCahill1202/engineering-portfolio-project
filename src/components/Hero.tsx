"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { site } from "@/data/site";
import { CircuitBackground } from "./CircuitBackground";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <CircuitBackground />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono-label mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-raised px-3 py-1 text-xs uppercase text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
          Open to internship opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display mt-3 max-w-2xl text-2xl font-medium text-muted sm:text-3xl"
        >
          {site.role} <span className="text-accent">/</span> {site.school}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
          <div className="ml-1 flex items-center gap-4 text-muted">
            <a href={site.socials.github} className="transition-colors hover:text-fg" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={site.socials.linkedin} className="transition-colors hover:text-fg" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href={site.socials.email} className="transition-colors hover:text-fg" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {site.heroStats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-semibold text-fg sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}

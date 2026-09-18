"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { brand, contact, hero } from "@/lib/content";
import { shouldSkipIntro } from "@/lib/intro";

const OFFSETS = [0.2, 0.4, 0.6, 0.8];

export default function Hero() {
  const [base, setBase] = useState(1.9);

  useLayoutEffect(() => {
    // Browser-only check (sessionStorage/matchMedia); intentionally diverges
    // from the SSR-safe default after hydration to skip the intro stagger.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (shouldSkipIntro()) setBase(0);
  }, []);

  const [d1, d2, d3, d4] = OFFSETS.map((o) => base + o);

  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden bg-[var(--foreground)] sm:min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt="Dr. Adrián Castell"
          fill
          priority
          className="object-cover object-[70%_20%] sm:object-[75%_15%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)] via-[var(--foreground)]/55 to-[var(--foreground)]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--foreground)]/85 via-[var(--foreground)]/30 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-10 sm:pb-24 sm:pt-48">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: d1, ease: "easeOut" }}
            className="mb-5 flex items-center gap-3 text-sm tracking-[0.28em] text-[var(--accent-bright)]"
          >
            <span className="h-px w-8 bg-[var(--accent-bright)]" aria-hidden="true" />
            {brand.doctorName.toUpperCase()} — {brand.tagline.toUpperCase()}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: d1 + 0.1, ease: "easeOut" }}
            className="whitespace-pre-line font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {brand.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: d2, ease: "easeOut" }}
            className="mt-7 max-w-lg text-base leading-relaxed text-white/80"
          >
            {brand.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: d3, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent-bright)] px-7 py-3 text-sm tracking-wide text-[var(--foreground)] transition-colors hover:bg-white"
            >
              {brand.ctaPrimary}
            </a>
            <a
              href="#trayectoria"
              className="group inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 text-sm tracking-wide text-white transition-colors hover:border-white hover:text-white"
            >
              {brand.ctaSecondary}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: d4 }}
            className="mt-8 text-xs tracking-[0.18em] text-white/50"
          >
            CADA CONSULTA, DIRECTAMENTE CON EL DR. CASTELL — SIN INTERMEDIARIOS
          </motion.p>
        </div>
      </div>
    </section>
  );
}

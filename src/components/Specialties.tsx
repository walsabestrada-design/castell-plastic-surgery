"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { specialties } from "@/lib/content";

export default function Specialties() {
  const [active, setActive] = useState(0);

  return (
    <section id="especialidades" className="bg-[var(--surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="mb-16 max-w-xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-[var(--accent)]">ESPECIALIDADES</p>
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Un índice de procedimientos, no un catálogo
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Cada especialidad la planifica y ejecuta directamente el Dr. Castell. Explora cada una para conocer el enfoque.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="divide-y divide-[var(--foreground)]/10 border-y border-[var(--foreground)]/10">
            {specialties.map((s, i) => {
              const isOpen = active === i;
              return (
                <div key={s.name}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isOpen}
                    aria-controls={`specialty-panel-${i}`}
                    className="flex w-full items-center gap-5 py-6 text-left transition-colors duration-300 hover:bg-[var(--background)]/50"
                  >
                    <span
                      className={`font-serif text-sm transition-colors duration-300 ${
                        isOpen ? "text-[var(--accent)]" : "text-[var(--muted)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-serif text-xl transition-colors duration-300 sm:text-2xl ${
                          isOpen ? "text-[var(--foreground)]" : "text-[var(--foreground)]/70"
                        }`}
                      >
                        {s.name}
                      </span>
                      <span className="mt-1 block text-sm text-[var(--muted)]">{s.summary}</span>
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[var(--accent)] bg-[var(--accent)] text-white"
                          : "border-[var(--foreground)]/40 text-[var(--foreground)]/70"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`specialty-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="pb-6 pl-11">
                          <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-2xl">
                            <Image src={s.image} alt={s.name} fill className="object-cover" sizes="90vw" />
                          </div>
                          <p className="text-sm leading-relaxed text-[var(--muted)]">{s.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-30px_rgba(16,28,44,0.4)]">
              <div className="relative aspect-[4/5] w-full">
                <AnimatePresence>
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={specialties[active].image}
                      alt={specialties[active].name}
                      fill
                      className="object-cover"
                      sizes="45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/85 via-[var(--foreground)]/10 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <AnimatePresence>
                    <motion.p
                      key={active}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-x-8 bottom-8 text-sm leading-relaxed text-white/90"
                    >
                      {specialties[active].description}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

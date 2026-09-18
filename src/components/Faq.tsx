"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="preguntas" className="bg-[var(--surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <Reveal className="mb-14">
          <p className="mb-3 text-sm tracking-[0.3em] text-[var(--accent)]">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Antes de tu primera consulta
          </h2>
        </Reveal>

        <div className="divide-y divide-[var(--foreground)]/10 border-y border-[var(--foreground)]/10">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-serif text-lg text-[var(--foreground)]">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-[var(--accent)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-[var(--muted)]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

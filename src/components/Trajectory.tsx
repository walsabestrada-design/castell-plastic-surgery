import Reveal from "./Reveal";
import { timeline } from "@/lib/content";

export default function Trajectory() {
  return (
    <section id="trayectoria" className="bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <Reveal className="mb-16 max-w-xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-[var(--accent)]">TRAYECTORIA</p>
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Quince años construyendo un criterio
          </h2>
        </Reveal>

        <div className="relative pl-12 sm:pl-16">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-[var(--foreground)]/12 sm:left-[17px]" aria-hidden="true" />

          <div className="flex flex-col gap-14">
            {timeline.map((step, i) => (
              <Reveal key={step.year} delay={i * 0.08} className="relative">
                <span
                  className="absolute -left-12 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--background)] text-[11px] font-medium text-[var(--accent)] sm:-left-16 sm:h-9 sm:w-9"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                </span>
                <p className="font-serif text-sm text-[var(--accent)]">{step.year}</p>
                <h3 className="mt-1.5 font-serif text-xl text-[var(--foreground)] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </Reveal>
            ))}

            <Reveal delay={timeline.length * 0.08} className="relative">
              <span
                className="absolute -left-12 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] sm:-left-16 sm:h-9 sm:w-9"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <p className="font-serif text-sm text-[var(--foreground)]">HOY</p>
              <h3 className="mt-1.5 font-serif text-xl text-[var(--foreground)] sm:text-2xl">
                Práctica activa, agenda personal
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
                El Dr. Castell sigue llevando personalmente cada consulta y cirugía — sin delegar a un equipo rotativo.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

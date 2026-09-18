import Image from "next/image";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-3.5 w-3.5 ${filled ? "text-[var(--accent)]" : "text-[var(--accent-soft)]"}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.59 5.25 5.8.84-4.2 4.09.99 5.78L10 14.9l-5.18 2.56.99-5.78-4.2-4.09 5.8-.84L10 1.5z" />
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--accent)]">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M10 1.75l2.1 1.36 2.5-.1 1.02 2.27 2.27 1.02-.1 2.5L19.15 11l-1.36 2.1.1 2.5-2.27 1.02-1.02 2.27-2.5-.1L10 20.15l-2.1-1.36-2.5.1-1.02-2.27-2.27-1.02.1-2.5L.85 11l1.36-2.1-.1-2.5 2.27-1.02L5.4 3.11l2.5.1L10 1.75z"
          clipRule="evenodd"
        />
        <path d="M8.6 12.9L6.7 11l-1 1 2.9 2.9 5-5-1-1z" fill="var(--surface)" />
      </svg>
      Paciente verificado
    </span>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="mb-14 max-w-xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-[var(--accent)]">EXPERIENCIAS REALES</p>
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Lo que dicen quienes ya decidieron
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className={i % 2 === 1 ? "sm:mt-8" : ""}>
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-[var(--surface)] p-6 shadow-[0_25px_55px_-28px_rgba(16,28,44,0.35)]">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <div
                      className="flex items-center gap-0.5"
                      role="img"
                      aria-label={`Calificación: ${t.rating} de 5 estrellas`}
                    >
                      {Array.from({ length: 5 }).map((_, star) => (
                        <Star key={star} filled={star < t.rating} />
                      ))}
                    </div>
                    <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-medium text-[var(--accent)]">
                      {t.highlight}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--foreground)]/90">
                    “{t.quote}”
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)]">{t.name}</p>
                    <p className="text-xs text-[var(--muted)]">{t.role}</p>
                    {t.verified && <VerifiedBadge />}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

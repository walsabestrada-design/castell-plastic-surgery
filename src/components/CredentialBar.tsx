import Reveal from "./Reveal";
import { credentials } from "@/lib/content";

export default function CredentialBar() {
  return (
    <section className="relative bg-[var(--background)]">
      <div className="relative z-10 mx-auto -mt-12 max-w-6xl px-6 sm:-mt-16 sm:px-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 rounded-[1.5rem] bg-[var(--surface)] p-8 shadow-[0_35px_80px_-30px_rgba(16,28,44,0.45)] sm:grid-cols-4 sm:gap-x-8 sm:p-10">
          {credentials.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1} className="relative text-center sm:text-left">
              {i > 0 && (
                <span
                  className="pointer-events-none absolute -left-3 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[var(--foreground)]/10 sm:block"
                  aria-hidden="true"
                />
              )}
              <p className="font-serif text-2xl text-[var(--foreground)] sm:text-3xl">{c.value}</p>
              <p className="mt-1.5 text-xs leading-snug tracking-[0.08em] text-[var(--muted)] sm:text-[13px]">
                {c.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

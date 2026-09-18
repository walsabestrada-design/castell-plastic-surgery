import Image from "next/image";
import Reveal from "./Reveal";
import { clinic } from "@/lib/content";

export default function Clinic() {
  return (
    <section id="clinica" className="bg-[var(--surface)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="mb-14 max-w-xl">
          <p className="mb-3 text-sm tracking-[0.3em] text-[var(--accent)]">LA CLÍNICA</p>
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
            Un espacio pensado para decidir con calma
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-30px_rgba(16,28,44,0.45)] sm:aspect-[21/9]">
            <Image
              src={clinic.primary}
              alt="Recepción de la clínica"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-[1fr_0.8fr] sm:gap-10">
          <Reveal delay={0.1} className="flex flex-col justify-center rounded-[1.5rem] bg-[var(--background)] p-8 sm:p-10">
            <p className="font-serif text-xl leading-snug text-[var(--foreground)] sm:text-2xl">
              “{clinic.quote}”
            </p>
            <p className="mt-5 text-sm text-[var(--muted)]">— {clinic.attribution}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] shadow-[0_30px_60px_-28px_rgba(16,28,44,0.4)]">
              <Image
                src={clinic.secondary}
                alt="Sala de espera de la clínica"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 35vw, 90vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

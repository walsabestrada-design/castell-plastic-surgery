import Reveal from "./Reveal";
import { brand, contact } from "@/lib/content";

export default function CtaSection() {
  return (
    <section id="contacto" className="bg-[var(--foreground)] py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
        <Reveal>
          <p className="mb-3 text-sm tracking-[0.3em] text-[var(--accent-bright)]">
            AGENDA TU CONSULTA PRIVADA
          </p>
          <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
            Habla directamente con el Dr. Castell
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Sin formularios impersonales ni equipos de venta — agenda tu consulta inicial y evalúa tu caso con quien realizará el procedimiento.
          </p>
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-block rounded-full bg-white px-8 py-3 text-sm tracking-wide text-[var(--foreground)] transition-colors hover:bg-white/90"
          >
            {brand.ctaPrimary}
          </a>
          <p className="mt-4 text-xs text-white/50">
            o escríbenos a{" "}
            <a href={contact.emailLink} className="underline underline-offset-2 hover:text-white">
              {contact.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

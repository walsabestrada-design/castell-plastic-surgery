import { brand, contact, nav } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] pb-10 pt-4 text-white/70">
      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 pt-12 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="flex items-center gap-2.5 font-serif text-lg tracking-[0.2em] text-white">
              <Logo className="h-4 w-4 shrink-0 text-[var(--accent-bright)]" />
              {brand.name.toUpperCase()}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              {brand.doctorName} — {brand.tagline}, con atención personal en cada etapa.
            </p>
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] text-white/50">MENÚ</p>
            <ul className="mt-4 flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] text-white/50">CONTACTO</p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={contact.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {contact.address}
                </a>
              </li>
              <li>
                <a href={contact.phoneLink} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.emailLink} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li>{contact.hours}</li>
              <li>
                <a
                  href={contact.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {brand.name}. Todos los derechos
            reservados.
          </p>
          <p>Contenido de muestra — sitio en desarrollo.</p>
        </div>
      </div>
    </footer>
  );
}

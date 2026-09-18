"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand, contact, nav } from "@/lib/content";
import { shouldSkipIntro } from "@/lib/intro";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [introDelay, setIntroDelay] = useState(1.9);
  const lastY = useRef(0);

  useLayoutEffect(() => {
    // Browser-only check (sessionStorage/matchMedia); intentionally diverges
    // from the SSR-safe default after hydration to skip the intro delay.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (shouldSkipIntro()) setIntroDelay(0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 160);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) lastY.current = window.scrollY;
  }, [open]);

  // Castell's hero is a full-bleed dark photo (navy gradient overlay), so the
  // nav starts light-on-dark; only once scrolled (or the mobile menu opens)
  // does it switch to a solid light bar with dark text. Both text colors are
  // intentional per-state — never mixed within a single background.
  const showChrome = scrolled || open;
  const textClass = showChrome ? "text-[var(--foreground)]" : "text-white";

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{
        opacity: 1,
        y: hidden && !open ? "-100%" : 0,
      }}
      transition={{
        opacity: { duration: 0.8, delay: introDelay, ease: "easeOut" },
        y: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        showChrome
          ? "bg-[var(--surface)]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(16,28,44,0.1)]"
          : "bg-gradient-to-b from-[var(--foreground)]/55 via-[var(--foreground)]/15 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="#top" className={`flex items-center gap-2.5 transition-colors duration-500 ${textClass}`}>
          <Logo className={`h-4 w-4 shrink-0 ${showChrome ? "text-[var(--accent)]" : "text-[var(--accent-bright)]"}`} />
          <span className="font-serif text-lg tracking-[0.25em]">
            {brand.name.toUpperCase()}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`group relative py-1 text-sm tracking-wide transition-colors duration-300 ${
                  isActive
                    ? showChrome
                      ? "text-[var(--accent)]"
                      : "text-[var(--accent-bright)]"
                    : showChrome
                      ? "text-[var(--foreground)]/80 hover:text-[var(--foreground)]"
                      : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    showChrome ? "bg-[var(--accent)]" : "bg-[var(--accent-bright)]"
                  }`}
                />
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-px ${
                      showChrome ? "bg-[var(--accent)]" : "bg-[var(--accent-bright)]"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href={contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm tracking-wide transition-all duration-300 active:scale-[0.97] ${
              showChrome
                ? "border-[var(--foreground)] text-[var(--foreground)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-[0_4px_16px_-4px_rgba(124,95,28,0.5)]"
                : "border-white/70 text-white hover:border-[var(--accent-bright)] hover:bg-[var(--accent-bright)] hover:text-[var(--foreground)]"
            }`}
          >
            {brand.ctaPrimary}
          </a>
        </nav>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${textClass} ${
              showChrome ? "bg-[var(--foreground)]" : "bg-white"
            } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              showChrome ? "bg-[var(--foreground)]" : "bg-white"
            } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--foreground)]/10 bg-[var(--surface)] lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * i, ease: "easeOut" }}
                  className={`rounded-md px-2 py-2.5 text-sm tracking-wide transition-colors ${
                    active === item.href
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * nav.length, ease: "easeOut" }}
                className="mt-3 w-fit rounded-full border border-[var(--foreground)] px-5 py-2 text-sm tracking-wide text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
              >
                {brand.ctaPrimary}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "@/lib/content";
import { markIntroShown, shouldSkipIntro } from "@/lib/intro";
import Logo from "./Logo";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [skip, setSkip] = useState(false);

  useLayoutEffect(() => {
    // Reads sessionStorage/matchMedia (browser-only) to decide whether to skip
    // the intro on repeat visits or reduced-motion — must run after hydration,
    // so this intentionally diverges from the SSR-safe default state.
    /* eslint-disable react-hooks/set-state-in-effect */
    if (shouldSkipIntro()) {
      setSkip(true);
      setVisible(false);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (skip) return;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
      markIntroShown();
    }, 1900);
    return () => clearTimeout(timer);
  }, [skip]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--foreground)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo className="h-7 w-7 text-[var(--accent-bright)] sm:h-8 sm:w-8" />
            </motion.div>
            <motion.span
              className="font-serif text-2xl tracking-[0.35em] text-white sm:text-3xl"
              initial={{ opacity: 0, letterSpacing: "0.6em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.3, delay: 0.25, ease: "easeOut" }}
            >
              {brand.name.toUpperCase()}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

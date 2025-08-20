"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

export default function TypingWithMotionRotatorTwoLines() {
  // Texto fijo (typing lento)
  const mainText =
    "Lanza tu primera aplicación web profesional y úsala para conseguir trabajo o...";

  const [typed, setTyped] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  // Frases rotatorias (2ª línea)
  const phrases = [
    "tener una cafetería o juguería",
    "vender ropa",
    "vender comida rápida",
    "abrir un minimarket o bodega",
    "vender productos por delivery",
    "vender artesanías y souvenirs",
    "vender celulares y accesorios",
    "tener una peluquería o barbería",
    "abrir una farmacia o botica",
    "vender abarrotes en mercados",
    "tener una lavandería",
    "abrir un gimnasio",
  ];

  const [idx, setIdx] = useState(0);

  // Timers (tipo seguro en TS)
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rotateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Bezier (compat TS)
  const EASE = [0.4, 0.0, 0.2, 1] as const;

  /** Typing SOLO del texto principal (más lento) */
  useEffect(() => {
    if (typed.length < mainText.length) {
      typingTimer.current = setTimeout(() => {
        setTyped(mainText.slice(0, typed.length + 1));
      }, 95);
    } else {
      setTypingDone(true);
    }
    // ✅ cleanup siempre retorna una función (no null/undefined)
    return () => {
      if (typingTimer.current) {
        clearTimeout(typingTimer.current);
        typingTimer.current = null;
      }
    };
  }, [typed, mainText]);

  /** Rotación de frases (no toca el texto fijo) */
  useEffect(() => {
    if (!typingDone) return; // este branch retorna void (ok)
    rotateTimer.current = setTimeout(() => {
      setIdx((prev) => (prev + 1) % phrases.length);
    }, 2200);
    // ✅ cleanup siempre retorna función
    return () => {
      if (rotateTimer.current) {
        clearTimeout(rotateTimer.current);
        rotateTimer.current = null;
      }
    };
  }, [typingDone, idx, phrases.length]);

  return (
    <MotionConfig>
      <div className="w-full px-4 py-4 md:py-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Línea 1: texto fijo con typing */}
          <p className="text-foreground  dark:text-slate-100 text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
            <span className="align-baseline">
              {typed}
              {!typingDone && (
                <span className="ml-0.5 inline-block w-[1ch] animate-pulse">|</span>
              )}
            </span>
          </p>

          {/* Línea 2: separador + rotador (margen extra en mobile) */}
          {typingDone && (
            <div className="mt-4 sm:mt-5 flex items-baseline justify-center gap-2">
              <span className="relative inline-flex h-[1.9em] overflow-hidden align-baseline min-w-[28ch] sm:min-w-[32ch] md:min-w-[36ch]">
                <AnimatePresence initial={false} mode="wait">
                  <motion.span
                    key={phrases[idx]}
                    initial={{ y: "1em", opacity: 0 }}
                    animate={{ y: "0em", opacity: 1 }}
                    exit={{ y: "-1em", opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0 inline-flex items-center justify-center font-semibold text-blue-600 dark:text-blue-400 px-1 text-base sm:text-lg md:text-xl"
                  >
                    {phrases[idx]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}

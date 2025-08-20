"use client";

import { useState, useEffect } from "react";

export function useResponsiveAnimations() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addListener(handleChange);

    // Check mobile viewport
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      mediaQuery.removeListener(handleChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Return optimized animation configs based on device and preferences
  const getAnimationConfig = () => {
    if (prefersReducedMotion) {
      return {
        initial: {},
        animate: {},
        transition: { duration: 0 },
      };
    }

    if (isMobile) {
      return {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, ease: "easeOut" },
      };
    }

    return {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    };
  };

  const getStaggerConfig = () => {
    if (prefersReducedMotion) {
      return { staggerChildren: 0 };
    }

    return {
      staggerChildren: isMobile ? 0.1 : 0.2,
    };
  };

  return {
    isMobile,
    prefersReducedMotion,
    animationConfig: getAnimationConfig(),
    staggerConfig: getStaggerConfig(),
  };
}

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return scrollProgress;
}

"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { motion, useReducedMotion } from "motion/react";

const FIRST_DOT_DELAY_MS = 900;

export const navigationItems = [
  { label: "Home", href: "#top", thresholdId: "top" as const },
  { label: "About", href: "#about", thresholdId: "about" as const },
  {
    label: "Work",
    href: "#work",
    thresholdId: "work" as const,
  },
  { label: "Projects", href: "#projects", thresholdId: "projects" as const },
  { label: "Stack", href: "#techstack", thresholdId: "techstack" as const },
  { label: "Contact", href: "#contact", thresholdId: "contact" as const },
];

/**
 *  Turns each section's position into a scroll threshold.
 *  Returns an array of scroll thresholds, where the i-th threshold is the scroll Y
 *  at which the i-th dot appears (cumulative: all j ≤ i visible when past i).
 *
 */
function computeRevealThresholds(): number[] {
  // Get the viewport height
  const vh = typeof window === "undefined" ? 1200 : window.innerHeight;
  return navigationItems.map((item, index) => {
    // The first dot is always visible
    if (index === 0) {
      return 0;
    }
    // Get the element for the current section
    const el = document.getElementById(item.thresholdId);
    // If the element is not found, return positive infinity (so it's not visible)
    if (!el) return Number.POSITIVE_INFINITY;
    // Get the top position of the element
    const top = el.getBoundingClientRect().top + window.scrollY;
    // Return the scroll threshold
    return top - vh * 0.35;
  });
}

type VerticalNavigationProps = {
  /** True while pointer is over the fishing rail (line + labels). */
  railHovered: boolean;
};

const VerticalNavigation = ({ railHovered }: VerticalNavigationProps) => {
  const reduceMotion = useReducedMotion();
  const [scrollY, setScrollY] = useState(0);
  const [firstDotReady, setFirstDotReady] = useState(false);
  // Initialize the thresholds array with positive infinity for each section
  const [thresholds, setThresholds] = useState<number[]>(() =>
    navigationItems.map((_, i) => (i === 0 ? 0 : Number.POSITIVE_INFINITY)),
  );

  useEffect(() => {
    // Set a timeout to set the first dot ready to true after the delay
    const id = window.setTimeout(
      () => setFirstDotReady(true),
      FIRST_DOT_DELAY_MS,
    );
    return () => window.clearTimeout(id);
  }, []);

  const measureThresholds = useCallback(() => {
    // Compute the thresholds and set them in the state
    setThresholds(computeRevealThresholds());
  }, []);

  useLayoutEffect(() => {
    // Measure the thresholds when the component mounts
    measureThresholds();
  }, [measureThresholds]);

  useLayoutEffect(() => {
    // Measure the thresholds when the window is resized
    window.addEventListener("resize", measureThresholds);
    return () => window.removeEventListener("resize", measureThresholds);
  }, [measureThresholds]);

  useLayoutEffect(() => {
    // Set the scrollY state to the current scroll position
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = useMemo(() => {
    // If the thresholds array is not the same length as the navigation items, return an array of false
    if (thresholds.length !== navigationItems.length) {
      return navigationItems.map(() => false);
    }
    // Return an array of true if the scrollY is greater than the threshold for the current section
    return navigationItems.map((_, i) => scrollY >= thresholds[i]!);
  }, [scrollY, thresholds]);

  /** Last section whose scroll threshold has been passed (scroll-spy “current”). */
  const activeIndex = useMemo(() => {
    if (thresholds.length !== navigationItems.length) return 0;
    let idx = 0;
    for (let i = 0; i < thresholds.length; i++) {
      if (scrollY >= thresholds[i]!) idx = i;
    }
    return idx;
  }, [scrollY, thresholds]);

  const n = navigationItems.length;
  /** Share of column height used for the dot stack (rest is margin above/below). */
  const dotSpanPct = 50;
  const dotStartPct = (60 - dotSpanPct) / 2;

  return (
    <nav
      aria-label="Page sections"
      className="pointer-events-none absolute inset-0 z-10 hidden flex-col items-center pt-24 -right-4 pb-10 md:flex"
    >
      <div className="relative h-full w-full">
        {navigationItems.map((item, i) => {
          const scrollVisible = visible[i] ?? false;
          const isVisible =
            i === 0 ? scrollVisible && firstDotReady : scrollVisible;
          const topPct = n <= 1 ? 50 : dotStartPct + (i / (n - 1)) * dotSpanPct;

          const showAllLabels = railHovered;
          const showThisLabel =
            showAllLabels ||
            (i === activeIndex && isVisible && (i !== 0 || firstDotReady));

          const isInteractive = isVisible || railHovered;

          return (
            <motion.a
              key={item.thresholdId}
              href={item.href}
              title={item.label}
              aria-label={item.label}
              tabIndex={isInteractive ? 0 : -1}
              className={`absolute left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center ${
                isInteractive ? "pointer-events-auto" : "pointer-events-none"
              }`}
              style={{ top: `${topPct}%` }}
              initial={false}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.35,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              onFocus={(e) => {
                if (!isInteractive) e.preventDefault();
              }}
              onClick={(e) => {
                if (!isInteractive) e.preventDefault();
              }}
            >
              <span className="size-4 rounded-full border-2 border-white bg-white shadow-[0_0_12px_rgba(255,255,255,0.45)]" />
              <motion.span
                aria-hidden={!showThisLabel}
                className="pointer-events-none absolute right-full top-1/2 mr-1 -translate-y-1/2 whitespace-nowrap text-right text-sm font-medium text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]"
                initial={false}
                animate={{
                  opacity: showThisLabel ? 1 : 0,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {item.label}
              </motion.span>
            </motion.a>
          );
        })}
      </div>
    </nav>
  );
};

export default VerticalNavigation;

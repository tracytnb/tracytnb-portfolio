"use client";

import { useLayoutEffect, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

/** Line end Y in viewBox units at scroll 0 vs full scroll */
const LINE_END_Y_MAX = 1000;
const LINE_END_Y_MIN = 500;
/** Hook sits slightly above the line end (was 840 vs 850). */
const HOOK_ABOVE_LINE = 10;

function hookTransformAttr(endY: number) {
  const y = endY - HOOK_ABOVE_LINE;
  return `translate(0, ${y}) translate(45, 0) scale(-1, 1) translate(-50, 0)`;
}

export default function FishingHook() {
  const { scrollYProgress } = useScroll();

  const lineEndY = useTransform(scrollYProgress, (p) => {
    return LINE_END_Y_MIN + p * (LINE_END_Y_MAX - LINE_END_Y_MIN);
  });

  const linePath = useTransform(lineEndY, (ey) => {
    return `M 50 0 C 50 0 50 ${ey} 50 ${ey}`;
  });

  /** SVG `transform` must be a real attribute string — MotionValues in `style` on `<g>` often fail to render. */
  const [hookTransform, setHookTransform] = useState(() =>
    hookTransformAttr(LINE_END_Y_MIN),
  );
  useMotionValueEvent(lineEndY, "change", (endY) => {
    setHookTransform(hookTransformAttr(endY));
  });
  useLayoutEffect(() => {
    setHookTransform(hookTransformAttr(lineEndY.get()));
  }, [lineEndY]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      aria-hidden
      initial={{ y: "-120vh" }}
      animate={{ y: 0 }}
      transition={{
        duration: 1.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <svg width="75" height="1200" viewBox="0 0 75 1200">
        {/* Fishing Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g transform={hookTransform}>
          <path
            fill="white"
            d="M75.993,65.807c-1.019-5.333-3.333-10.779-6.349-14.941c0.755,7.418,0.892,17.497-7.028,25.076c0,0,4.434-1.02,7.961-3.972  c-0.117,11.36-7.668,16.602-20.55,16.98c-11.451,0.31-18.106-3.503-19.982-12.145c-2.848-13.584,5.877-31.574,6.86-34.06  c1.99-4.774,6.476-15.535,8.693-20.853c4.174-0.526,7.413-4.098,7.413-8.413c0-4.676-3.804-8.48-8.48-8.48  c-4.676,0-8.48,3.804-8.48,8.48c0,2.881,1.444,5.43,3.647,6.963c-9.119,22.246-19.997,42.328-15.044,59.562  c3.619,11.95,14.533,15.752,27.524,14.875C69.419,93.839,79.161,83.156,75.993,65.807z M44.531,9.889c1.98,0,3.59,1.611,3.59,3.59  c0,1.98-1.611,3.59-3.59,3.59c-1.98,0-3.59-1.611-3.59-3.59C40.941,11.5,42.551,9.889,44.531,9.889z"
          />
        </g>
      </svg>
    </motion.div>
  );
}

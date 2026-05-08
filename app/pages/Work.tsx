"use client";

import React, { useCallback, useRef, useState } from "react";
import { workData } from "@/assets/assets";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const Work = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const listRef = useRef(null);
  const isInView = useInView(listRef);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(workData.length - 1, Math.floor(v * workData.length));
    setOpenIndex(next);
  });

  const scrollToSegment = useCallback((index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const scrollRange = Math.max(0, section.offsetHeight - window.innerHeight);
    const denom = Math.max(1, workData.length - 1);
    const progress = index / denom;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop + progress * scrollRange,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="work"
      className="relative w-11/12 mx-auto lg:-left-18 h-screen pr-18 sm:pr-18 md:pr-4 lg:pr-0"
      style={{ height: `${workData.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-dvh min-h-0 flex-col gap-4">
        <h2 className="z-50 text-4xl md:text-5xl text-white font-semibold leading-relaxed pt-1">
          Work/
        </h2>
        <div
          ref={listRef}
          className="flex min-h-0 flex-col overflow-hidden pt-2"
        >
          {workData.map((job, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                animate={{
                  y: isInView ? 0 : -100,
                }}
                className="flex flex-col items-start overflow-hidden shrink-0 border-t border-foreground"
              >
                <motion.button
                  type="button"
                  onClick={() => scrollToSegment(index)}
                  className={
                    "relative w-full overflow-hidden p-2 sm:p-2 md:p-4 text-left " +
                    (!isOpen ? "hover:bg-black/5 dark:hover:bg-white/5" : "")
                  }
                >
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-0 bg-white origin-top"
                    initial={false}
                    animate={{ scaleY: isOpen ? 1 : 0 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  <div
                    className={
                      "relative z-10 flex w-full items-center justify-between md:gap-4 transition-colors duration-300 " +
                      (isOpen ? "text-black" : "text-foreground")
                    }
                  >
                    <div className="flex flex-col items-start min-w-0">
                      <h3 className="text-md sm:text-md md:text-xl lg:text-3xl font-ranchers text-left md:mb-1 shrink-0">
                        {job.title}
                      </h3>
                      <p className="text-sm sm:text-sm md:text-lg lg:text-lg opacity-90 font-bold">
                        {job.company}
                      </p>
                      <p className="text-sm sm:text-sm md:text-lg lg:text-lg opacity-75">
                        {job.period}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </motion.button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out w-full ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="relative px-4 p-2 pt-2 sm:pt-2 sm:p-2 md:pt-4 md:p-6">
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-0 border border-foreground origin-top"
                        initial={false}
                        animate={{ scaleY: isOpen ? 1 : 0 }}
                        transition={{
                          duration: 0.9,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                      <ul className="relative z-10 list-disc list-inside space-y-1 sm:space-y-1 md:space-y-1 lg:space-y-4 text-sm sm:text-sm md:text-[1.7vh] lg:text-lg">
                        {job.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

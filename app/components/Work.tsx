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
      className="relative w-11/12 mx-auto -left-18"
      style={{ height: `${workData.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-dvh min-h-0 flex-col justify-center gap-4">
        <h2 className="text-2xl md:text-3xl font-ranchers text-left shrink-0">
          WORK
        </h2>
        <div
          ref={listRef}
          className="flex min-h-0 flex-col gap-10 overflow-y-auto pt-2"
        >
          {workData.map((job, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                animate={{
                  y: isInView ? 0 : -100,
                }}
                className="flex flex-col items-start overflow-hidden shrink-0"
              >
                <motion.button
                  type="button"
                  onClick={() => scrollToSegment(index)}
                  className={
                    "relative w-full overflow-hidden p-4 text-left " +
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
                      "relative z-10 flex w-full items-center justify-between gap-4 transition-colors duration-300 " +
                      (isOpen ? "text-black" : "text-foreground")
                    }
                  >
                    <div className="flex flex-col items-start min-w-0">
                      <h3 className="text-2xl md:text-3xl font-ranchers text-left mb-1 shrink-0">
                        {job.title}
                      </h3>
                      <p className="text-lg opacity-90 font-bold">
                        {job.company}
                      </p>
                      <p className="text-lg opacity-75">{job.period}</p>
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
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="relative px-4 pt-4 p-6">
                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-0 border-2 border-foreground origin-top"
                        initial={false}
                        animate={{ scaleY: isOpen ? 1 : 0 }}
                        transition={{
                          duration: 0.9,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                      <ul className="relative z-10 list-disc list-inside space-y-4 text-md md:text-lg">
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

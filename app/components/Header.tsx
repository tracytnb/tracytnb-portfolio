"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const loadEase = [0.2, 1, 0.3, 1] as const;

const headerLoadVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: loadEase },
  },
};

const greetingText = ["ALOHA,", "HELLO,", "HOWZIT,", "XIN CHÀO,"];

const GREETING_INTERVAL_MS = 2400;
const GREETING_SLIDE_DURATION = 0.9;
const LETTER_STAGGER = 0.12;

const greetingContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: LETTER_STAGGER,
      delayChildren: 0,
    },
  },
  exit: {
    transition: {
      staggerChildren: LETTER_STAGGER * 0.85,
      staggerDirection: -1,
    },
  },
};

const cubicEase = [0.32, 0.72, 0, 1] as const;

const greetingLetterVariants = {
  hidden: { y: "100%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: GREETING_SLIDE_DURATION * 0.55,
      ease: cubicEase,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: GREETING_SLIDE_DURATION * 0.45,
      ease: cubicEase,
    },
  },
};

const RotatingGreeting = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % greetingText.length);
    }, GREETING_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  const word = greetingText[index];

  return (
    <div
      className="relative sm:text-8xl md:text-9xl"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.h2
          key={word}
          variants={greetingContainerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="relative block whitespace-nowrap leading-none font-bold"
        >
          {word.split("").map((char, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden align-text-bottom"
            >
              <motion.span
                variants={greetingLetterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.045;

const StaggerText = ({ children }: { children: string }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className="relative inline-block overflow-hidden whitespace-nowrap align-baseline text-white font-bold"
      style={{ lineHeight: 0.75 }}
    >
      {/* Rest state: visible “static” line until hover */}
      <motion.span className="inline-block" aria-hidden>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            key={i}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </motion.span>
      <motion.span className="absolute inset-0 overflow-hidden" aria-hidden>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            key={i}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </motion.span>
      <span className="sr-only">{children}</span>
    </motion.span>
  );
};

const Header = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      id="top"
      className="w-full bg-[url('/beach_photo.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <motion.div
        className="mx-auto flex min-h-screen w-11/12 flex-col pt-8 pb-10 md:pb-14"
        variants={headerLoadVariants}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? false : "show"}
      >
        <motion.div
          variants={headerItemVariants}
          className="mt-6 mb-5 text-left md:mt-40 text-background"
        >
          <RotatingGreeting />
        </motion.div>

        <motion.h1
          variants={headerItemVariants}
          className="text-8xl font-bold md:text-9xl text-background"
        >
          I&apos;M <span className="text-white">TRACY</span>
        </motion.h1>

        <div className="min-h-0 flex-1" aria-hidden />

        <div className="flex h-fit w-full flex-row flex-wrap gap-x-6 md:mb-15">
          <motion.div
            variants={headerItemVariants}
            className="min-w-0 max-w-[18vw] flex-1"
          >
            <h2 className="text-2xl font-bold md:text-3xl text-background">
              A developer with a passion for creating{" "}
              <span className="text-white font-bold text-[1.5vw]">
                scalable
              </span>
              {", "}
              <span className="text-white font-bold text-[1.5vw]">
                intuitive
              </span>
              {", and "}
              <span className="text-white font-bold text-[1.5vw]">
                accessible user-centered
              </span>{" "}
              web applications
            </h2>
          </motion.div>

          <motion.div className="self-end" variants={headerItemVariants}>
            <div className="flex flex-row flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                variants={headerItemVariants}
                className="inline-flex shrink-0 items-center gap-2 bg-white px-10 py-3 font-bold text-black"
              >
                CONTACT
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

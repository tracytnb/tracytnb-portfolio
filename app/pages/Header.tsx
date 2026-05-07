"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";

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
      className="relative text-5xl sm:text-6xl md:text-9xl"
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

type FishCursor = "ulua" | "humu";

const Header = () => {
  const reduceMotion = useReducedMotion();
  const [cursor, setCursor] = useState<FishCursor>("ulua");

  const handleCursorChange = (next: FishCursor) => {
    setCursor(next);
    if (typeof document === "undefined") return;
    if (next === "humu") {
      document.documentElement.setAttribute("data-fish-cursor", "humu");
    } else {
      document.documentElement.removeAttribute("data-fish-cursor");
    }
  };

  return (
    <div
      id="top"
      className="w-full bg-[url('/beach_photo.JPG')] bg-cover bg-center bg-no-repeat"
    >
      <motion.div
        className="mx-auto flex min-h-dvh w-11/12 flex-col pt-6 pb-6 sm:pt-8 sm:pb-10 md:pb-14 md:h-screen md:min-h-0"
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
          className="text-6xl font-bold sm:text-6xl md:text-9xl text-background"
        >
          I&apos;M <span className="text-white">TRACY</span>
        </motion.h1>

        <div className="min-h-0 md:block md:flex-1" aria-hidden />

        <div className="flex h-fit sm:w-full flex-col md:flex-row flex-wrap gap-x-6 mt-70 md:mt-0 md:mb-15 sm:flex-col">
          <motion.div
            variants={headerItemVariants}
            className="min-w-0 md:max-w-[18vw] flex-1"
          >
            <h2 className="text-xl font-bold md:text-3xl text-background">
              A developer with a passion for creating{" "}
              <span className="text-white font-bold sm:text-xl md:text-[1.5vw]">
                scalable
              </span>
              {", "}
              <span className="text-white font-bold sm:text-xl md:text-[1.5vw]">
                intuitive
              </span>
              {", and "}
              <span className="text-white font-bold sm:text-xl md:text-[1.5vw]">
                accessible user-centered
              </span>{" "}
              web applications
            </h2>
          </motion.div>

          <motion.div className="self-end" variants={headerItemVariants}>
            <div className="flex flex-col md:flex-row flex-wrap items-center gap-4 sm:mt-10 mt-10 mr-18 sm:mr-18 md:pr-0">
              <motion.a
                href="#contact"
                variants={headerItemVariants}
                className="inline-flex shrink-0 items-center gap-2 bg-white px-10 py-3 font-bold text-black"
              >
                CONTACT
              </motion.a>
            </div>
          </motion.div>

          <div className="hidden gap-1 w-2/8 ml-auto mt-auto pr-20 md:block">
            <div className="text-right">
              <button
                type="button"
                aria-pressed={cursor === "ulua"}
                className="font-bold text-black hover:scale-110 transition-all duration-300"
                onClick={() => handleCursorChange("ulua")}
              >
                <Image
                  src="/ulua_photo.png"
                  alt="Humu"
                  width={90}
                  height={90}
                />
                <span className="text-black">Ulua</span>
              </button>

              <button
                type="button"
                aria-pressed={cursor === "humu"}
                className="font-bold text-black hover:scale-110 transition-all duration-300"
                onClick={() => handleCursorChange("humu")}
              >
                <Image
                  src="/humu_photo.png"
                  alt="Humu"
                  width={60}
                  height={60}
                />
                <span className="text-black">Humu</span>
              </button>

              <div className="ml-auto text-right pt-2">
                <div className="border border-white w-full"></div>
                <p className="text-white font-bold text-md">
                  Choose your fish friend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

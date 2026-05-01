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
      className="relative text-5xl font-bold leading-none sm:text-7xl md:text-8xl lg:text-9xl"
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
          className="relative block max-w-full leading-none sm:whitespace-nowrap"
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
      className="w-full bg-[url('/beach_photo.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <motion.div
        className="mx-auto flex min-h-dvh w-full flex-col px-4 pt-6 pb-12 sm:w-11/12 sm:px-0 sm:pt-8 sm:pb-10 md:pb-14"
        variants={headerLoadVariants}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? false : "show"}
      >
        <motion.div
          variants={headerItemVariants}
          className="mt-4 text-left text-background sm:mt-6 sm:mb-5 md:mt-24 lg:mt-40"
        >
          <RotatingGreeting />
        </motion.div>

        <motion.h1
          variants={headerItemVariants}
          className="-mt-1 mb-6 text-5xl font-bold text-background sm:-mt-2 sm:text-7xl md:-mt-3 md:mb-6 lg:mb-8 md:text-8xl lg:text-9xl"
        >
          I&apos;M <span className="text-white">TRACY</span>
        </motion.h1>

        <div className="min-h-0 flex-1" aria-hidden />

        <div className="mt-10 flex h-fit w-full flex-col gap-10 md:mt-0 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-x-8 md:gap-y-6 lg:mb-15">
          <motion.div
            variants={headerItemVariants}
            className="min-w-0 w-full md:max-w-md md:flex-1 lg:max-w-[min(18vw,24rem)]"
          >
            <h2 className="text-lg font-bold leading-snug text-background sm:text-xl md:text-2xl lg:text-3xl">
              A developer with a passion for creating{" "}
              <span className="text-white font-bold sm:text-xl md:text-3xl">
                scalable
              </span>
              {", "}
              <span className="text-white font-bold sm:text-xl md:text-3xl">
                intuitive
              </span>
              {", and "}
              <span className="text-white font-bold sm:text-xl md:text-3xl">
                accessible user-centered
              </span>{" "}
              web applications
            </h2>
          </motion.div>

          <motion.div
            className="w-full shrink-0 md:w-auto md:self-end"
            variants={headerItemVariants}
          >
            <div className="flex flex-row flex-wrap items-stretch gap-4 sm:items-center md:justify-end">
              <motion.a
                href="#contact"
                variants={headerItemVariants}
                className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 bg-white px-8 py-3 text-sm font-bold text-black sm:w-auto sm:px-10 sm:text-base"
              >
                CONTACT
              </motion.a>
            </div>
          </motion.div>

          <div className="hidden w-full md:ml-auto md:mt-auto md:block md:w-auto md:max-w-sm md:shrink-0 md:pr-8">
            <div className="flex flex-col gap-3 text-center sm:text-right">
              <div className="flex flex-row flex-wrap items-center justify-center gap-6 sm:justify-end">
                <button
                  type="button"
                  aria-label="Use Ulua fish cursor"
                  aria-pressed={cursor === "ulua"}
                  className="inline-flex min-h-11 min-w-[44px] flex-col items-center gap-1 font-bold text-black transition-transform hover:scale-105 active:scale-95 sm:hover:scale-110"
                  onClick={() => handleCursorChange("ulua")}
                >
                  <Image
                    src="/ulua_photo.png"
                    alt=""
                    width={70}
                    height={70}
                    className="h-14 w-14 object-contain sm:h-[80px] sm:w-[80px]"
                  />
                  <span className="text-sm text-black sm:text-base">Ulua</span>
                </button>

                <button
                  type="button"
                  aria-label="Use Humu fish cursor"
                  aria-pressed={cursor === "humu"}
                  className="inline-flex min-h-11 min-w-[44px] flex-col items-center gap-1 font-bold text-black transition-transform hover:scale-105 active:scale-95 sm:hover:scale-110"
                  onClick={() => handleCursorChange("humu")}
                >
                  <Image
                    src="/humu_photo.png"
                    alt=""
                    width={60}
                    height={60}
                    className="h-12 w-12 object-contain sm:h-[80px] sm:w-[80px]"
                  />
                  <span className="text-sm text-black sm:text-base">Humu</span>
                </button>
              </div>

              <div className="mx-auto w-full max-w-xs pt-2 sm:ml-auto sm:max-w-none">
                <div className="border border-white" />
                <p className="mt-2 text-sm font-bold text-white sm:text-base">
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

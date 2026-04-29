"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { fadeUp } from "@/app/utils/utils";

const About = () => {
  const bioSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bioSectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12vh", "12vh"]);

  return (
    <motion.section id="about" className="relative w-full bg-background">
      {/* Full viewport: intro only — no nature */}
      <div className="relative flex min-h-dvh w-full flex-col justify-center">
        <div className="w-11/12 mx-auto py-16 md:py-24">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-6xl md:text-7xl text-left w-full max-w-7xl leading-snug text-foreground font-semibold"
          >
            // Guided by human computer interaction (HCI) principles, I strive
            to develop intuitive and user-centered applications that embrace
            user experience, understandability, and accessibility.
          </motion.p>
        </div>
      </div>

      {/* Parallax background: clipPath + fixed layer + scroll-driven y */}
      <div
        ref={bioSectionRef}
        className="relative z-0 mt-8 flex h-screen items-center justify-center overflow-hidden"
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <div className="pointer-events-none fixed left-0 top-[-10vh] z-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative h-full w-full">
            <Image
              src="/nature_bg.jpg"
              alt="Nature background"
              fill
              priority={false}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 z-1 bg-background/60" aria-hidden />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 flex h-full w-11/12 min-h-0 flex-col justify-between px-6 pb-12 pt-8 md:px-16 lg:px-15 -left-16"
        >
          <div className="ml-auto w-full text-right md:max-w-4xl">
            <p className="text-base md:text-4xl text-white/95 font-semibold leading-snug text-left">
              // Passionate about creating{" "}
              <span className="font-semibold text-accent">
                meaningful and impactful user
              </span>{" "}
              experiences. I am committed to developing software that is not
              only functional and practical but also engaging and memorable to
              interact with.
            </p>
          </div>

          <div className="w-full max-w-none md:max-w-7xl">
            <p className="text-base md:text-5xl text-white/95 font-semibold leading-relaxed">
              // Centered around the user experience and creativity with
              intentional design. I am always looking for fun and unique ways to
              solve problems and create engaging user experiences while also
              learning and incorporating the latest technologies and best
              practices.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="h-16 shrink-0 md:h-24" aria-hidden />
    </motion.section>
  );
};

export default About;

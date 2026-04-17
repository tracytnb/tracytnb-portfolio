"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { sectionVariants, fadeUp } from "@/app/utils/utils";

const About = () => {
  return (
    <motion.section
      id="about"
      className="w-9/12 mx-auto min-h-screen flex flex-col justify-center gap-20 py-16 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
    >
      <motion.p
        variants={fadeUp}
        className="text-4xl md:text-5xl text-left w-full leading-snug text-foreground/95"
      >
        Guided by human computer interaction (HCI) principles, I strive to
        develop intuitive and user-centered applications that embrace user
        experience, understandability, and accessibility.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="flex w-full flex-col lg:flex-row items-start gap-20 lg:gap-20 my-2"
      >
        <div className="shrink-0 w-full sm:w-72 max-w-sm mx-auto lg:mx-0">
          <div className="relative aspect-square overflow-hidden shadow-lg ring-1 ring-foreground/5">
            <Image
              src="/portfolio_image.jpg"
              alt="Tracy Bui"
              fill
              sizes="(max-width: 640px) 100vw, 288px"
              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="flex-1 min-w-0 space-y-5">
          <p className="text-base md:text-2xl text-foreground/90 leading-relaxed">
            Passionate about creating{" "}
            <span className="font-semibold text-accent">
              meaningful and impactful user
            </span>{" "}
            experiences. I am committed to developing software that is not only
            functional and practical but also engaging and memorable to interact
            with.
          </p>
          <p className="text-base md:text-2xl text-foreground/90 leading-relaxed">
            Centered around the user experience and creativity with intentional
            design. I am always looking for fun and unique ways to solve
            problems and create engaging user experiences while also learning
            and incorporating the latest technologies and best practices.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;

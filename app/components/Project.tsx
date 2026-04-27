"use client";

import { projectsData } from "@/assets/assets";
import { Card } from "./Card";
import { motion, useScroll } from "motion/react";
import { useEffect, useRef } from "react";

const Project = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end 0.68"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(scrollYProgress.get()));
  });

  return (
    <motion.section ref={sectionRef} id="projects">
      <h2 className="bg-background pl-0 pr-8 pb-2 pt-4 text-lg font-bold md:text-xl">
        PROJECTS
      </h2>
      <div className="flex w-11/12 mx-auto">
        <p className="text-2xl font-bold">
          I've been involved in projects with a wide range of technologies and
          industries, ranging from research, e-commerce, and web development.
        </p>
      </div>
      {projectsData.map((project, index) => {
        const targetScale = 1 - (projectsData.length - index) * 0.05;
        return (
          <Card
            key={index}
            i={index}
            {...project}
            progress={scrollYProgress}
            range={[index * 0.33, 1]}
            targetScale={targetScale}
          />
        );
      })}

      <div className="min-h-screen aria-hidden" />
    </motion.section>
  );
};

export default Project;

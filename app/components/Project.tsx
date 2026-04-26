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
    <motion.section ref={sectionRef} id="projects" className="">
      <h2 className="sticky top-0 z-50 bg-background pl-0 pr-8 pb-4 pt-8 text-2xl font-bold md:text-3xl">
        PROJECTS
      </h2>
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

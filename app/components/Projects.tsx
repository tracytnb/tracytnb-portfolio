"use client";

import { projectsData } from "@/assets/assets";
import React, { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScroll, useTransform, motion } from "motion/react";

type ScrollProgress = ReturnType<typeof useScroll>["scrollYProgress"];

function ProjectStackLayer({
  project,
  index,
  total,
  scrollYProgress,
}: {
  project: (typeof projectsData)[number];
  index: number;
  total: number;
  scrollYProgress: ScrollProgress;
}) {
  const y = useTransform(scrollYProgress, (v) => {
    if (total <= 0) return "0%";
    const start = index / total;
    const end = (index + 1) / total;
    if (v <= start) return "0%";
    if (v >= end) return "-100%";
    const t = (v - start) / (end - start);
    return `${-t * 100}%`;
  });

  return (
    <motion.div
      style={{ y, zIndex: total - index }}
      className="absolute inset-0 flex min-h-0 max-w-full origin-top flex-col overflow-hidden border-2 border-white bg-black text-zinc-100"
    >
      <div className="shrink-0 bg-white p-4 text-black">
        <h3 className="text-left text-xl md:text-2xl">
          {project.title.toUpperCase()}
        </h3>
        <div className="text-sm wrap-break-word">
          {project.tools.join(", ")}
        </div>
      </div>
      <div className="scrollbar-hide flex min-h-0 min-w-0 max-w-full flex-1 flex-row gap-6 overflow-y-auto overflow-x-hidden p-3">
        <div className="flex min-w-0 max-w-full flex-1 flex-col gap-5 wrap-break-word">
          <div className="space-y-1">
            <h5 className="text-md font-medium">DESCRIPTION</h5>
            <p className="text-md ">{project.description}</p>
          </div>
          <div>
            <h5 className="text-sm font-medium">ROLE</h5>
            <p className="mb-2 text-md font-medium">{project.role}</p>
          </div>
          <div className="space-y-1">
            <h5 className="text-md font-medium">RESPONSIBILITIES</h5>
            <ul className="list-inside list-disc text-md">
              {project.roleBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        {project.images.length > 0 && (
          <div className="min-w-0 max-w-full flex-1 space-y-1 overflow-x-hidden">
            <Carousel className="mx-auto w-full min-w-0 overflow-hidden pt-3">
              <CarouselContent>
                {project.images.map((image, i) => (
                  <CarouselItem key={i}>
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 700px) 90vw, 70vw"
                      />
                    </div>
                    <p className="mt-3 text-center text-sm">{image.name}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 -translate-y-1/2 border-0 bg-black/50 text-white hover:bg-black/20" />
              <CarouselNext className="right-2 left-auto -translate-y-1/2 border-0 bg-black/50 text-white hover:bg-black/20" />
            </Carousel>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const n = projectsData.length;
  const sectionHeightVh = n * 70;

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="relative w-11/12 mx-auto -left-18"
      style={{ height: `${sectionHeightVh}vh` }}
    >
      <div className="sticky top-0 z-0 flex h-dvh min-h-0 flex-col gap-4 py-3 md:py-6">
        <h2 className="shrink-0 text-left text-2xl md:text-3xl">PROJECTS</h2>
        <div className="relative min-h-0 w-full min-w-0 flex-1">
          {projectsData.map((project, index) => (
            <ProjectStackLayer
              key={project.title}
              project={project}
              index={index}
              total={n}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

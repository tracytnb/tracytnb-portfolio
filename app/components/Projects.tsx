"use client";

import { projectsData } from "@/assets/assets";
import { useRef, useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import FlipLink from "./FlipLink";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRowRef = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const row = projectsRowRef.current;
    const img = imageContainer.current;
    if (!row || !img) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -40 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "top 28%",
            scrub: 3,
            invalidateOnRefresh: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="projects"
      className="relative flex flex-col pt-[160px] w-11/12 mx-auto -left-18 overflow-visible h-screen"
    >
      {/* Project Description */}
      <div
        ref={projectsRowRef}
        className="relative flex h-[700px] w-full items-start overflow-visible font-semibold text-[1.35vw]"
      >
        {/* Image Container */}
        <div
          ref={imageContainer}
          className="relative h-full w-1/3 shrink-0 overflow-hidden z-10 will-change-transform"
        >
          <img
            src={projectsData[selectedProject].images[0].src}
            alt={projectsData[selectedProject].images[0].name}
            className="h-full w-full object-cover aspect-2/3"
          />
        </div>
        {/* Project Details */}
        <div className="flex flex-col w-3/5 gap-8 ml-auto mt-[20px]">
          {/* Top */}
          <div className="text-left w-full space-y-4">
            <p>{projectsData[selectedProject].tools.join(", ")}</p>
            <p className="font-bold text-accent">
              {projectsData[selectedProject].role}
            </p>
          </div>
          {/* Bottom */}
          <div className="w-3/5 items-end right-align ml-auto justify-end space-y-4 mt-[100px]">
            <p>{projectsData[selectedProject].description}</p>
          </div>
        </div>
      </div>
      {/* Project List */}
      <div className="-mt-[125px] flex flex-col z-10">
        {projectsData.map((project, index) => {
          return (
            <div
              key={`p_${index}`}
              onClick={() => {
                window.open(project.link || "", "_blank");
              }}
              className="flex justify-end border-b-2 pb-1 border-white text-white text-[5vw] mt-[40px] mb-[10px] font-bold"
            >
              <FlipLink href={project.link || ""} className="group">
                <div
                  onMouseOver={() => {
                    setSelectedProject(index);
                  }}
                  className="flex flex-row gap-4 items-center"
                >
                  <ExternalLink
                    aria-hidden
                    className="mb-8 h-12 w-12 shrink-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                  />
                  <p>{project.title}</p>
                </div>
              </FlipLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

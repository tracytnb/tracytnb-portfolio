"use client";

import { projectsData } from "@/assets/assets";
import { useRef, useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "-=100px",
      endTrigger: sectionRef.current,
      end: "top top",
      pin: true,
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col mt-[25vh] w-11/12 mx-auto -left-18"
    >
      {/* Project Description */}
      <div className="flex h-[700px] gap-[5%] w-full">
        {/* Image Container */}
        <div
          ref={imageContainer}
          className="relative h-full w-1/3 overflow-hidden"
        >
          <img
            src={projectsData[selectedProject].images[0].src}
            alt={projectsData[selectedProject].images[0].name}
            className="h-full w-full object-cover aspect-2/3"
          />
        </div>
        {/* Project Details */}
        <div className="flex flex-col w-3/5 gap-8">
          {/* Top */}
          <div className="text-left w-2/3">
            <p>{projectsData[selectedProject].description}</p>
          </div>
          {/* Bottom */}
          <div className="w-3/4 items-end right-align ml-auto justify-end">
            <p className="ml-auto">{projectsData[selectedProject].role}</p>
            <ul className="items-end right-align list-disc">
              {projectsData[selectedProject].roleBullets.map(
                (bullet, index) => (
                  <li key={index}>{bullet}</li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* Project List */}
      <div className="mt-[200px] flex flex-col">
        {projectsData.map((project, index) => {
          return (
            <div
              key={`p_${index}`}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className="flex justify-end border-b-2 pb-6 border-white text-white text-[5vw] mt-[40px] mb-[10px] font-bold"
            >
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

"use client";

import { projectsData } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="projects"
      className="w-10/12 mx-auto h-screen flex flex-col left-align justify-center gap-4"
    >
      <h2 className={`text-3xl md:text-4xl font-ranchers text-left mb-2`}>
        PROJECTS
      </h2>
      <div className="flex flex-row pt-4 gap-6">
        {/* Left: project list */}
        <div className="flex flex-col gap-4 w-100 shrink-0">
          {projectsData.map((project, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex flex-row items-center justify-between gap-2 py-6 px-3 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl text-left whitespace-nowrap truncate min-w-0">
                    {project.title.toUpperCase()}
                  </h3>
                  <div>{project.tools.join(", ")}</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90" : "-rotate-90"}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Right: detail panel fills remaining space */}
        <div className="flex-1 min-w-0 h-200 rounded-lg overflow-hidden">
          {openIndex !== null ? (
            <div
              key={openIndex}
              className="detail-slide-in scrollbar-hide p-3 h-full overflow-y-auto space-y-10"
            >
              <div className="space-y-1">
                <h5 className="text-sm b-2">DESCRIPTION</h5>
                <p className="text-sm mb-2">
                  {projectsData[openIndex].description}
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="text-sm b-2">ROLE</h5>
                <p className="text-sm font-medium mb-2">
                  {projectsData[openIndex].role}
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="text-sm b-2">RESPONSIBILITIES</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {projectsData[openIndex].roleBullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {projectsData[openIndex].images.length > 0 && (
                <div className="space-y-1">
                  <Carousel className="w-11/12 mx-auto pt-3">
                    <CarouselContent>
                      {projectsData[openIndex].images.map((image, i) => (
                        <CarouselItem key={i}>
                          <div className="aspect-video relative w-full overflow-hidden">
                            <Image
                              src={image.src}
                              alt={image.name}
                              fill
                              className="object-contain"
                              sizes="(max-width: 767px) 90vw, 45vw"
                            />
                          </div>
                          <p className="text-sm text-center mt-3">
                            {image.name}
                          </p>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-9 -translate-y-1/2 bg-black/50 hover:bg-black/20 text-white border-0" />
                    <CarouselNext className="-right-9 left-auto -translate-y-1/2 bg-black/50 hover:bg-black/20 text-white border-0" />
                  </Carousel>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-sm text-black/40 dark:text-white/40">
              Select a project
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

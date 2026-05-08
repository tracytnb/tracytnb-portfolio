"use client";

import { projectsData } from "@/assets/assets";
import { useRef, useLayoutEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import FlipLink from "../components/FlipLink";
import { ExternalLink, Eye, EyeClosed } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [disableFlipHoverReveal, setDisableFlipHoverReveal] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setDisableFlipHoverReveal(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRowRef = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const row = projectsRowRef.current;
    const img = imageContainer.current;
    if (!row || !img) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const buildTween = (startY: number) =>
        gsap.fromTo(
          img,
          { yPercent: startY },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "top 40%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );

      mm.add("(max-width: 767px)", () => {
        buildTween(-60);
      });
      mm.add("(min-width: 768px)", () => {
        buildTween(-30);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="projects"
      className="relative flex w-11/12 mx-auto lg:-left-18 flex-col overflow-visible pt-[160px] pb-16 md:pb-24 lg:pb-24"
    >
      {/* Project Header */}
      <div className="flex flex-col h-[400px] pb-20 min-h-[400px]">
        <h2 className="text-4xl md:text-5xl text-white font-semibold leading-relaxed">
          Selected_Projects/
        </h2>

        <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-semibold leading-relaxed">
          // A selection of projects ranging from different domains such as
          startup, e-commerce, and research
        </p>
      </div>
      <div className="flex min-h-[min(100dvh,750px)] flex-col justify-between md:min-h-0 md:justify-start">
        <div
          ref={projectsRowRef}
          className="relative flex h-auto w-full flex-col items-stretch overflow-visible font-semibold text-[3vw] sm:text-[3vw] md:h-[700px] lg:h-[700px] md:flex-row md:items-start md:text-[1.35vw]"
        >
          {/* Image Container */}
          <div
            ref={imageContainer}
            className="relative z-10 h-full w-[65vw] shrink-0 self-center overflow-hidden will-change-transform sm:h-full md:h-full lg:h-full sm:w-[65vw] md:w-[40vw] lg:w-1/3 md:self-auto"
          >
            <img
              src={projectsData[selectedProject].images[0].src}
              alt={projectsData[selectedProject].images[0].name}
              className="h-full w-full sm:w-full md:w-[40vw] lg:w-full md:h-[500px] lg:h-full object-cover aspect-square sm:aspect-square lg:aspect-2/3"
            />
          </div>
          {/* Project Details */}
          <div className="ml-0 flex w-full flex-col md:gap-8 md:p-8 lg:gap-8 lg:ml-auto lg:mt-[20px] lg:w-3/5">
            {/* Top */}
            <div className="text-[3vw] sm:text-[3vw] md:text-[3vw] lg:text-[1.4vw] text-left w-full md:space-y-4 lg:space-y-4">
              <p>{projectsData[selectedProject].tools.join(", ")}</p>
              <p className="font-bold text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.4vw] text-white">
                {projectsData[selectedProject].role}
              </p>
            </div>
            {/* Bottom */}
            <div className="w-full sm:w-full md:w-full lg:w-3/5 md:text-xl items-end right-align ml-auto justify-end lg:space-y-4 md:mt-[50px] lg:mt-[100px]">
              <p>{projectsData[selectedProject].description}</p>
            </div>
          </div>
        </div>
        {/* Project List */}
        <div className="flex flex-col z-20 md:-mt-[230px]">
          {projectsData.map((project, index) => {
            return (
              <FlipLink
                key={`p_${index}`}
                href={project.link}
                disableHoverReveal={disableFlipHoverReveal}
                className="group md:mt-[25px] md:mb-[10px] flex w-full justify-end border-b-2 border-white md:pb-1 text-[6vw] sm:text-[6vw] md:text-[5vw] font-bold text-white"
              >
                <div
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse") {
                      setSelectedProject(index);
                    }
                  }}
                  className="flex w-full flex-row items-center justify-between md:justify-end md:gap-4"
                >
                  <div className="z-20 shrink-0 md:hidden">
                    <button
                      type="button"
                      aria-label={`Show ${project.title} in project viewer`}
                      aria-pressed={selectedProject === index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedProject(index);
                      }}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center duration-300 ease-out ${selectedProject === index ? "bg-white text-black!" : "text-gray-500"}`}
                    >
                      {selectedProject === index ? (
                        <Eye aria-hidden className="h-7 w-7" />
                      ) : (
                        <EyeClosed aria-hidden className="h-7 w-7" />
                      )}
                    </button>
                  </div>
                  <div className="flex flex-row items-center gap-1 sm:gap-1 md:gap-4">
                    <ExternalLink
                      aria-hidden
                      className="mb-0 h-6 w-6 sm:h-6 sm:w-6 md:h-12 md:w-12 shrink-0 opacity-100 transition-opacity duration-300 ease-out md:mb-8 md:opacity-0 md:group-hover:opacity-100"
                    />
                    <p>{project.title}</p>
                  </div>
                </div>
              </FlipLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

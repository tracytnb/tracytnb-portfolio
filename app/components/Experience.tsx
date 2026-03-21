"use client";

import React, { useState } from "react";
import { experienceData } from "@/assets/assets";

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="experience"
      className="w-10/12 mx-auto h-screen flex flex-col left-align justify-center gap-4"
    >
      <h2 className={`text-2xl md:text-3xl font-ranchers text-left mb-2`}>
        EXPERIENCE
      </h2>
      <div className="flex flex-col pt-8 gap-10">
        {experienceData.map((job, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="flex flex-col items-start overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col items-start min-w-0">
                  <h3 className="text-xl md:text-2xl font-ranchers text-left mb-1 shrink-0">
                    {job.title}
                  </h3>
                  <p className="text-sm opacity-90 font-bold">{job.company}</p>
                  <p className="text-sm opacity-75">{job.period}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="list-disc list-inside px-4 pb-4 space-y-2 text-sm md:text-base pt-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

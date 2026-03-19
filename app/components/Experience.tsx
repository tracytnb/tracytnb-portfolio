"use client";

import React, { useState } from "react";

const experienceData = [
  {
    title: "FRONTEND DEVELOPER - PART-TIME",
    company: "ScienceDocs, Inc. - REMOTE",
    period: "September 2025 - Present",
    bullets: [
      "Built and iterated on a production-grade React + TypeScript web application, delivering a modular Dashboard/Search experience with Redux state management, pagination, filters, and refactored reusable hooks and components.",
      "Integrated third-party authentication and role management end-to-end, implementing Firebase Auth flows (email/password and anonymous guest), added Firebase Admin SDK support, and configured Google/Microsoft OAuth for real-world login and authorization.",
      "Designed and implemented RESTful backend endpoints using Express and TypeScript with proper HTTP semantics, including request validation, authentication middleware, and clear status/error handling (400/401/404/500).",
      "Implemented relational data storage for core platform features by designing and evolving a SQLite schema for authenticated users and sessions, role audit logging, shareable session snapshots, and persistent user state with TTL logic to support scalable platform behavior.",
    ],
  },
  {
    title: "GRADUATE RESEARCH ASSISTANT",
    company:
      "Laboratory for Advanced Visualization & Applications (LAVA), University of Hawai'i at Mānoa",
    period: "January 2023 - December 2024",
    bullets: [
      "Designed and implemented a modular full-stack data visualization platform combining front-end UI components with backend data services to render dynamic datasets.",
      "Engineered a modular flexible data ingestion framework supporting structured datasets from files and databases, enabling extensible visualization features without modifying core application logic.",
      "Applied iterative development practices (prototyping, testing, refactoring) to improve system usability, performance, and maintainability across multiple design cycles.",
      "Documented system architecture and data flows in shared repositories to support future contributors and maintainability.",
    ],
  },
  {
    title: "JAVA WEB PROGRAMMER 1",
    company:
      "UH Information Technology Services - Enterprise Systems, University of Hawai'i at Mānoa",
    period: "September 2021 - December 2022",
    bullets: [
      "Contributed to modernization of the UH ITS Admin system, migrating from Apache Struts to Spring Boot to improve performance, maintainability, and scalability.",
      "Developed and maintained features using Java, Spring Boot, JavaScript, AngularJS, Thymeleaf, and MySQL.",
      "Refactored and optimized legacy code, reducing technical debt, aligning with modern coding practices, and resolved defects to ensure reliable production performance.",
    ],
  },
  {
    title: "SUMMER ASSOCIATE INTERN",
    company:
      "First Hawaiian Bank - Emerging Technologies Division, Remote and In-Person",
    period: "June 2022 - August 2022",
    bullets: [
      "Assisted in developing web features using Golang and integrating them with existing APIs and services, contributing to improved usability and visual consistency for internal tools.",
      "Implemented small UI components and styling updates ensuring alignment with established design guidelines.",
      "Updated and tested front-end changes prior to deployment, helping maintain a stable and reliable user experience.",
      "Participated in Agile Scrum ceremonies while using Jira to track tasks, progress, and collaborate effectively with the team.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      id="experience"
      className="w-10/12 mx-auto h-screen flex flex-col left-align justify-center gap-4"
    >
      <h2 className={`text-3xl md:text-4xl font-ranchers text-left mb-2`}>
        EXPERIENCE
      </h2>
      <div className="flex flex-col pt-8 gap-10">
        {experienceData.map((job, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="flex flex-col items-start border border-black/10 dark:border-white/10 rounded-lg overflow-hidden"
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
                  <p className="text-sm opacity-90">{job.company}</p>
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
                  <ul className="list-disc list-inside px-4 pb-4 pt-0 space-y-2 text-sm md:text-base">
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

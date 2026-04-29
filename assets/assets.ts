export const workData = [
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

export const projectsData = [
  {
    title: "IP-LINK",
    tools: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Firebase"],
    description:
      "IP-LINK connects licensable university IP with federal funding opportunities and uses AI for commercialization and proposal strategy insights. It unifies grants, contracts, and IP that usually sit in separate silos on one platform.",
    role: "Lead Frontend Developer",
    roleBullets: [
      "Led frontend, design, architecture, and UI/UX implementation.",
      "Aligned UI with stakeholders and project goals.",
      "Modular frontend for scale and maintainability.",
      "Data fetching and caching across multiple sources.",
    ],
    images: [{ name: "Landing", src: "/iplink_landing.png" }],
    link: "https://iplink.sciencedocs.com/",
  },
  {
    title: "Woven with Love",
    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Firebase",
      "Firestore",
    ],
    description:
      "Woven with Love is a e-commerce platform for a local business based in Kauai, Hawaii. It is a platform for the client to sell their handwoven leis and various flower products to help promote their business.",
    role: "Full Stack Developer",
    roleBullets: [
      "Owned full-stack delivery: designed and implemented frontend, backend, and UI/UX.",
      "Grounded visual design in client’s profile and brand.",
      "Worked closely with client to stay aligned with goals.",
      "Shipped responsive frontend for mobile and desktops.",
    ],
    images: [{ name: "Landing", src: "/wwl_landing.jpg" }],
    link: "https://wovenwithlovehawaii.com/",
  },
  {
    title: "Makawalu VE Tools",
    tools: ["Unity", "C#", "Python"],
    description:
      "Graduate research project for Master's degree in Computer Science at the University of Hawai'i at Mānoa. Addresses problems of creating engaging and immersive data visualization tool and physicalization tool for a wide range of users.",
    role: "Full Stack Developer",
    roleBullets: [
      "Modular architecure allowing scalability and maintenance.",
      "Prioritized user interaction and usability using Human Computer Interaction (HCI) principles.",
      "Created a pipeline to allow for easy integration of different data sources and visualization types.",
    ],
    images: [{ name: "Upclose View of the Setup", src: "/pt_rainfall.JPG" }],
    link: "https://arxiv.org/pdf/2412.10969",
  },
];

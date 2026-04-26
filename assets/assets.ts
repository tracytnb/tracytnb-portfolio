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
      "IP-LINK connects university licensable Intellectual Property (IP) with federal funding opportunities and uses AI to generate commericalizational and generate proposal strategy insights at the global level. Grants, contracts, and IPs all operate individually in their own silos, making it difficult to identify and connect the right IP to the right opportunity. IP-LINK is designed to bridge those gaps by connecting those worlds, bringing funding, technology, and IP-driven strategies into one unified platform.",
    role: "Lead Frontend Developer",
    roleBullets: [
      "Led the development of the frontend and was the main designer for the project. Designed and implemented the entire frontend architecture and UI/UX.",
      "Provide guidance on user interface and design decisions to the team. Collaborated with the stakeholders to ensure the project is meeting their needs and goals.",
      "Created a modular architecture for the frontend, allowing for easy scalability and maintenance of the codebase.",
      "Implemented a efficient data fetching and caching on the frontend since the project is heavily data-driven with various data sources.",
    ],
    images: [
      { name: "Landing", src: "/ip_10.png" },
      { name: "Search View with IPs", src: "/ip_1.png" },
      { name: "Search View with EU Grants", src: "/ip_2.png" },
      { name: "List View with IPs", src: "/ip_3.png" },
      { name: "List View with Opportunities", src: "/ip_11.png" },
      { name: "List View with Linked Items", src: "/ip_4.png" },
      { name: "Graph View", src: "/ip_5.png" },
      { name: "AI Assistant Chat", src: "/ip_6.png" },
      { name: "About Page", src: "/ip_7.png" },
      { name: "Video Tutorial", src: "/ip_8.png" },
      { name: "Step-by-Step Tutorial", src: "/ip_9.png" },
    ],
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
      "Responsible for the entire development of the project. Designed and implemented the entire frontend and backend architecture and UI/UX.",
      "Took inspiration from the profile of the client and incorporated it into the design of the project.",
      "Communicated with the client to ensure the project is meeting their needs and goals.",
      "Implemented a responsive design for the frontend, ensuring the project is accessible on all devices.",
    ],
    images: [
      { name: "Landing", src: "/wwl_1.png" },
      { name: "Landing Continued", src: "/wwl_2.png" },
      { name: "Products", src: "/wwl_3.png" },
      { name: "Contact", src: "/wwl_4.png" },
      { name: "About", src: "/wwl_5.png" },
      { name: "Policy", src: "/wwl_6.png" },
      { name: "Cart", src: "/wwl_7.png" },
    ],
  },
  {
    title: "Makawalu VE Tools",
    tools: ["Unity", "C#"],
    description:
      "My graduate research project for my Master's degree in Computer Science at the University of Hawai'i at Mānoa. Designed and implemented to address problems of creating engaging and immersive data visualization tools for a wide range of users. The Makawalu Visualization Environment (VE) package aims to address these needs through three distinct modular tools: Author, Presenter, and Editor. These tools work together to facilitate different use cases based on the user’s requirements. This system is a data visualization and physicalization tool that has undergone multiple design iterations based off of the Laboratory for Advanced Visualization and Applications (LAVA)’s ProjecTable system. The current version integrates a touchscreen display, allowing users to view and toggle the visibility of multiple geospatial data layers. It is connected to a projector that overlays data onto a 3D model placed on the table.",
    role: "Full Stack Developer",
    roleBullets: [
      "Responsible for the entire development of the Author and Presenter tools. Designed and implemented the entire frontend and backend architecture and UI/UX for both tools.",
      "Developed a modular architecure to allow for easy scalability and maintenance of the codebase.",
      "Prioritized user interaction and usability using Human Computer Interaction (HCI) principles to ensure the tools are easy to use and understand by a wide range of users.",
      "Created a pipeline to allow for easy integration of different data sources and visualization types into the system.",
    ],
    images: [
      { name: "Upclose View of the Setup", src: "/pt_rainfall.JPG" },
      { name: "Hardware Setup", src: "/pt_hardware.png" },
      { name: "Stakeholder Visits", src: "/pt_people.png" },
      {
        name: "High Level Overview of System Architecture",
        src: "/pt_high_level_diagram.png",
      },
      {
        name: "Presenter Tool - Agriculture Data Layer",
        src: "/pt_agriculture.png",
      },
      {
        name: "Presenter Tool - Agriculture Month/Year Time-Based Slider",
        src: "/pt_agriculture_data.png",
      },
      {
        name: "User Interaction with the Agriculture Data Layer",
        src: "/pt_usage.png",
      },
      {
        name: "Author Tool - Information about the Project",
        src: "/pt_author_1.png",
      },
      { name: "Author Tool - Base Layer Selection", src: "/pt_author_2.png" },
      {
        name: "Author Tool - Adding in a Fire Risk Layer",
        src: "/pt_author_3.png",
      },
      {
        name: "Upclose View of the Setup with the Fire Risk Layer",
        src: "/pt_zoom.png",
      },
    ],
  },
];

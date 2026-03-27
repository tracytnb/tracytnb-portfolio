import React from "react";
import StackIcon from "tech-stack-icons";

const TechStack = () => {
  return (
    <div
      id="techstack"
      className="w-9/12 mx-auto h-screen flex flex-col left-align justify-center gap-10"
    >
      <h1 className="text-3xl md:text-4xl font-ranchers text-left mb-2">
        STACK
      </h1>
      <div className="grid grid-cols-[18rem_1fr] gap-x-20 gap-y-6 pt-1 items-start mt-10">
        <h4 className="text-xl md:text-2xl font-ranchers text-left mb-2 mt-4">
          LANGUAGES & TOOLS
        </h4>

        <div className="flex flex-row gap-3 flex-wrap">
          {[
            "typescript",
            "js",
            "html5",
            "css3",
            "java",
            "c#",
            "go",
            "python",
            "unity",
            "postgresql",
            "mysql",
            "sqlite",
          ].map((name, i) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center p-4 gap-4 cursor-pointer hover:-translate-y-2 duration-300"
            >
              <StackIcon name={name} className="w-10 h-10" />
              <p className="text-md">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
            </div>
          ))}
        </div>

        <h4 className="text-xl md:text-2xl font-ranchers text-left mb-2 mt-4">
          FRAMEWORKS & LIBRARIES
        </h4>

        <div className="flex flex-row gap-3 flex-wrap">
          {[
            "nodejs",
            "expressjs",
            "react",
            "nextjs",
            "tailwindcss",
            "flutter",
          ].map((name, i) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center p-4 gap-4 cursor-pointer hover:-translate-y-2 duration-300"
            >
              <StackIcon name={name} className="w-10 h-10" />
              <p className="text-md">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
            </div>
          ))}
        </div>

        <h4 className="text-xl md:text-2xl font-ranchers text-left mb-2 mt-4">
          TOOLS
        </h4>

        <div className="flex flex-row gap-3 flex-wrap">
          {[
            "git",
            "github",
            "vscode",
            "firebase",
            "photoshop",
            "jira",
            "trello",
            "figma",
            "canva",
          ].map((name, i) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center p-4 gap-4 cursor-pointer hover:-translate-y-2 duration-300"
            >
              <StackIcon name={name} className="w-10 h-10" />
              <p className="text-md">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

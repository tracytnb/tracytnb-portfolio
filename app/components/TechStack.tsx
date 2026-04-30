import React from "react";
import StackIcon from "tech-stack-icons";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

function TiltStackCell({ name }: { name: string }) {
  const X = useMotionValue(0);
  const Y = useMotionValue(0);
  const mouseXSpring = useSpring(X, { stiffness: 500, damping: 30 });
  const mouseYSpring = useSpring(Y, { stiffness: 500, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["20deg", "-20deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-20deg", "20deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    X.set((e.clientX - left) / width - 0.5);
    Y.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    X.set(0);
    Y.set(0);
  };

  return (
    <div className="perspective-[1000px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transform: "rotateY(25deg)",
          transformStyle: "preserve-3d",
        }}
        className="relative aspect-square w-35 h-35 size-35 bg-linear-to-br from-white/5 to-foreground/20 flex flex-col items-center justify-center gap-2 cursor-pointer transition-none"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-8 flex flex-col items-center justify-center gap-2"
        >
          <StackIcon name={name} className="w-12 h-12 size-12" />{" "}
          <p className="text-md font-semibold">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const TechStack = () => {
  return (
    <div
      id="techstack"
      className="relative w-11/12 mx-auto h-screen -left-18 flex flex-col gap-10"
    >
      <h2 className="z-50 text-4xl md:text-5xl text-white font-semibold leading-relaxed pt-4">
        Stack/
      </h2>
      <div className="grid grid-cols-[repeat(3,max-content)] justify-center items-center mt-auto pb-20 md:grid-cols-[repeat(3,max-content)] gap-x-2">
        <div className="flex flex-col gap-3 mt-auto items-center justify-center">
          <div className="mx-auto grid w-max max-w-full grid-cols-[repeat(3,max-content)] space-x-px space-y-px">
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
            ].map((name) => (
              <TiltStackCell key={name} name={name} />
            ))}
          </div>
          <h4 className="text-xl md:text-2xl font-ranchers text-left mb-2 mt-4">
            Languages & Databases
          </h4>
        </div>

        <div className="flex flex-col gap-3 mt-auto items-center">
          <div className="mx-auto grid w-max max-w-full grid-cols-[repeat(3,max-content)] space-x-px space-y-px">
            {[
              "nodejs",
              "expressjs",
              "react",
              "nextjs2",
              "tailwindcss",
              "flutter",
            ].map((name, i) => (
              <TiltStackCell key={name} name={name} />
            ))}
          </div>
          <h4 className="text-xl md:text-2xl font-ranchers text-left mb-2 mt-4">
            Frameworks & Libraries
          </h4>
        </div>

        <div className="flex flex-col gap-3 mt-auto items-center">
          <div className="mx-auto grid w-max max-w-full grid-cols-[repeat(3,max-content)] space-x-px space-y-px">
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
              <TiltStackCell key={name} name={name} />
            ))}
          </div>
          <h4 className="text-xl md:text-2xl font-ranchers text-left mb-2 mt-4">
            Tools
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

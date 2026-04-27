"use client";

import { cn } from "@/lib/utils";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Card = ({
  i,
  title,
  description,
  role,
  tools,
  roleBullets,
  className,
  images,
  range,
  targetScale,
  progress,
}: {
  i: number;
  title: string;
  description: string;
  role: string;
  tools: string[];
  roleBullets: string[];
  className?: string;
  images: { name: string; src: string }[];
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      ref={container}
      className={cn(
        "mt-10 flex h-[800px] w-11/12 flex-col border-2 border-white bg-black sticky top-0",
        className,
      )}
      style={{ scale: cardScale, top: `calc(2% + ${i * 100}px)` }}
    >
      <div className="flex flex-col bg-background text-foreground p-4 border-b-2 border-foreground">
        <h3 className="text-xl font-bold text-accent">{title}</h3>
        <p>{tools.join(", ")}</p>
      </div>
      <div className="flex flex-1 flex-row gap-1">
        <div className="flex w-1/2 flex-col leading-snug gap-4 p-6">
          <div className="space-y-1">
            <h5 className="text-md font-bold b-2">DESCRIPTION</h5>
            <p className="text-md">{description}</p>
          </div>
          <div className="flex flex-row gap-3">
            <h5 className="text-md font-bold b-2">ROLE</h5>
            <p className="text-md mb-2 text-accent">{role}</p>
          </div>

          <div className="flex flex-col gap-1">
            <h5 className="text-md font-bold b-2">RESPONSIBILITIES</h5>
            <ul className="list-inside list-disc pl-3">
              {roleBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-1/2 overflow-hidden">
          <motion.img
            src={images[0].src}
            alt={images[0].name}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ scale: imageScale, opacity: cardScale }}
          />
        </div>
      </div>
    </motion.div>
  );
};

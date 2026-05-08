"use client";

import { motion } from "motion/react";
import { useState } from "react";

export const navigationItems = [
  { label: "Home", href: "#top", thresholdId: "top" as const },
  { label: "About", href: "#about", thresholdId: "about" as const },
  { label: "Projects", href: "#projects", thresholdId: "projects" as const },
  {
    label: "Work",
    href: "#work",
    thresholdId: "work" as const,
  },
  { label: "Stack", href: "#techstack", thresholdId: "techstack" as const },
  { label: "Contact", href: "#contact", thresholdId: "contact" as const },
];

type VerticalNavigationProps = {
  railHovered: boolean;
};

const VerticalNavigation = ({ railHovered }: VerticalNavigationProps) => {
  const [highlight, setHighlight] = useState<string | null>(null);

  const handleMouseHover = (thresholdId: string) => {
    setHighlight(thresholdId);
  };

  return (
    <nav
      aria-label="Page sections"
      className="pointer-events-none absolute inset-0 z-10 hidden flex-col items-end pt-24 right-6 pb-10 md:flex"
    >
      <div className="flex w-full flex-col items-end gap-3">
        {navigationItems.map((item) => {
          return (
            <motion.a
              key={item.thresholdId}
              href={item.href}
              title={item.label}
              aria-label={item.label}
              className="pointer-events-auto flex flex-row items-center gap-2"
              onMouseOver={() => handleMouseHover(item.thresholdId)}
              onMouseLeave={() => setHighlight(null)}
              initial={false}
            >
              <motion.span
                className={`whitespace-nowrap text-right text-md md:text-sm lg:text-md font-medium text-white ${highlight === item.thresholdId ? "scale-110 -translate-x-3 duration-300 ease-in-out" : ""}`}
                animate={{ scale: highlight === item.thresholdId ? 1.1 : 1 }}
                initial={false}
              >
                {item.label}
              </motion.span>
              <span className="size-3 shrink-0 rounded-full border-2 border-white bg-white" />
            </motion.a>
          );
        })}
      </div>
    </nav>
  );
};

export default VerticalNavigation;

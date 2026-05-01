import { motion } from "motion/react";
import clsx from "clsx";

const FlipLink = ({
  children,
  href,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
}: {
  children: React.ReactNode | string;
  href: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target={target}
      rel={rel}
      className={clsx(
        "relative block overflow-hidden whitespace-nowrap text-white",
        className,
      )}
      style={{ lineHeight: "0.80" }}
    >
      {/* Single stagger */}
      <motion.div
        className="flex w-full justify-end overflow-hidden"
        variants={{
          initial: { y: 0, opacity: 0.1 },
          hovered: { y: "-100%" },
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 flex w-full justify-end overflow-hidden"
        variants={{
          initial: { y: "100%", opacity: 1 },
          hovered: { y: 0 },
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
};

export default FlipLink;

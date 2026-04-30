import { isValidElement, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { disperse, disperseEase } from "./disperse";

const disperseTextBase =
  "inline-block origin-left text-5xl md:text-6xl leading-tight";

function textFromReactNode(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textFromReactNode).join("");
  if (isValidElement(node)) {
    return textFromReactNode(
      (node as React.ReactElement<{ children?: ReactNode }>).props.children,
    );
  }
  return "";
}

export default function TextDipserse({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element: React.ReactNode) => {
    const chars: React.ReactNode[] = [];
    if (!isValidElement(element)) return chars;
    const word = textFromReactNode(
      (element as React.ReactElement<{ children?: ReactNode }>).props.children,
    );
    word.split("").forEach((char: string, i: number) => {
      chars.push(
        <motion.span
          key={`${char}-${i}`}
          className="inline-block"
          custom={i}
          variants={disperse}
          initial="closed"
          animate={isAnimated ? "open" : "closed"}
        >
          {char}
        </motion.span>,
      );
    });
    return chars;
  };

  return (
    <motion.div
      className={cn(
        disperseTextBase,
        "cursor-pointer",
        isAnimated ? "text-white font-bold" : "text-foreground font-semibold",
      )}
      animate={{ scale: isAnimated ? 1.2 : 1 }}
      transition={{ duration: 0.75, ease: disperseEase }}
      onMouseEnter={() => setIsAnimated(true)}
      onMouseLeave={() => setIsAnimated(false)}
    >
      {getChars(children)}
    </motion.div>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const description1 = "ENJOY NATURE OR CLIMBING";
const description2 = "FOR WILDLIFE & CRITTERS";
const AboutParallax = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const mdBot = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const lgBot = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const imagesTop = [
    {
      src: "/nature.jpg",
      y: 0,
    },
    {
      src: "/beach.jpg",
      y: lg,
    },
    {
      src: "/climbing.jpg",
      y: md,
    },
  ];

  const imagesBot = [
    {
      src: "/fish.jpg",
      y: 0,
      top: "4vh",
      left: "30vw",
    },
    {
      src: "/shell.jpg",
      y: lgBot,
      top: "37vh",
      left: "52vw",
    },
    {
      src: "/opihi.jpg",
      y: mdBot,
      top: "12vh",
      left: "19vw",
    },
  ];

  return (
    <motion.section ref={container} id="about" className="w-11/12 mx-auto">
      <div className="pt-8">
        <motion.h1 className="m-0 mt-[10vh] text-[3vw] line-height-[5vw] text-uppercase">
          Outside of programming, you can find me...
        </motion.h1>
        <p className="mt-15 text-[6vw] font-bold text-uppercase text-white w-full">
          {description1.split("").map((letter: string, i: number) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, Math.floor(Math.random() * -75) - 25],
            );

            return (
              <motion.span
                style={{ top: y }}
                className="relative"
                key={`l_${i}`}
              >
                {letter}
              </motion.span>
            );
          })}
        </p>
      </div>

      <div className="relative mt-[11vh] flex h-[65vh] w-full justify-center">
        {imagesTop.map(({ src, y }, i) => {
          return (
            <motion.div
              style={{ y }}
              key={`i_${i}`}
              className="image-container"
            >
              <Image
                src={src}
                alt="image"
                className="object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Second Section */}
      <div className="w-full mt-[15vh]">
        <motion.h1 className="m-0 mt-[10px] text-[3vw] line-height-[5vw] text-uppercase">
          Or looking down below...
        </motion.h1>
        <p className="mt-20 text-[6vw] font-bold text-uppercase text-white w-full">
          {description2.split("").map((letter: string, i: number) => {
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [0, Math.floor(Math.random() * -75) - 25],
            );

            return (
              <motion.span
                style={{ top: y }}
                className="relative"
                key={`l_${i}`}
              >
                {letter}
              </motion.span>
            );
          })}
        </p>
      </div>

      <div className="relative mt-[5vh] flex h-[65vh] w-full justify-center">
        {imagesBot.map(({ src, y, top, left }, i) => {
          return (
            <motion.div
              style={{ y, top, left }}
              key={`i_${i}`}
              className="image-container"
            >
              <Image
                src={src}
                alt="image"
                className="object-cover"
                width={500}
                height={500}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default AboutParallax;

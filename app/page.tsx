"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import Header from "./pages/Header";
import AboutParallax from "./pages/AboutParallax";
import TechStack from "./pages/TechStack";
import Work from "@/app/pages/Work";
// import Project from "./components/Project";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import FishingHook from "./components/FishingHook";
import VerticalNavigation from "./components/VerticalNavigation";
import Footer from "./pages/Footer";

export default function Home() {
  const [railHovered, setRailHovered] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* <ThemeProvider> */}
      {/* <Navbar /> */}
      <Header />
      {/* <About /> */}
      <AboutParallax />
      <div className="w-11/12 mx-auto flex flex-col gap-24 sm:gap-24 md:gap-28 lg:gap-32 pr-4 sm:pr-4 md:pr-4 lg:pr-0">
        <Projects />
        <Work />
        <TechStack />
      </div>
      <div className="relative mt-24 w-full overflow-hidden sm:mt-24 md:mt-28 lg:mt-32">
        <Image
          src="/stars.JPG"
          alt=""
          fill
          priority
          unoptimized
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1920px"
          className="z-0 object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-x-0 -top-5 z-1 h-36 bg-linear-to-b from-background to-transparent/50 sm:h-44 md:h-80"
          aria-hidden
        />
        <Contact />
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
      <div className="pointer-events-none fixed right-1 md:-right-2.5 lg:right-1 top-0 z-40 flex h-dvh w-[min(18rem,calc(100vw-1rem))] justify-end">
        <div
          className="pointer-events-auto relative h-full w-20 shrink-0"
          onMouseEnter={() => setRailHovered(true)}
          onMouseLeave={() => setRailHovered(false)}
        >
          <FishingHook />
          <VerticalNavigation railHovered={railHovered} />
        </div>
      </div>
    </>
  );
}

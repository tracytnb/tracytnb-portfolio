"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import AboutParallax from "./components/AboutParallax";
import TechStack from "./components/TechStack";
import Work from "@/app/components/Work";
// import Project from "./components/Project";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FishingHook from "./components/FishingHook";
import VerticalNavigation from "./components/VerticalNavigation";
import Footer from "./components/Footer";

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
      <div className="w-11/12 mx-auto flex flex-col gap-24 md:gap-32">
        <Projects />
        <Work />
        <TechStack />
        <Contact />
      </div>
      {/* <Footer /> */}
      <div className="pointer-events-none fixed right-4 top-0 z-40 flex h-dvh w-[min(18rem,calc(100vw-1rem))] justify-end md:right-8">
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

"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
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
        <Contact />
      </div>
      <Footer />
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

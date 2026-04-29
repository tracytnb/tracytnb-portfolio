import React, { useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-11/12 mx-auto h-[800px] flex flex-col gap-4 -left-18"
    >
      <h2 className="text-4xl md:text-5xl text-white font-semibold leading-relaxed">
        Contact/
      </h2>
      <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
        // Want to collaborate on something?
      </p>

      <div className="flex flex-row gap-5 w-full">
        {/* More About Me */}
        <div className="flex flex-row gap-10 w-2/3">
          <img
            src="/portfolio_image.jpg"
            alt="Portfolio Image"
            className="object-cover aspect-square w-1/3"
            width={300}
            height={300}
          />

          <div className="flex flex-col gap-2 w-2/3">
            <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
              Based in{" "}
              <span className="text-accent font-bold">Honolulu, HI</span>,
              I&apos;m excited to collaborate and create meaningful and
              enjoyable solutions. I am always striving to learn and grow from
              others and see what kind of craft we both can bring to the table.
            </p>

            <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
              Status: Open to opportunities | Available: Immediately | Honolulu
              or Remote
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

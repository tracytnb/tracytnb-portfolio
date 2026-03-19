import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="h-screen flex flex-col left-align justify-center gap-4"
    >
      <h2 className={`text-4xl md:text-5xl font-ranchers text-left mb-2`}>
        ABOUT
      </h2>
      <p className="text-lg md:text-xl mb-3 text-left w-full">
        Guided by human computer interaction (HCI) principles, I strive to
        develop intuitive and user-centered applications that embrace user
        experience, understandability, and accessibility.
      </p>

      <div className="flex w-full flex-col lg:flex-row items-center  my-5">
        <div className="sm:w-80 max-w-none">
          <Image
            src="/portfolio_image.jpg"
            alt="portfolio image"
            width={275}
            height={275}
          />
        </div>

        <div className="flex-1 min-w-0 space-y-4">
          <p>
            I am passionate about creating meaningful and impactful user
            experiences when developing web applications. I am commited to
            developing software that is not only functional and practical but
            also engaging and memorable to interact with.
          </p>
          <p>
            My approach to development is centered around the user experience
            and creativity. I am always looking for fun and unique ways to solve
            problems and create engaging user experiences while also
            incorporating the latest technologies and best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

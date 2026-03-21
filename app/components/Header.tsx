import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full text-center mx-auto h-screen flex flex-col left-align justify-center gap-4">
      <h1 className={`text-6xl md:text-7xl text-left font-ranchers`}>
        FRONTEND DEVELOPER
      </h1>
      <p className="text-lg md:text-lg mb-3 text-left">
        Hi! I'm <span className="font-bold">Tracy Bui</span>, a frontend
        developer based in <span className="font-bold">Honolulu, Hawaii</span>{" "}
        with a passion for creating beautiful, scalable, and user-friendly web
        applications.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white bg-black text-white flex items-center gap-2"
        >
          CONTACT ME
        </a>
        <a
          href="/Resume_Tracy_Bui.pdf"
          download
          className="px-10 py-3 border border-gray-500 flex items-center gap-2"
        >
          RESUME
        </a>
      </div>
    </div>
  );
};

export default Header;

import TextDisperse from "./TextDisperse";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-dvh w-full flex-col gap-4 pt-10"
    >
      <h2 className="text-4xl md:text-5xl text-white font-semibold leading-snug">
        Contact/
      </h2>
      <p className="text-xl md:text-3xl text-white font-semibold leading-snug">
        // Want to collaborate on something?
      </p>

      <div className="flex flex-col w-full">
        <div className="flex flex-row gap-10">
          {/* More About Me */}
          <img
            src="/portfolio_image.jpg"
            alt="Portfolio Image"
            className="object-cover aspect-square w-1/6"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-6 w-2/5 px-5 pr-20">
            <p className="text-lg md:text-[1.2vw] text-foreground font-semibold leading-snug">
              Based in{" "}
              <span className="text-white font-bold text-[1.1vw]">
                Honolulu, HI
              </span>
              , I enjoy collaborating to create meaningful and impactful
              solutions while continuously learning from others and contributing
              my own perspective and skills.
            </p>

            <p className="text-lg md:text-[1.2vw] text-foreground font-semibold leading-snug">
              I’m committed to developing software that is both practical and
              engaging to use, with a strong focus on user experience and
              thoughtful design. I enjoy finding creative ways to solve problems
              while incorporating modern technologies and best practices.
            </p>

            <div className="flex flex-col text-lg md:text-xl text-foreground font-semibold leading-snug">
              <p>
                <span className="text-white font-bold text-[1.1vw]">
                  Status:
                </span>{" "}
                Open to opportunities{" "}
              </p>
              <p>
                <span className="text-white font-bold text-[1.1vw]">
                  Available:
                </span>{" "}
                Immediately{" "}
              </p>
              <p>
                <span className="text-white font-bold text-[1.1vw]">
                  Location:
                </span>{" "}
                Honolulu or Remote
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-2/5 mt-auto ml-auto mr-15">
          <a href="mailto:tbui00.tb@gmail.com">
            <TextDisperse>
              <p>tbui00.tb@gmail.com</p>
            </TextDisperse>
          </a>

          <a href="https://www.linkedin.com/in/tracy-bui-tb/" target="_blank">
            <TextDisperse>
              <p>→ LinkedIn</p>
            </TextDisperse>
          </a>

          <a href="https://github.com/tracytnb" target="_blank">
            <TextDisperse>
              <p>→ GitHub</p>
            </TextDisperse>
          </a>

          <a href="/Resume_Tracy_Bui.pdf" download target="_blank">
            <TextDisperse>
              <p>→ Resume</p>
            </TextDisperse>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

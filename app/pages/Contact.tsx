import TextDisperse from "../components/TextDisperse";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-dvh w-full flex-col gap-4 pt-10 pb-2 sm:pb-2"
    >
      <h2 className="text-4xl md:text-5xl text-white font-semibold leading-snug">
        Contact/
      </h2>
      <p className="text-xl md:text-3xl text-white font-semibold leading-snug">
        // Want to collaborate on something?
      </p>

      <div className="flex flex-col w-full gap-5 sm:gap-5">
        <div className="flex flex-col sm:flex-col md:flex-row gap-10">
          {/* More About Me */}
          <img
            src="/portfolio_image.jpg"
            alt="Portfolio Image"
            className="object-cover aspect-square w-1/3 sm:w-1/3 md:w-1/6"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-6 md:w-2/5 md:px-5 pr-20">
            <p className="text-lg md:text-[1.2vw] text-foreground font-semibold leading-5 sm:leading-5 md:leading-snug">
              Based in{" "}
              <span className="text-white font-bold text-lg sm:text-lg md:text-[1.1vw]">
                Honolulu, HI
              </span>
              , I enjoy collaborating to create meaningful and impactful
              solutions while continuously learning from others and contributing
              my own perspective and skills.
            </p>

            <p className="text-lg md:text-[1.2vw] text-foreground font-semibold leading-5 sm:leading-5 md:leading-snug">
              I’m committed to developing software that is both practical and
              engaging to use, with a strong focus on user experience and
              thoughtful design. I delight in finding creative ways to solve
              problems while incorporating modern technologies and best
              practices.
            </p>

            <div className="flex flex-col text-lg md:text-xl text-foreground font-semibold -space-y-2 -sm:space-y-2 leading-snug">
              <p>
                <span className="text-white font-bold text-lg sm:text-lg md:text-[1.1vw]">
                  Status:
                </span>{" "}
                Open to opportunities{" "}
              </p>
              <p>
                <span className="text-white font-bold text-lg sm:text-lg md:text-[1.1vw]">
                  Available:
                </span>{" "}
                Immediately{" "}
              </p>
              <p>
                <span className="text-white font-bold text-lg sm:text-lg md:text-[1.1vw]">
                  Location:
                </span>{" "}
                Honolulu or Remote
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:gap-3 md:w-2/5 md:mt-auto md:ml-auto md:mr-15">
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

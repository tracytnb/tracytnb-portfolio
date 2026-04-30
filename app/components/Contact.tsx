import TextDisperse from "./TextDisperse";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-dvh w-full flex-col gap-4 pt-10"
    >
      <h2 className="text-4xl md:text-5xl text-white font-semibold leading-relaxed">
        Contact/
      </h2>
      <p className="text-xl md:text-3xl text-white font-semibold leading-relaxed">
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
          <div className="flex flex-col gap-8 w-2/5 px-5 pr-20">
            <p className="text-2xl md:text-3xl text-foreground font-semibold leading-relaxed">
              Based in{" "}
              <span className="text-white font-bold text-[1.4vw]">
                Honolulu, HI
              </span>
              , I&apos;m excited to collaborate and create meaningful and
              enjoyable solutions. I am always striving to learn and grow from
              others and see what kind of craft we both can bring to the table.
            </p>

            <div className="flex flex-col text-xl md:text-2xl text-foreground font-semibold leading-relaxed">
              <p>
                <span className="text-white font-bold text-[1.4vw]">
                  Status:
                </span>{" "}
                Open to opportunities{" "}
              </p>
              <p>
                <span className="text-white font-bold text-[1.4vw]">
                  Available:
                </span>{" "}
                Immediately{" "}
              </p>
              <p>
                <span className="text-white font-bold text-[1.4vw]">
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
            <p className="text-sm pl-15">Last Updated: 04/29/2026</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

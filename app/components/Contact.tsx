import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-10/12 mx-auto h-screen flex flex-col text-center justify-center gap-4"
    >
      <h2 className={`text-2xl md:text-3xl mb-2`}>CONTACT</h2>
      <h5 className="text-sm md:text-md mb-2">GET IN TOUCH</h5>
      <p>
        I'd love to connect with you! Please feel free to reach out to me via
        email or through the form below.
      </p>

      <form className="w-8/12 mx-auto justify-center items-center">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <div className="flex flex-col gap-2 left-align">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="flex-0 p-3 outline-none"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-0 p-3 outline-none"
          />
        </div>

        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none mb-6"
        />
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 mx-auto hover:bg-black/50 duration-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

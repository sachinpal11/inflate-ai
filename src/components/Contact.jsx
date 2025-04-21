import React from "react";
import PBox from "./PBox";
import { motion } from "motion/react";
import TextGradient from "./TextGradient";
function Contact() {
  return (
    <div className="w-full h-auto py-5 items-center bg-neutral-200 flex-col flex justify-center ">
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-[90%] sm:w-[80%] font-medium flex mb-10 items-center gap-3 text-start md:text-6xl text-3xl"
      >
        let's{" "}
        <TextGradient
          text={"Connect"}
          color="blue"
          size={"3xl"}
          type={"services"}
        />
      </motion.span>
      <PBox className={"flex flex-col"}>
        <h2 className="text-3xl font-medium mb-8">Send us a message</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 bg-gray-100 rounded-xl outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-gray-100 rounded-xl outline-none"
          />
          <textarea
            placeholder="How can we help you?"
            rows={6}
            className="w-full p-4 bg-gray-100 rounded-xl outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            Send a Message
          </button>
        </form>
      </PBox>
    </div>
  );
}

export default Contact;

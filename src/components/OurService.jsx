import React from "react";
import TextGradient from "./TextGradient";
import { motion } from "motion/react";
import ServicePrice from "./ServicePrice";
import PBox from "./PBox";
import CallBtn from "./CallBtn";
import { Phone } from "lucide-react";
function OurService() {
  return (
    <div className="w-full mt-10 justify-center items-center py-30 flex flex-col bg-neutral-200">
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="sm:w-[75%] w-[165] font-medium flex mt-20 mb-10 items-center gap-3 scale-50 md:scale-100  text-start text-6xl"
      >
        Our <TextGradient text={"Services"} size={"3xl"} />
      </motion.span>
      <div className="w-[80%] mb-10">
        <ServicePrice />
      </div>
      <PBox className={"items-center sm:p-2"}>
        <span className=" text-lg md:text-2xl font-medium">
          Book Your AI Voice Agent Discovery Call Today.
        </span>
        <CallBtn width={false}>
          <Phone /> Book a Call
        </CallBtn>
      </PBox>
    </div>
  );
}

export default OurService;

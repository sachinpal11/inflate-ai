import React from "react";
import CallBtn from "./CallBtn";
import { motion } from "motion/react";
function ParagraphHead({ title, isBtn }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="md:w-[75%] sm:w-[90%] w-[80%] md:text-4xl sm:flex-row flex-col sm:justify-between text-2xl xl:text-5xl font-medium flex items-start gap-3 sm:items-center my-[15vh] "
    >
      <span className="tracking-tighter text-neutral-800">{title}</span>
      {isBtn && <CallBtn width={false} />}
    </motion.div>
  );
}

export default ParagraphHead;

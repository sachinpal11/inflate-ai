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
      className="w-[75%] text-5xl font-medium  flex items-center h-[10vh] justify-between my-[15vh] "
    >
      <span className="tracking-tighter text-neutral-800">{title}</span>
      {isBtn && <CallBtn width={false} />}
    </motion.div>
  );
}

export default ParagraphHead;

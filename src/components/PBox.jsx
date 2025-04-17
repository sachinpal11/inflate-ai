import { motion } from "motion/react";
import React from "react";

function PBox({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-6xl mb-20 mx-auto w-[95%] md:w-[80%] flex justify-evenly -mt-10 bg-white rounded-3xl shadow py-5 px-1 sm:p-10"
    >
      {children}
    </motion.div>
  );
}

export default PBox;

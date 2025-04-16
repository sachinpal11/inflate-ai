import React from "react";
import TextGradient from "./TextGradient";
import { motion } from "framer-motion"; // use this instead of motion/react

function Slider() {
  const data = [
    { value: "innovative", color: "green" },
    { value: "creative", color: "blue" },
    { value: "dynamic", color: "purple" },
    { value: "efficient", color: "green" },
    { value: "versatile", color: "blue" },
    { value: "customized", color: "purple" },
  ];

  const loopedData = [...data, ...data];

  return (
    <div className="w-full mt-[5vh] flex flex-col gap-4 overflow-hidden py-6">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loopedData.map((item, index) => (
          <TextGradient
            key={index}
            text={item.value}
            size="8xl"
            color={item.color}
          />
        ))}
      </motion.div>
      <motion.div
        className="flex gap-4"
        animate={{ x: ["-100%", "-50%"] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loopedData.map((item, index) => (
          <TextGradient
            key={index}
            text={item.value}
            size="8xl"
            color={item.color}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Slider;

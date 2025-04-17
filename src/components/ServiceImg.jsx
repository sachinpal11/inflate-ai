import { ArrowBigUpDash, ArrowUp, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";

function ServiceImg({
  width,
  className = "w-full",
  src = "",
  title,
  text,
  ...props
}) {
  const [isHover, setHover] = useState(false);
  return (
    <div
      {...props}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
      className={`relative overflow-hidden rounded-4xl ${className}`}
    >
      <motion.img
        initial={{ scale: 1.1 }}
        animate={isHover ? { scale: 1.2 } : { scale: 1.1 }}
        src={src}
        transition={{ duration: 0.2 }}
        className="w-full h-full object-cover "
        alt=""
        loading="lazy"
      />
      <div className="absolute top-0 right-0 bg-gradient-to-tr from-15% from-neutral-900 to-transparent w-full h-full flex items-end p-10 text-white">
        <div className="flex flex-col gap-2">
          <span className="text-2xl capitalize font-semibold">{title}</span>
          <p className="text-neutral-400 w-[85%] mb-5 font-semibold text-xl">
            {text}
          </p>
          <motion.a
            href=""
            className="flex gap-1 hover:gap-4 transition-all hover:text-neutral-500 font-semibold text-lg"
          >
            Get Started <ArrowUpRight className="text-neutral-400 scale-75" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

export default ServiceImg;

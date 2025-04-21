import React, { createContext, useContext } from "react";
import { motion } from "motion/react";
import { div, span } from "motion/react-m";
import CallBtn from "./CallBtn";
import { Rocket } from "lucide-react";

const VariantContext = createContext("light");
const useVariant = () => useContext(VariantContext);

export default function ServicePrice() {
  const features = [
    "Advanced Automations",
    "Human Like Quality",
    "24/7 Priority Support",
    "Weekly Development Calls",
    "Rigorous Testing",
    "Latest AI Models",
  ];
  return (
    <div className="w-full flex flex-col xl:flex-row gap-4">
      <PriceBox type={"1/2"} variant="light">
        <PriceMiniBox>
          <Pricehead>
            Inbound Voice Agents{" "}
            <HeadPoint varient={"green"}>Recieve calls</HeadPoint>
          </Pricehead>
          <Pricehead>
            <span className="md:text-4xl text-3xl my-10">
              Your automated digital receptionist.
            </span>
          </Pricehead>
          <Pricehead>
            <span className="md:text-4xl text-3xl mb-8">
              Starting From US$4,000 <span className="text-lg">setup fee</span>{" "}
            </span>
          </Pricehead>
          <CallBtn varient="dark">
            {" "}
            <Rocket /> Get Started
          </CallBtn>
        </PriceMiniBox>
        <PriceArray features={features} />
      </PriceBox>
      <PriceBox type={"1/2"} variant="dark">
        <PriceMiniBox>
          <Pricehead>
            Outbound Voice Agents{" "}
            <HeadPoint varient={"blue"}>Send Calls</HeadPoint>
          </Pricehead>
          <Pricehead>
            <span className="md:text-4xl text-3xl my-10">
              <Dark>Fully automate</Dark> reminders, follow-ups & more.
            </span>
          </Pricehead>
          <Pricehead>
            <span className="md:text-4xl text-3xl mb-8">
              Starting From US$4,000 <span className="text-lg">setup fee</span>{" "}
            </span>
          </Pricehead>
          <CallBtn varient="light">
            {" "}
            <Rocket /> Get Started
          </CallBtn>
        </PriceMiniBox>
        <PriceArray features={features} />
      </PriceBox>
    </div>
  );
}

export function PriceBox({ type = "full", children, variant = "light" }) {
  const base = `p-3 xl:w-${type} w-full flex flex-col gap-4 border rounded-3xl border-1 text-2xl font-medium`;
  const variants = {
    light: "bg-neutral-100 border-neutral-100 text-black border-neutral-200",
    dark: "bg-neutral-900 border-neutral-900 text-white border-neutral-400",
  };

  return (
    <VariantContext.Provider value={variant}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className={`${base} ${variants[variant]}`}
      >
        {children}
      </motion.div>
    </VariantContext.Provider>
  );
}

export function PriceMiniBox({ children }) {
  const variant = useVariant();
  const base = "py-8 px-6 w-full border-1 rounded-2xl text-lg font-medium";
  const variants = {
    light: "bg-white border-neutral-200 text-black",
    dark: "bg-neutral-800 border-neutral-900 text-white",
  };
  return <div className={`${base} ${variants[variant]}`}>{children}</div>;
}

export function Pricehead({ children }) {
  const variant = useVariant();
  const base =
    "md:text-2xl text-lg sm:flex-row flex-col items-start gap-3 sm:gap-2 capitalize flex items-center font-medium";
  const variants = {
    light: "text-black",
    dark: "text-white",
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}

export function HeadPoint({ children, varient }) {
  const base = "text-sm ml-3 text-nowrap p-2 px-3 rounded-full";
  const variants = {
    green: "bg-green-200 text-green-700",
    blue: "text-white bg-blue-500",
  };

  return <span className={`${base} ${variants[varient]}`}>{children}</span>;
}

export function Dark({ children }) {
  return <span className="text-neutral-500">{children}</span>;
}

export function PriceArray({ features }) {
  const variant = useVariant();
  const varients = {
    light: "text-gray-800",
    dark: "text-neutral-400",
  };
  return (
    <div className="grid grid-cols-1 px-4 py-3 sm:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
          <p className={`text-xl font-semibold ${varients[variant]}`}>
            {feature}
          </p>
        </div>
      ))}
    </div>
  );
}

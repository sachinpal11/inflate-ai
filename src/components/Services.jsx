import React from "react";
import PBox from "./PBox";
import ServiceImg from "./ServiceImg";

function Services() {
  return (
    <PBox>
      <div className="w-full flex flex-col h-auto px-5">
        <div className="flex w-full justify-between items-center ">
          <p className="sm:text-4xl text-2xl text-neutral-800 font-medium">
            Our Services
          </p>
          <span className="px-3 text-nowrap text-sm sm:text-md py-2 rounded-full bg-green-200 text-green-800 font-medium">
            3 services
          </span>
        </div>
        <div className="flex w-full xl:flex-row flex-col h-auto xl:h-[70vh] gap-4 my-10">
          <ServiceImg
            className={"xl:w-1/2 xl:h-full h-[70vh] w-full"}
            src={
              "https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/67a97567c5fdffe92a6ed9dc_pexels-eren-li-7188941-p-1600.jpg"
            }
            text={
              "Human like virtual receptionist to handle your incoming calls."
            }
            title={"Inbound Calls"}
          />
          <ServiceImg
            className={"xl:w-1/2 xl:h-full h-[70vh] w-full"}
            src={
              "https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/67b2bbb2cf10882577f9bac9_pexels-karolina-grabowska-4467860-p-1600.jpg"
            }
            title={"Outbound Calls"}
            text={"Fully automate reminders, follow-ups & more."}
          />
        </div>
        <div className="h-auto -mt-6 flex xl:h-[70vh]">
          <ServiceImg
            className={"h-[70vh] w-full"}
            src={
              "https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/66b3f7d1ff69e1e71334036c_audio-headset-used-by-call-center-agents-help-clients-telecommunication.webp"
            }
            title={"Support and Maintenance"}
            text={
              "Regular updates, performance boosts, and fixes to keep your agents running smoothly."
            }
          />
        </div>
      </div>
    </PBox>
  );
}

export default Services;

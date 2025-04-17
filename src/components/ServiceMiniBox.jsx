import React from "react";
import CallBtn from "./CallBtn";

function ServiceMiniBox({ title, description, BtnText }) {
  return (
    <div className="my-3 rounded-4xl border-1 border-neutral-200 bg-neutral-50 p-3">
      <div className="bg-white border-1 flex flex-col gap-7 border-neutral-200 rounded-3xl py-10 px-3 sm:px-8">
        <span className="text-2xl sm:text-4xl font-medium">{title}</span>
        <p className=" text-sm sm:text-lg font-medium">{description}</p>
        <CallBtn text={BtnText} width={true} />
      </div>
    </div>
  );
}

export default ServiceMiniBox;

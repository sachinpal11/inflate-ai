import React from "react";
import CallBtn from "./CallBtn";
import { Phone } from "lucide-react";
import { PriceBox, PriceMiniBox } from "./ServicePrice";

function ServiceMiniBox({ title, description, BtnText }) {
  return (
    // <div className="my-3 rounded-4xl border-1 border-neutral-200 bg-neutral-50 p-3">
    //   <div className="bg-white border-1 flex flex-col gap-7 border-neutral-200 rounded-3xl py-10 px-3 sm:px-8">
    //     <span className="text-2xl sm:text-4xl font-medium">{title}</span>
    //     <p className=" text-sm sm:text-lg font-medium">{description}</p>
    //     <CallBtn width={true}>
    //       {" "}
    //       <Phone /> {BtnText}{" "}
    //     </CallBtn>
    //   </div>
    // </div>

    <PriceBox type="full">
      <PriceMiniBox>
        <span className="text-2xl sm:text-4xl font-medium">{title}</span>
        <p className=" text-sm my-4 sm:text-lg font-normal">{description}</p>
        <CallBtn width={true}>
          <Phone /> {BtnText}
        </CallBtn>
      </PriceMiniBox>
    </PriceBox>
  );
}

export default ServiceMiniBox;

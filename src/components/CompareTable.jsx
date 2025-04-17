import React from "react";
import { Check, X } from "lucide-react"; // icons for check & cross
import PBox from "./PBox";

const inflateList = [
  "Experienced AI Voice Developers",
  "Innovative Development Practices",
  "Complete Custom Development",
  "Client-Centric Approach",
  "Rigorous Testing and Validation",
  "Partners With Leading AI Voice Platforms",
];

const othersList = [
  "Junior Developers",
  "Outdated Technologies & Approaches",
  "Generic / Copy & Paste Solutions",
  "Agency-Centric Approach",
  "Limited Testing or Inadequate Quality Control",
  "No Access To Platforms, No Support",
];

function ComparisonTable() {
  return (
    <PBox>
      <div className="grid gap-15 w-full grid-cols-1 md:grid-cols-2 p-5">
        {/* Inflate Column */}
        <div className="justify-self-start">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <img
              src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/67565915a41ef940dc9d3d96_logo.png"
              alt="Inflate Logo"
              className="h-6"
            />
          </h2>
          <ul className="space-y-10 mt-14">
            {inflateList.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-base font-medium text-neutral-800"
              >
                <span className="mt-1 p-1 border-1 rounded-sm border-neutral-200">
                  <Check className="text-neutral-500  w-3 h-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Agencies Column */}
        <div className="">
          <h2 className="text-xl font-medium mb-6">
            Other Development Agencies
          </h2>
          <ul className="space-y-10 mt-12 font-medium">
            {othersList.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-base text-neutral-800"
              >
                <span className="mt-1 p-1 border-1 rounded-sm border-neutral-200">
                  <X className="text-neutral-500  w-3 h-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PBox>
  );
}

export default ComparisonTable;

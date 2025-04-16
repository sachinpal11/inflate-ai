import { Phone } from "lucide-react";
import React from "react";

function ActionCall() {
  return (
    <div className="fixed z-30 items-center gap-3 bg-white flex sm:bottom-6 sm:right-6 bottom-3 right-3 p-3 rounded-xl shadow-xl">
      <img
        src="https://cm4-production-assets.s3.amazonaws.com/1742348809316-256newlogo.png"
        className="w-15 h-15 rounded-full "
        alt=""
      />
      <div className="flex flex-col gap-2">
        <p>How can I help you?</p>
        <a
          href=""
          className="flex items-center gap-2 justify-center p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white"
        >
          <Phone />
          Start a call
        </a>
      </div>
    </div>
  );
}

export default ActionCall;

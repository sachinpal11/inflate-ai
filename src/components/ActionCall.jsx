import { Phone } from "lucide-react";
import React from "react";

function ActionCall() {
  return (
    <div className="fixed z-30 items-center gap-3 bg-white flex sm:bottom-10 sm:right-10 bottom-3 right-3 p-4 rounded-xl shadow-lg">
      <img
        src="https://cm4-production-assets.s3.amazonaws.com/1742348809316-256newlogo.png"
        className="w-16 h-16 rounded-full "
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

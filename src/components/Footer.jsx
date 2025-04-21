import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] w-full text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold tracking-wide">
            <span className="">
              <img
                src="https://cdn.prod.website-files.com/66b3f7d1ff69e1e7133402fc/67590244b8f1079e44fad2f2_New%20Project%20(4)-p-2600.png"
                alt=""
                width={200}
              />
            </span>
          </h1>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-400 mb-3">Menu</p>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-white hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                1:1 Consultation
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Vapi vs Retell
              </a>
            </li>
            <li>
              <a href="#" className="text-red-600 hover:underline font-medium">
                YouTube Channel
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center md:text-left mt-12 text-sm text-gray-400 space-y-1">
        <p>© INFLATE AI 2023 - 2025, All rights reserved.</p>
        <p>Ground floor, 470 St Kilda Road, Melbourne VIC 3004</p>
      </div>
    </footer>
  );
};

export default Footer;

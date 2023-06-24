import React from "react";
import { setBackgroundImage } from "@/utils/helpers";

function HeroBanner() {
  return (
    <div
      className="w-full h-full md:py-16 md:px-12 py-10 px-6 rounded-lg"
      style={setBackgroundImage("/images/hero-right.jpg", {
        backgroundPosition: "bottom right",
        backgroundColor: "#fac251",
        backgroundSize: "unset",
      })}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <h2 className="md:text-4xl sm:text-2xl text-xl font-bold text-title">
            20% SALE OFF
          </h2>
          <p className="text-title md:mt-7 mt-4 font-semibold">
            Synthetic seeds <br />
            Net 2.0 OZ
          </p>
        </div>
        <a href="/" className="btn-white md:mt-14 mt-10">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default HeroBanner;

import { setBackgroundImage } from "@/utils/helpers";
import React from "react";

function SliderCart({ title, subTitle, img }) {
  return (
    <div
      className="flex-1 md:py-16 md:px-14 py-10 px-6 rounded-lg"
      style={setBackgroundImage(img)}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2
            className={`md:text-4xl sm:text-2xl text-xl font-bold text-title`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className={`text-color md:mt-7 mt-4`}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        </div>
        <a href="/" className="btn-white md:mt-14 mt-10">
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default SliderCart;

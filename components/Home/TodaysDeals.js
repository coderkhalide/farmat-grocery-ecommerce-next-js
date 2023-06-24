"use client";
import ProductCard from "../Product/ProductCard";
import SectionHeading from "../shared/SectionHeading";
import { DEALS } from "../../data/products.js";
import LeftRight from "../shared/LeftRight";
import CountDownTimer from "../shared/CountDownTimer";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TodaysDeals = () => {
  const sliderRef = useRef();

  const handleSlideNext = () => {
    sliderRef.current.swiper.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <section className="pt-10 pb-5">
      <div className="container">
        <div className="flex gap-6 sm:items-center flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
            <SectionHeading
              title="Top Saver Today"
              moreText="All Offers"
              icon={true}
            />
            {/* <CountDownTimer targetTime={Date.now() + 10000} /> */}
            <CountDownTimer
              targetTime={new Date("June 24, 2023 15:37:25").getTime()}
            />
          </div>
          <LeftRight
            leftClick={handleSlidePrev}
            rightClick={handleSlideNext}
            className="!bg-[#f3f3f3]"
          />
        </div>
        {/* Products */}
        <div className="w-full flex gap-7 mt-5 pt-5 pl-2 -ml-2 mx-auto">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            ref={sliderRef}
            pagination={{
              clickable: true,
            }}
            // modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              875: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1145: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1300: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {DEALS.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TodaysDeals;

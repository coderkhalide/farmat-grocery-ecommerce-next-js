"use client";
import LeftRight from "@/components/shared/LeftRight";
import SectionHeading from "@/components/shared/SectionHeading";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { BRANDS } from "@/data/products";
import BrandCart from "./BrandCart";

function ShopByBrands() {
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
            <SectionHeading title="Shop by Brands" moreText="All Brands" />
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
            slidesPerView={8}
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              875: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
              1145: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
              1300: {
                slidesPerView: 8,
                spaceBetween: 50,
              },
            }}
          >
            {BRANDS.map((brand, index) => (
              <SwiperSlide key={index}>
                <BrandCart {...brand} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ShopByBrands;

"use client";
import ProductCard from "../Product/ProductCard";
import SectionHeading from "../shared/SectionHeading";
import { ESSENTIAL } from "../../data/products.js";
import React, { useRef } from "react";
import LeftRight from "../shared/LeftRight";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EssentialProducts = () => {
  const sliderRef = useRef();

  const handleSlideNext = () => {
    sliderRef.current.swiper.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="flex gap-6 sm:items-center flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
            <SectionHeading
              title="Best Seller"
              categories={[
                "All",
                "Grocery",
                "Fruits",
                "Vegetables",
                "Meat",
                "Fish",
              ]}
            />
          </div>
          <LeftRight leftClick={handleSlidePrev} rightClick={handleSlideNext} />
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
            {ESSENTIAL.map((product, index) => (
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

export default EssentialProducts;

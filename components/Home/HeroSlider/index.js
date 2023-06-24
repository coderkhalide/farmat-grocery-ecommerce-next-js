"use client";
import { setBackgroundImage } from "@/utils/helpers";
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderCart from "./SliderCart";
import HeroBanner from "./HeroBanner";
import { heroSliderData } from "@/components/data/heroSlideData";
import LeftRight from "@/components/shared/LeftRight";

function HeroSlider() {
  const sliderRef = useRef();

  const handleSlideNext = () => {
    sliderRef.current.swiper.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <section
      className="py-10 overflow-hidden"
      style={setBackgroundImage("/images/hero-bg.jpg")}
    >
      <div className="container">
        <div className="flex lg:flex-row flex-col gap-8">
          {/* Hero Left Banner */}
          <div className="lg:w-[60%] w-full relative">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              loop={true}
              ref={sliderRef}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[EffectFade, Autoplay]}
              className="mySwiper"
            >
              {heroSliderData.map((data) => (
                <SwiperSlide key={data.id}>
                  <SliderCart {...data} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="button absolute bottom-4 right-4 z-[99]">
              <LeftRight
                leftClick={handleSlidePrev}
                rightClick={handleSlideNext}
              />
            </div>
          </div>
          {/* Hero Right Banner */}
          <div className="lg:w-[40%] w-full">
            <HeroBanner />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;

import React from "react";
import { useSwiper } from "swiper/react";
import ArrowLeft from "@/assets/icons/arrow-left.svg?react";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";
const SwiperNavButtons = ({ index }: { index: number }) => {
  const swiper = useSwiper();

  return (
    <div className="mt-12 flex justify-between items-center lg:mt-18">
      <button
        className={`${
          index === 0 ? "bg-[#f1f1f1]" : ""
        } p-1 rounded-full transition-colors duration-300 ease-in-out hover:bg-[#e6e6e6]`}
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <ArrowLeft />
      </button>
      <button
        className={`${
          index === swiper.slides.length - 1 ? "bg-[#f1f1f1]" : ""
        } p-1 rounded-full transition-colors duration-300 ease-out hover:bg-[#e6e6e6]`}
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default SwiperNavButtons;

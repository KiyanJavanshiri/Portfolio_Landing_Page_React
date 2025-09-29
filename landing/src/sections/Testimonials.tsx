import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Container from "@/layout/Container";
import ArrowLeft from "@/assets/icons/arrow-left.svg?react";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const swiperRef = useRef<SwiperType>(null);
  const testimonials = [
    {
      id: 1,
      text1: `Lorem ipsum sit ac suspendisse adipiscing eget aliquam fermentum rutrum tempus aenean. Suspendisse nascetur vulputate viverra varius eu ullamcorper. Cursus pellentesque erat eget eget ullamcorper id in. Nullam scelerisque varius viverra augue quis. Laoreet eget curabitur vitae sed at facilisis purus convallis imperdiet.`,
      text2: `Penatibus auctor diam vivamus amet a vehicula ultrices. Volutpat arcu in amet praesent nisl mattis etiam cras orci. Ut urna elementum sapien orci lacus!`,
      author: "Joy & Jordan",
      image: "/images/couples.png",
    },
    {
      id: 2,
      text1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec magna et sapien tristique congue. Donec sit amet purus erat. Sed eget tincidunt massa, eu malesuada magna.`,
      text2: `Quisque sed viverra libero, eget pretium nunc. Vestibulum mattis sapien sed nunc iaculis, a sollicitudin arcu iaculis.`,
      author: "Anna & Mark",
      image: "/images/couples.png",
    },
    {
      id: 3,
      text1: `Suspendisse potenti. Proin sagittis urna vel mi dapibus luctus. Integer interdum ligula sed lectus suscipit, eget cursus erat euismod.`,
      text2: `Praesent ac arcu felis. Mauris faucibus, nulla eget hendrerit pretium, felis odio accumsan turpis, vitae iaculis mi orci vel magna.`,
      author: "Sophia & Liam",
      image: "/images/couples.png",
    },
  ];

  const handleNext = () => {
    console.log("pon");
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };
  const handlePrev = () => {
    console.log("pon");
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  return (
    <section id="testimonials" className="py-12 bg-[#585B56] mb-12 lg:mb-14">
      <Container>
        <div className="mx-auto max-w-[238px] md:max-w-[600px] lg:max-w-[776px]">
          <h2 className="font-cormorant text-neutral-0 text-[32px] leading-10 -tracking-[2%] font-bold text-center mb-1">
            Testimonials
          </h2>
          <p className="font-inter font-normal leading-6 text-base text-primary-300 text-center">
            from happy, delighted couples
          </p>
          <div className="mt-12 relative">
            <button
              className="absolute inline-flex bottom-[47px] left-0 lg:bottom-0 lg:top-[101px] lg:-left-[107px] cursor-pointer h-auto"
              onClick={handlePrev}
            >
              <ArrowLeft />
            </button>
            <button
              className="absolute inline-flex bottom-[47px] right-0 lg:bottom-0 lg:top-[101px] lg:-right-[107px] cursor-pointer h-min"
              onClick={handleNext}
            >
              <ArrowRight />
            </button>
            <span className="font-cormorant font-bold text-[128px] text-primary-600 leading-[136px] absolute -top-3 -left-14">
              “
            </span>
            <span className="font-cormorant font-bold text-[128px] text-primary-600 leading-[136px] absolute -top-3 -right-14">
              ”
            </span>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {testimonials.map((el) => (
                <SwiperSlide key={el.id}>
                  <div>
                    <div className="">
                      <p className="font-inter text-neutral-10 text-base leading-6 text-center mb-8 font-normal h-[288px] line-clamp-12 lg:h-[98px] lg:line-clamp-4">
                        {el.text1}
                      </p>
                      <p className="font-inter text-neutral-10 text-base leading-6 text-center font-normal h-[144px] line-clamp-6 lg:h-[48px] lg:line-clamp-2">
                        {el.text2}
                      </p>
                    </div>
                    <div className="mt-12 text-center">
                      <picture className="w-[88px] h-[88px] inline-block mb-[9px]">
                        <img
                          className="rounded-full w-full h-full object-cover"
                          src={el.image}
                          alt={el.author}
                        />
                      </picture>
                      <p className="text-small text-neutral-0 font-medium font-inter leading-5.5">
                        {el.author}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slide1Img from "../../assets/2020-Ford-Mustang.webp";
import slide2Img from "../../assets/Tesla Model 3.jpg";
import slide3Img from "../../assets/campbell-3ZUsNJhi_Ik-unsplash.jpg";
// import slide4Img from "../assets/slide4.avif"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: slide1Img,
    title: "Ford Mustang",
  },
  {
    id: 2,
    image: slide2Img,
    title: "Tesla 3",
  },
  {
    id: 3,
    image: slide3Img,
    title: "Campbell",
  },
];

const Slider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-[500px] md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-end justify-center"
              style={{ backgroundImage: `url(${slide.image})`, opacity: 0.9 }}
            >
              <div className="p-6 rounded-xl text-center max-w-xl bg-[#ffffff]/20">
                <h2 className="font-laila text-3xl md:text-5xl font-bold text-[#1b181a] mb-4">
                  {slide.title}
                </h2>
                <p className="text-[#000000] text-2xl font-semibold mb-6">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

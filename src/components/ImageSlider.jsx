import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


function ImageSlider() {
  const images = ["/8.png", "/3.png", "/3.png", "/6.png"];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-[1200px] mx-auto relative">
      
      

      <div className=" -top-10 right-0 flex gap-2 justify-between z-10">
        <h1 className="font-semibold text-2xl pb-5 text-left">Experience Hilights</h1>
        <div>
            <button
          ref={prevRef}
          className=" text-xl font-bold p-2 rounded-full"
        >
          <FaArrowLeft />

        </button>
        <button
          ref={nextRef}
          className="  font-bold text-xl p-2 rounded-full"
        >
          <FaArrowRight />

        </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <Image
                src={src}
                alt={`slide-${index + 1}`}
                width={400}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;

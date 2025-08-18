"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function ImageSlider2() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const places = [
    {
      img: "/8.png",
      name: "Surf in Canggu",
      cost: "From IDR 35,00,000.00/ person",
      desc: "Explore the stunning rice terraces of Bali with a guided tour that showcases traditional farming methods and breathtaking views.",
    },
    {
      img: "/9.png",
      name: "Temple Visit",
      cost: "$40 / person",
      desc: "Discover Bali’s spiritual side with a visit to its most iconic temples, rich with history, culture, and local rituals.",
    },
    {
      img: "/5.png",
      name: "Balinese Cooking",
      cost: "$60 / person",
      desc: "Learn to cook authentic Balinese dishes with a local chef and enjoy a delicious meal prepared by your own hands.",
    },
    {
      img: "/4.png",
      name: "Waterfall Hike",
      cost: "$55 / person",
      desc: "Adventure into the jungle and hike to hidden waterfalls, where you can swim in natural pools and enjoy the fresh air.",
    },
    {
      img: "/5.png",
      name: "Beach Day",
      cost: "$35 / person",
      desc: "Relax on Bali’s pristine beaches with crystal clear water, golden sand, and an unforgettable sunset experience.",
    },
    {
      img: "/6.png",
      name: "Cultural Dance Show",
      cost: "$45 / person",
      desc: "Immerse yourself in Balinese culture with a vibrant traditional dance performance full of color, rhythm, and storytelling.",
    },
  ];

  // After swiper is initialized, bind navigation buttons
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full max-w-[1200px] mx-auto text-center relative">
      <h2 className="text-3xl md:text-3xl mt-10 font-bold mb-8 text-[#384B40]">
        You may also like
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={setSwiperInstance} // store instance
      >
        {places.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white flex flex-col text-left p-4 h-full">
              <div className="w-full h-[320px] rounded-2xl relative mb-4">
                <Image
                  src={place.img}
                  alt={place.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-2 py-2">
                <span className="px-3 py-1 text-sm rounded-full bg-[#407C59] text-white">
                  Cangu
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700">
                  Half Day Trip
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700">
                  Private
                </span>
              </div>

              <h3 className="text-xl font-semibold text-black">
                {place.name}
              </h3>
              <p className="text-xl font-semibold mt-1 text-[#407C59]">
                {place.cost}
              </p>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed px-2">
                {place.desc}
              </p>

              <div className="flex items-end gap-4">
                <button className="mt-4 px-4 py-2 bg-[#384B40] text-white rounded-lg transition">
                  Book Escapee
                </button>
                <div className="underline text-gray-500">read more</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-10 mb-20">
        <button ref={prevRef} className="p-2 rounded-full">
          <Image src="/left.png" alt="Previous" width={100} height={24} />
        </button>
        <button ref={nextRef} className="p-2 rounded-full">
          <Image src="/right.png" alt="Next" width={100} height={24} />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider2;

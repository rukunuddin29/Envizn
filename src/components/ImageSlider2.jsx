"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function ImageSlider2() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Example data with description
  const places = [
    {
      img: "/1.png",
      name: "Surf in Canggu",
      cost: "From IDR 35,00,000.00/ person",
      desc: "Explore the stunning rice terraces of Bali with a guided tour that showcases traditional farming methods and breathtaking views.",
    },
    {
      img: "/2.png",
      name: "Temple Visit",
      cost: "$40 / person",
      desc: "Discover Bali’s spiritual side with a visit to its most iconic temples, rich with history, culture, and local rituals.",
    },
    {
      img: "/3.png",
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

  return (
    <div className="w-full max-w-[1200px] mx-auto text-center relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-3xl mt-10 font-bold mb-8 text-[#384B40]">
        You may also like
      </h2>

      {/* Slider */}
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
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {places.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  flex flex-col text-left p-4 h-full">
       
              <div className="w-full h-[320px] rounded-2xl  relative mb-4">
                <Image
                  src={place.img}
                  alt={place.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

       
              <h3 className="text-lg font-semibold text-gray-800">
                {place.name}
              </h3>
              <p className="text-gray-600 mt-1">{place.cost}</p>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed px-2">
                {place.desc}
              </p>

              
            <div className=" flex  items-end gap-4">
                  <button className="mt-4 px-4 py-2 bg-[#384B40] text-white rounded-lg  transition">
                Book Escapee
              </button>
              <div className="underline text-gray-500">
                read more
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-10 mb-20">
        <button
          ref={prevRef}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          ◀
        </button>
        <button
          ref={nextRef}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default ImageSlider2;

"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

function ReviewSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const data = [
    {
      id: 1,
      review:
        "We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike, everything was beyond our expectations. Every detail was personalized.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
      name: "John Doe",
      address: "New York, USA",
    },
    {
      id: 2,
      review:
        "The most unforgettable experience in Bali! The team was thoughtful, responsive, and curated experiences that felt authentic and truly special. We discovered hidden gems we’d never find ourselves.",
      image:
        "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=600&auto=format&fit=crop&q=60",
      name: "Jane Smith",
      address: "London, UK",
    },
    {
      id: 3,
      review:
        "From sunrise yoga on the beach to exploring hidden temples, this was the perfect blend of relaxation and adventure. I left Bali feeling rejuvenated and deeply connected to the culture.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60",
      name: "Mike Johnson",
      address: "Sydney, Australia",
    },
    {
      id: 4,
      review:
        "Hands down, the best trip I’ve ever taken. The hosts were warm, welcoming, and made us feel like family. The waterfall hike and jungle dinner were absolutely magical moments.",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60",
      name: "Emily Davis",
      address: "Toronto, Canada",
    },
    {
      id: 5,
      review:
        "Bali felt like a dream thanks to this team. Everything was organized so smoothly, from the adventures to the peaceful moments. I will definitely be returning for another escape soon.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60",
      name: "David Lee",
      address: "Singapore",
    },
  ];

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="bg-amber-50 px-6 lg:px-32 py-20 relative">
      {/* Heading */}
      <h1 className="font-semibold text-5xl mb-6">
        What our escapees say about us
      </h1>
      <p className="text-lg mb-12 max-w-3xl">
        See how escapees from around the world experienced the real Bali —
        curated with care, heart, and local soul.
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        onSwiper={setSwiperInstance}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border border-gray-200 rounded-2xl shadow-lg p-8 bg-white text-left h-[400px] flex flex-col">
              <div className="mb-3 text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
              <p className="mb-6 text-gray-700 line-clamp-6">{item.review}</p>
              <div className="mt-auto flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-full w-16 h-16"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.address}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows shifted to left */}
      <div className="flex gap-4 mt-4 mb-20 absolute left-6 lg:left-32">
        <button ref={prevRef} className="p-2 rounded-full">
          <Image src="/left.png" alt="Previous" width={80} height={24} />
        </button>
        <button ref={nextRef} className="p-2 rounded-full">
          <Image src="/right.png" alt="Next" width={80} height={24} />
        </button>
      </div>
    </div>
  );
}

export default ReviewSlider;

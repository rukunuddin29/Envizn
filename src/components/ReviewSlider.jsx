
"use client"
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ReviewSlider() {
  const data = [
    {
      id: 1,
      review:
        "We wanted magic, and Flora delivered it tenfold. From a private chef dinner in the jungle to a surprise waterfall hike, everything was beyond our expectations. Every detail was personalized.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      address: "New York, USA",
    },
    {
      id: 2,
      review:
        "The most unforgettable experience in Bali! The team was thoughtful, responsive, and curated experiences that felt authentic and truly special. We discovered hidden gems we’d never find ourselves.",
      image: "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "Jane Smith",
      address: "London, UK",
    },
    {
      id: 3,
      review:
        "From sunrise yoga on the beach to exploring hidden temples, this was the perfect blend of relaxation and adventure. I left Bali feeling rejuvenated and deeply connected to the culture.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "Mike Johnson",
      address: "Sydney, Australia",
    },
    {
      id: 4,
      review:
        "Hands down, the best trip I’ve ever taken. The hosts were warm, welcoming, and made us feel like family. The waterfall hike and jungle dinner were absolutely magical moments.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "Emily Davis",
      address: "Toronto, Canada",
    },
    {
      id: 5,
      review:
        "Bali felt like a dream thanks to this team. Everything was organized so smoothly, from the adventures to the peaceful moments. I will definitely be returning for another escape soon.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      name: "David Lee",
      address: "Singapore",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex < data.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="bg-amber-50 px-6 lg:px-32 py-20">
      <h1 className="font-semibold text-5xl mb-6">
        What our escapees say about us
      </h1>
      <p className="text-lg mb-12 max-w-3xl">
        See how escapees from around the world experienced the real Bali — curated
        with care, heart, and local soul.
      </p>

      {/* Slider Cards */}
      <div className="flex gap-6 overflow-hidden scroll-smooth h-[400px]">
        {data.slice(startIndex, startIndex + 3).map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-2xl shadow-lg p-8 w-[380px] bg-white text-left flex-shrink-0"
          >
            <div className="mb-3 text-yellow-500 text-lg">⭐⭐⭐⭐⭐</div>
            <p className="mb-6 text-gray-700 line-clamp-6">{item.review}</p>
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-16 h-16 mb-3"
            />
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.address}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center mt-8 gap-6">
        <button
          onClick={prevSlide}
          className="p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 "
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ReviewSlider;

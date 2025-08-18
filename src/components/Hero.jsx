import React from "react";
import Image from "next/image";

import Info from "./Info";

function Hero() {
  return (
    <div className="px-4 sm:px-8 md:px-[64px] py-12 sm:py-16 md:py-[112px] bg-[#fdf3e8] flex flex-col items-center gap-12 md:gap-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[1376px] mx-auto">
        
        {/* Column 1 (1 & 2) */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <Image src="/1.png" alt="frame" width={1376} height={398} priority />
          <Image src="/2.png" alt="frame" width={1376} height={398} priority />
        </div>

        <div>
          <Image src="/3.png" alt="frame" width={1376} height={398} priority />
        </div>

        <div className="hidden md:flex flex-col gap-4 sm:gap-6">
          <Image src="/4.png" alt="frame" width={1376} height={398} priority />
          <Image src="/5.png" alt="frame" width={1376} height={398} priority />
        </div>

        <div className="hidden md:block">
          <Image src="/6.png" alt="frame" width={1376} height={398} priority />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-[#384B40]">
          Balinese Day with a Local <br className="hidden sm:block" /> Family
        </h1>
        <h4 className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700">
          Immerse yourself in the heart of Balinese culture by spending a day
          with a local family. This authentic experience offers a unique glimpse
          into daily life, traditions, and the warmth of Balinese hospitality.
        </h4>
      </div>

      <Info />
    </div>
  );
}

export default Hero;

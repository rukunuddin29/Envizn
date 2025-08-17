import React from "react";
import Image from "next/image";

import Info from "./Info";

function Hero() {
  return (
    <div className="h-[1141px] px-[64px] py-[112px] bg-amber-50 flex flex-col items-center gap-16">
      <div className="text-lg font-bold">
        <Image
          src="/frame.png"
          alt="frame"
          width={1376}
          height={398}
          priority
        />
      </div>

      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold leading-snug text-[#384B40]">
          Balinese Day with a Local <br /> Family
        </h1>
        <h4 className="mt-6 text-lg text-gray-700">
          Immerse yourself in the heart of Balinese culture by spending a day
          with a local family. This authentic experience offers a unique glimpse
          into daily life, traditions, and the warmth of Balinese hospitality.
        </h4>
      </div>

      <div className="border-2 border-gray-300 w-[1353px] h-[130px] rounded-[32px] flex justify-evenly items-center text-center">
        <Info/>
      </div>
    </div>
  );
}

export default Hero;

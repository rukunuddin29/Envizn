"use client"

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[72px] bg-[#fdf3e8] flex justify-between items-center pl-6 lg:pl-[70px] pr-[30px] max-w-full mx-auto">

      <div className="text-lg font-bold">
        <Image
          src="/logo.png"
          alt="Logo"
          width={165.58}
          height={32}
          priority
        />
      </div>

      <div className="hidden md:flex items-center gap-[32px] h-[40px] w-[613px]">
        <a href="">Home</a>
        <a href="">Experience</a>
        <a href="">Guide</a>
        <a href="">
          Itineraries <span className="inline-block">˅</span>
        </a>
        <a href="">FAQ</a>

        <button className="w-[127px] h-[40px] rounded-[16px] bg-[#384B40] text-white flex items-center justify-center">
          Book a call
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setOpen(!open)}>
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      
      {open && (
        <div className="absolute top-[72px] left-0 w-full bg-amber-50 flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          <a href="">Home</a>
          <a href="">Experience</a>
          <a href="">Guide</a>
          <a href="">
            Itineraries <span className="inline-block">˅</span>
          </a>
          <a href="">FAQ</a>

          <button className="w-[127px] h-[40px] rounded-[16px] bg-[#384B40] text-white flex items-center justify-center">
            Book a call
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

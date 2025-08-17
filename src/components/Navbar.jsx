import React from "react";
import Image from "next/image";


function Navbar() {
  return (
    <div className="w-full h-[72px] bg-amber-50 flex justify-between items-center px-[64px] max-w-full mx-auto">
      
       <div className="text-lg font-bold">
        <Image 
          src="/logo.png"  
          alt="Logo" 
          width={165.58} 
          height={32} 
          priority 
        />
      </div>

    
      <div className="flex items-center gap-[32px] h-[40px] w-[613px]">
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
    </div>
  );
}

export default Navbar;

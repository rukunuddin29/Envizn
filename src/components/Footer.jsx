import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="min-h-[380px] bg-[#384B40] flex flex-col items-center justify-center px-6 py-10"
      style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="w-full max-w-[1400px] flex flex-col items-center space-y-10">
        
          <Image src="/logo2.png" width={165} height={32} alt="Logo" />


          <div className="flex flex-col sm:flex-row text-lg sm:text-xl text-white gap-6 sm:gap-12 items-center">
            <a href="#">Home</a>
            <a href="#">Experiences</a>
            <a href="#">Guide</a>
            <a href="#">Itenaries</a>
            <a href="#">FAQ</a>
          </div>

         
          <div className="w-full border-t-2 border-white opacity-80 mt-10"></div>

       
          <div className="flex flex-col sm:flex-row text-white text-sm justify-between items-center w-full gap-4 sm:gap-0">
            <div className="text-center sm:text-left">
              © 2024 Bali With Flow. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Setting</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

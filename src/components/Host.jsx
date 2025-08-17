'use client'
import React from 'react'

function Host() {
  return (
    <div
      className="w-full h-[300px] sm:h-[550px] md:h-[650px] lg:h-[550px] bg-cover bg-center flex items-center text-white p-4 sm:p-6 md:p-8"
      style={{ backgroundImage: "url('/host.png')" }}
    >
      <div className="max-w-3xl  mx-auto lg:mx-0 pl-0 lg:pl-[64px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About the Host
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 ">
          "I’ve spent 6+ years discovering the real Bali—what most people never get to see. 
          I created BaliwithFlow to share that magic with escapees who crave meaning, depth, 
          and effortless beauty in every detail."
        </p>
      <div className="flex flex-col sm:flex-row gap-4">
  <button className=" w-[200px] px-6 py-2 bg-[#F48712] rounded-lg text-white font-medium text-base hover:bg-[#d96f0f] transition">
    Book Escape  <span className='font-bold pl-2'>⟶</span>
  </button>
  <button className="px-6 w-[200px] py-2 border border-white bg-[#FFFFFF66] rounded-lg text-white font-medium text-base hover:bg-white hover:text-black transition">
    Plan personal trip
  </button>
</div>

      </div>
    </div>
  )
}

export default Host

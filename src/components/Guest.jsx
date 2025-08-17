"use client";

import React, { useState } from "react";
import Form from "./Form";
import Divider from "./Divider";
import Section from "./Section";
import Calender from "./Calender";
import FAQ from "./FAQ";

function Guest() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="w-full min-h-screen py-[112px] px-6 sm:px-12 md:px-[80px] gap-12 md:gap-20 lg:gap-40 flex flex-col lg:flex-row items-start relative">
        
        
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Experience a Day with a Balinese Family
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2">
            Slow down. Watch the light move across the rice fields. Learn how to make coconut oil the way it’s been done for generations. 
            This is Bali with soul — the part you don’t find in guidebooks.
          </p>

          <h3 className="text-lg sm:text-xl font-medium text-gray-800 mt-4">
            How can I connect with locals without it feeling forced or touristy?
          </h3>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2">
            You spend a day with Tiwi and her family. You help make offerings, walk their land, cook lunch together, and share stories. 
            No performance. Just presence.
          </p>

          <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mt-4">What's included?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-base sm:text-lg md:text-xl mt-2">
            <li>Walk through the rice fields with Tiwi</li>
            <li>Learn how to make offerings & coconut oil</li>
            <li>Cook & enjoy an authentic Balinese lunch</li>
            <li>Option to stay overnight in the family home</li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-5 py-2 bg-[#F48712] text-white font-medium rounded-lg shadow-md hover:bg-[#d96f0f]">
              Village near Ubud
            </button>
            <button className="px-5 py-2 border border-gray-400 text-gray-700 font-medium rounded-lg hover:bg-gray-100">
              Learn More
            </button>

          </div>
          <Divider/>

          <Section/>
          <Calender/>

          <FAQ/>

        </div>
        
        <div className="w-full sm:w-[380px] md:w-[460px] lg:w-[575px] sticky top-24 self-start bg-amber-50 rounded-2xl border-r-4 border-b-4 border-amber-600 p-6 sm:p-4 md:p-5">
          <Form />
        </div>

      </div>
    </>
  );
}

export default Guest;

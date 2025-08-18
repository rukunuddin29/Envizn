import React from 'react';

function Form() {
  return (
    <div className="pt-[20px] px-2 lg:px-[30px] rounded-2xl mx-auto">
      {/* Rating */}
      <p className="text-gray-700 mb-6">
        ⭐⭐⭐⭐⭐ <span className="text-gray-500 text-sm">(4.9 · 120 reviews)</span>
      </p>

      {/* Price */}
      <p className="mb-6 text-gray-800 font-bold text-[28px] leading-[120%] tracking-normal">
        From IDR 150,000.00 <span className="font-normal text-lg">/ Person</span>
      </p>

      {/* Show more */}
      <p className="text-gray-600 cursor-pointer underline mb-8 text-base font-medium">
        Show more
      </p>

  
      <div className="flex flex-col gap-6 mb-8">
        <input
          type="number"
          placeholder="Guests"
          className="w-full h-16 px-4 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F48712] text-gray-700 text-base"
        />
        <input
          type="text"
          placeholder="Date and Time"
          className="w-full h-16 px-4 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F48712] text-gray-700 text-base"
        />
        <input
          type="text"
          placeholder="Select Add-ons"
          className="w-full h-16 px-4 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F48712] text-gray-700 text-base"
        />
      </div>

      {/* Button */}
      <button className="w-[185px] h-[48px] bg-[#384B40] text-white font-semibold rounded-lg shadow-md hover:bg-[#4a6053] transition-colors text-base">
        Reserve for free ⟶
      </button>
    </div>
  );
}

export default Form;

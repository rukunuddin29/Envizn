import React from "react";
import { FaLocationDot, FaClock, FaSuitcase } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

const infoItems = [
  { icon: <FaLocationDot className="text-[#F48712] text-2xl" />, label: "Location", value: "Kaleki" },
  { icon: <FaClock className="text-[#F48712] text-2xl" />, label: "Duration", value: "Morning 9-12" },
  { icon: <IoMdPeople className="text-[#F48712] text-2xl" />, label: "Escapees", value: "8" },
  { icon: <FaSuitcase className="text-[#F48712] text-2xl" />, label: "Type of trip", value: "Private" },
  { icon: <BiWorld className="text-[#F48712] text-2xl" />, label: "Category", value: "Full day trip" },
];

function Info() {
  return (
    <div className="border-2 border-gray-300 w-[1353px] h-[130px] rounded-[32px] flex justify-evenly items-center">
      {infoItems.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="flex items-center gap-3 px-6">
            <div>{item.icon}</div>
            <div className="flex flex-col items-start leading-tight">
              <span className="font-semibold text-gray-800 text-xl">{item.label}</span>
              <span className="text-gray-500 text-base">{item.value}</span>
            </div>
          </div>

          {/* Divider (not after last item) */}
          {idx !== infoItems.length - 1 && (
            <div className="border-r-2 border-gray-300 h-25"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Info;

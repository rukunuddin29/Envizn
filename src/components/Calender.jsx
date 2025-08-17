"use client";

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Divider from "./Divider";

function Calender() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const options = { month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-6">
      <p className="text-2xl font-semibold text-gray-800">Next Available Date</p>

      {mounted && (
        <div className="react-calendar border border-gray-500 text-gray-700 overflow-hidden">
          <Calendar
            onChange={(date) => setSelectedDate(date)}
            value={selectedDate}
            className="w-full border-none"
          />
        </div>
      )}

      <p className="text-lg font-medium text-gray-800">
        {selectedDate
          ? `Book slot for ${formatDate(selectedDate)}`
          : "Book slot for a selected date"}
      </p>

      <div className="border rounded-2xl h-10 w-32 flex items-center justify-center text-gray-800 hover:bg-gray-200 cursor-pointer font-medium shadow-sm">
        9 am - 12 am
      </div>
 <Divider/>
    </div>
  );
}

export default Calender;

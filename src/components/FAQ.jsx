import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import BaliMap from "./BaliMap";

function FAQ() {
  return (
    <div className="space-y-4">
        <h1 className="font-semibold text-2xl">Additional Information </h1>
      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer p-4 border-b-2 border-gray-200 text-gray-900 ">
            
          <h2 className="text-xl text-gray-700 font-medium ">
            Where will we meet ?
          </h2>

          <span className="transition">
            <FaPlus className="w-4 h-4 group-open:hidden" />
            <FaMinus className="w-4 h-4 hidden group-open:inline" />
          </span>
        </summary>

        <BaliMap/>

        <p className="px-4 pb-4 py-5 text-gray-700">
        Pickup & Drop-off Location: Your hotel or villa within Ubud, Canggu, Seminyak, or Sanur areas

Pickup Time: 7:30 AM – We’ll confirm the exact time based on your location

Drop-off Time: Around 4:30 PM (depending on traffic and group pace)

Private Transfers: Clean, air-conditioned vehicle with a friendly local driver
        </p>
      </details>

      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer border-b-2 border-gray-200 p-4 text-gray-900">
          <h2 className="text-xl text-gray-700 font-medium">
           Start and Ends
          </h2>

       
          <span className="transition">
            <FaPlus className="w-4 h-4 group-open:hidden" />
            <FaMinus className="w-4 h-4 hidden group-open:inline" />
          </span>
        </summary>

        <p className="px-4 pb-4 py-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer p-4 border-b-2 border-gray-200 text-gray-900">
          <h2 className="text-xl text-gray-700 font-medium">
            Suitability / Accebility
          </h2>

          {/* Icon toggle */}
          <span className="transition">
            <FaPlus className="w-4 h-4 group-open:hidden" />
            <FaMinus className="w-4 h-4 hidden group-open:inline" />
          </span>
        </summary>

        <p className="px-4 pb-4 py-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer p-4 border-b-2 border-gray-200 text-gray-900">
          <h2 className="text-xl text-gray-700 font-medium">
            Cancelation/ other policies 
          </h2>

       
          <span className="transition">
            <FaPlus className="w-4 h-4 group-open:hidden" />
            <FaMinus className="w-4 h-4 hidden group-open:inline" />
          </span>
        </summary>

        <p className="px-4 pb-4 py-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer p-4 border-b-2 border-gray-200 text-gray-900">
          <h2 className="text-xl text-gray-700 font-medium">
            What to pack ?
          </h2>

          {/* Icon toggle */}
          <span className="transition">
            <FaPlus className="w-4 h-4 group-open:hidden" />
            <FaMinus className="w-4 h-4 hidden group-open:inline" />
          </span>
        </summary>

        <p className="px-4 pb-4 py-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

    
    </div>
  );
}

export default FAQ;

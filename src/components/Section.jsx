import React from 'react'
import { IoDiamondSharp, IoCompassOutline } from "react-icons/io5";
import { FaLeaf, FaHeart } from "react-icons/fa";
import Divider from './Divider';

function Section() {
  return (
    <>
    <div className=''>
      <h1 className='text-3xl font-semibold mb-6'>
        Discover Local Culture with a Balinese <br />Family (Tiwi)
      </h1>

      <ul className='space-y-4 text-xl text-gray-700'>
        <li className='flex items-center'>
          <IoDiamondSharp className='text-[#F48712] mr-3 text-xl' />
          Walk through the rice fields with Tiwi
        </li>
        <li className='flex items-center'>
          <FaLeaf className='text-[#F48712] mr-3 text-xl' />
          Learn how to make offerings & coconut oil
        </li>
        <li className='flex items-center'>
          <FaHeart className='text-[#F48712] mr-3 text-xl' />
          Cook & enjoy an authentic Balinese lunch
        </li>
        <li className='flex items-center'>
          <IoCompassOutline className='text-[#F48712] mr-3 text-xl' />
          Option to stay overnight in the family home
        </li>
        <li className='flex items-center'>
          <IoCompassOutline className='text-[#F48712] mr-3 text-xl' />
          The host speaks French and English
        </li>
      </ul>

      <p className='text-gray-500 underline mt-6 text-lg cursor-pointer'>
        Show details
      </p>
    </div>

     <Divider/>
    </>
  )
}

export default Section

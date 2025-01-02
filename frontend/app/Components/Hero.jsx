'use client'
import React from 'react'

const Hero = () => {
  return (
    <div
    className="mx-auto mt-10 w-[93%] 2xl:w-[60%] text-xl lg:w-[70%] md:w-[95%] bg-white h-[400px] mt-4 border-none rounded-lg text-grey md:text-2xl font-bold font-mono shadow-sm hover:shadow-2xl p-3 cursor-pointer transition duration-500 ease-in-out"
    style={{
      backgroundImage: `url('/Assets/banner.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
  </div>
  )
}

export default Hero
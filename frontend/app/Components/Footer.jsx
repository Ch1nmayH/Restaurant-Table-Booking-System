import React from 'react'

const Footer = () => {
  return (
    <div className="mx-auto mt-[65px] w-[93%] 2xl:w-[60%] lg:w-[70%] md:w-[95%] mt-[1%] mb-[20px] h-[1%] border-none rounded-lg flex justify-center">
    <div className="border-none rounded-lg flex justify-between flex-col w-[100%] text-grey h-[10%] text-2xl font-bold font-mono p-3 shadow-sm"
    style={{
        background: "linear-gradient(to bottom, #FFD700, #FFFACD)", 
      }}>
      <p className="text-[12px] md:text-[19px] text-center font-medium font-Lexend p-3">
        &copy; 2024 <span className="font-Mynerve text-[19px] text-center font-bold">DineDash.</span> All rights reserved.
      </p>
    </div>
    </div>
  )
}

export default Footer
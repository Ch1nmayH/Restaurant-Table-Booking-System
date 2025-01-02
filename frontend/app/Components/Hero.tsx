import React from 'react'
import bannerImg from "../../public/banner.jpg";

const Hero = () => {
  return (
    <div
    className="mx-auto mt-10 w-[93%] 2xl:w-[60%] text-xl lg:w-[70%] md:w-[95%] bg-white mt-4 border-none rounded-lg flex justify-between flex-col items-center text-grey md:text-2xl font-bold font-mono shadow-sm hover:shadow-2xl p-3 cursor-pointer transition duration-500 ease-in-out"
    style={{
      backgroundImage: `url(${bannerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="flex md:flex-row justify-between items-center w-full md:mt-5 ml-[2%] mt-[9%] mb-[3%] flex-col items-center mt-5">
      <div>
        <div className="flex flex-col w-[90%] md:flex-row md:justify-between md:items-center md:w-[95%] lg:w-[95%] items-center justify-center">
          <p className="text-gray-600 mr-[10px] ml-[43px] md:mr-[40px] text-[15px] md:text-[19px] lg:text-left md:text-left md:ml-[40px] text-center lg:word-wrap">
            Welcome to DineDash, your ultimate dining companion! Whether you're planning a romantic dinner, a family gathering, or a night out with friends, we've got you covered. Discover top-rated restaurants, browse menus, and secure your table in just a few taps. Say goodbye to long waits and hello to effortless reservations. With real-time availability and personalized recommendations, your perfect dining experience starts here. Bon appétit!
          </p>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default Hero
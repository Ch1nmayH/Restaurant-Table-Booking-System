'use client';
import React from 'react'
import { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from 'next/link';


const NavBar = () => {
     const [showMenu, setShowMenu] = useState(false);
    
      const handleMenu = () => {
        setShowMenu(!showMenu);
      };
  return (
    <div
    className="mx-auto mt-10 w-[93%] 2xl:w-[60%] text-xl lg:w-[70%] md:w-[95%] bg-white mt-4 border-none rounded-lg flex justify-between flex-col items-center text-grey md:text-2xl font-bold font-mono shadow-sm hover:shadow-2xl p-3 cursor-pointer transition duration-500 ease-in-out"
  >
    <div className="flex justify-between items-center w-full mt-5">
      <p className="ml-[2%] font-Mynerve">Logo</p>
      <div className="hidden md:flex md:justify-between md:items-center md:mr-[2%]">
        <Link href="/about">
        
          <CalendarMonthIcon />
        </Link>
        <Link href="/about">
        
          <CalendarMonthIcon />
        </Link>
        <Link href="/about">
        
          <CalendarMonthIcon />
        </Link>
        
      </div>

      <button
        className="md:hidden flex justify-between items-center p-2"
        onClick={handleMenu}
      >
        {!showMenu ? (
          <MenuIcon className="text-gray-800" />
        ) : (
          <CloseIcon className="text-gray-800" />
        )} 
      </button>
    </div>

     {showMenu && (
      <div
        className="fixed inset-0 flex bg-black bg-opacity-70 items-center justify-center z-50"
        onClick={handleMenu}
      >
        <div
          className="bg-white shadow-2xl rounded-lg w-80 h-20 flex justify-center items-center p-4 space-y-4 mt-[250px]"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex items-center justify-between items-center space-x-4">
            <li>
            <Link href="/about">
        
          <CalendarMonthIcon />
        </Link>
       
            </li>
            <li>
            <Link href="/about">
        
        <CalendarMonthIcon />
      </Link>
     
            </li>
            <li>
            <Link href="/about">
      
      <CalendarMonthIcon />
    </Link>
            </li>
          </ul>
        </div>
      </div>
    )} 


  </div>
  )
}

export default NavBar
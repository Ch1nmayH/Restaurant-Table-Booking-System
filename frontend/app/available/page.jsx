"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import the default styles
import Link from "next/link";

const AvailableCalender = () => {


  //API base URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [error, setError] = useState("");

  const fetchAvailableSlots = async (date) => {
    try {
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;     
      console.log(formattedDate);
      const response = await fetch(
        `${API_BASE_URL}/api/booking/available-slots?date=${formattedDate}`
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data.availableSlots)
        setAvailableSlots(data.availableSlots);
      } else {
        setError(data.message || "Failed to fetch available slots");
      }
    } catch (error) {
      setError("Failed to fetch available slots");
    }
  };

  useEffect(() => {
    if (selectedDate) {
      console.log(selectedDate);
      fetchAvailableSlots(selectedDate);
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    if(date < new Date()) {
      setError("Please select a future date.");
      setAvailableSlots([]);
      return;
    }
    setError("");
    setSelectedDate(date);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4 flex items-center justify-center min-h-screen">
      <div>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 text-center bg-yellow-300 p-2 rounded-lg">
          Select a Date
        </h2>
        
        {/* Calendar Wrapper */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-full max-w-md rounded-lg border shadow-lg p-4 bg-white">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              className="react-calendar"
            />
          </div>
        </div>

        <Link href="/"><h2 className="text-lg font-semibold mt-[30px] text-gray-900 text-center bg-red-300 p-1 rounded-lg mb-4">
          Go Back
        </h2></Link>

        {/* Available Slots Display */}
        {selectedDate && (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-white">
              Available Slots for {selectedDate.toDateString()}:
            </h3>
            {availableSlots.length > 0 ? (
              <ul  className="space-y-2">
                {availableSlots.map((slot, index) => (
                  <Link href={`/booking?date=${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}&time=${slot}`} className="text-black hover:text-gray-300">
                  <li key={index} className="bg-gray-100 p-2 rounded-md mt-2 hover:bg-gray-400 text-black">
                    {slot}
                  </li>
                  </Link>
                ))}
              </ul>
            ) : (
              <p className="text-white">No available slots for this date.</p>
            )}
          </div>
        )}
      
      {error && (
        <p className="text-red-500 text-center mt-4 text-2xl font-bolder">
          {error}
        </p>
      )}
      </div>
    </div>
  );
};

export default AvailableCalender;

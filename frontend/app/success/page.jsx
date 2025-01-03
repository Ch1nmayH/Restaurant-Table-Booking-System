'use client'
import React from "react";
import { useState } from "react";
import jsPDF from "jspdf";


const success = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [bookingId, setBookingId] = useState(null);
    
  // Generate PDF Invoice
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text("DineDash Booking Invoice", 20, 20);
    doc.setFont("helvetica", "normal");

    const {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      numberOfGuests,
      DateForBooking,
      timeForBooking,
      bookingDate,
    } = bookingDetails;

    doc.text(`Booking ID: ${bookingId}`, 20, 40);
    doc.text(`Name: ${name}`, 20, 50);
    doc.text(`Email: ${email}`, 20, 60);
    doc.text(`Phone: ${phone}`, 20, 70);
    doc.text(`Address: ${address || "N/A"}`, 20, 80);
    doc.text(`City: ${city}`, 20, 90);
    doc.text(`Postal Code: ${postalCode}`, 20, 100);
    doc.text(`Number of Guests: ${numberOfGuests}`, 20, 110);
    doc.text(`Booked for the date: ${DateForBooking}`, 20, 120);
    doc.text(`Booked for the time slot: ${timeForBooking}`, 20, 130);
    doc.text(
      `Booking Date: ${new Date(bookingDate).toLocaleString()}`,
      20,
      150
    );
    doc.text(
      `Booking Date: ${new Date(bookingDate).toLocaleString()}`,
      20,
      150
    );

    doc.save(`booking_invoice_${bookingId}.pdf`);
  };

  if (!bookingDetails) {
    return (
      <div className="flex justify-center items-center h-screen">

      
      <div className="text-center text-red-500 text-xl p-3 bg-white shadow-lg rounded-lg flex justify-center items-center h-20 w-screen"> 
       Booking not found!
      </div>
      </div>
    );
  }

  const {
    name,
    email,
    phone,
    address,
    city,
    postalCode,
    numberOfGuests,
    DateForBooking,
    timeForBooking,
    bookingDate,
  } = bookingDetails;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-green-600 mb-4 text-center">
        Booking Successful!
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Thank you for booking with us. Your booking details are as follows:
      </p>

      {/* Booking Details */}
      <div className="space-y-4 text-gray-700">
        <div>
          <span className="font-semibold">Booking ID:</span> {"bookingId"}
        </div>
        <div>
          <span className="font-semibold">Name:</span> {"name"}
        </div>
        <div>
          <span className="font-semibold">Email:</span> {"email"}
        </div>
        <div>
          <span className="font-semibold">Phone:</span> {"phone"}
        </div>

        <div>
          <span className="font-semibold">address:</span> {"address" || "N/A"}
        </div>
        <div>
          <span className="font-semibold">city:</span> {"city"}
        </div>
        <div>
          <span className="font-semibold">postalCode:</span> {"postalCode"}
        </div>
        <div>
          <span className="font-semibold">Number of Guests:</span>{" "}
          {"numberOfGuests"}
        </div>
        <div>
          <span className="font-semibold">Booked for the date :</span>{" "}
          {"boked date"}
        </div>
        <div>
          <span className="font-semibold">Booked for the time slot :</span> $
          {"booked time"}
        </div>
        <div>
          <span className="font-semibold">Booking Date:</span>{" "}
          {new Date("bookingDate").toLocaleString()}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          //   onClick={() => window.print()}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Print Invoice
        </button>
        <button
          //   onClick={generatePDF}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default success;

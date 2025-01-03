'use client';
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

const booking = () => {
  
  //API base URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;  
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [dateForBookingRequest, setDateForBookingRequest] = useState("");
  const [timeForBookingRequest, setTimeForBookingRequest] = useState("");
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search); // Parse query params from URL
    const date = searchParams.get("date");
    const time = searchParams.get("time");

    if (date) {
      setDateForBookingRequest(date);
      // console.log("Date:", date);
    }

    //  if(!date){
    //   const today = new Date();
    //   const todayString = today.toISOString().split("T")[0];
    //   console.log(todayString);
    //   setDateForBookingRequest(todayString);
    // }

    
    if (time) {
      setTimeForBookingRequest(time);
      // console.log("Time:", time);
    }
  }, []); // Empty dependency array ensures it runs once

  useEffect(() => {
    fetchAvailableTimeSlots();
  }, [dateForBookingRequest,timeForBookingRequest]);


  const fetchAvailableTimeSlots = async (date) => {
    try {
      let theDate = new Date();
      theDate = theDate.toISOString().split("T")[0];
      if(dateForBookingRequest){
        theDate = dateForBookingRequest;
      }
      const response = await fetch(
        `${API_BASE_URL}/api/booking/available-slots?date=${theDate}`
      );
      const data = await response.json();
      if (response.ok) {
        setAvailableTimeSlots(data.availableSlots);
      } else {
        setServerError(data.message || "Failed to fetch available slots");
      }
    } catch (error) {
      setServerError("Failed to fetch available slots");
    }
  };


  // Individual error states
  const [fullNameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [numberOfGuestsError, setNumberOfGuestsError] = useState("");
  const [serverError, setServerError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [postalError, setPostalError] = useState("");
  const [dateForBookingRequestError, setDateForBookingRequestError] =
    useState("");
  const [timeForBookingRequestError, setTimeForBookingRequestError] =
    useState("");

  // Validation functions
  const validateFullName = () => {
    if (!fullName) return "Full name is required";
    return "";
  };

  const validateEmail = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    return "";
  };

  const validateNumberOfGuests = () => {
    if (!numberOfGuests) return "Number of Guests Field is required";
    if (numberOfGuests.length < 1) return "Number Of Guests must be at least 1";
    return "";
  };

  const ValidateMobileNumber = () => {
    if (!mobile) return "Mobile Number is required";
    if (mobile.length < 10) return "Enter A valid Mobile Number ( 10 digits )";
    return "";
  };

  const validateAddress = () => {
    if (!address) return "Address is required";
    return "";
  };

  const validateCity = () => {
    if (!city) return "City is required";
    return "";
  };

  const validatePostal = () => {
    if (!postal) return "Postal Code is required";
    return "";
  };

  const validateDateForBookingRequest = () => {
    if (!dateForBookingRequest) return "Date For Booking is required";

    const selectedDate = new Date(dateForBookingRequest);
    selectedDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if(selectedDate < today) return "Date For Booking must be in the future";
    return "";
  };

  const handleRedirect = (_id) => {
    console.log('Redirecting to /success');
    router.push(`/success?id=${_id}`);
  };
  const validateTimeForBookingRequest = () => {
    if (!timeForBookingRequest) return "Time For Booking is required";
    return "";
  };

  // Handle submit with field validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update error states individually
    const fullNameValidation = validateFullName();
    const emailValidation = validateEmail();
    const mobileValidation = ValidateMobileNumber();
    const numberOfGuestsValidation = validateNumberOfGuests();
    const addressValidation = validateAddress();
    const cityValidation = validateCity();
    const postalValidation = validatePostal();
    const dateForBookingRequestValidation = validateDateForBookingRequest();
    const timeForBookingRequestValidation = validateTimeForBookingRequest();

    setFirstNameError(fullNameValidation);
    setEmailError(emailValidation);
    setMobileError(mobileValidation);
    setNumberOfGuestsError(numberOfGuestsValidation);
    setAddressError(addressValidation);
    setCityError(cityValidation);
    setPostalError(postalValidation);
    setDateForBookingRequestError(dateForBookingRequestValidation);
    setTimeForBookingRequestError(timeForBookingRequestValidation);

    // Check if there are any errors
    if (
      fullNameValidation ||
      emailValidation ||
      mobileValidation ||
      numberOfGuestsValidation ||
      addressValidation ||
      cityValidation ||
      postalValidation ||
      dateForBookingRequestValidation ||
      timeForBookingRequestValidation
    ) {
      return; // Exit if there are validation errors
    }

    // Prepare data for submission
    const data = {
      name: fullName,
      email,
      phone : mobile,
      address,
      city,
      postalCode : postal,
      numberOfGuests,
      DateForBooking : dateForBookingRequest,
      timeForBooking : timeForBookingRequest,
    };

    // Submit data to the server
    try {
      const response = await fetch(`${API_BASE_URL}/api/booking/createBooking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        setServerError("");
        handleRedirect(data.booking);
      } else {
        const data = await response.json();
        setServerError(data.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error)
      setServerError("Something went wrong");
    }

  };

  return (
    <div className="flex flex-col justify-center items-center  bg-cover bg-center h-[100%]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg mt-7 md:mt-20 mb-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Book Now</h2>
        {serverError && (
          <p className="text-red-500 text-center mb-4">{serverError}</p>
        )}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="fname">
              Full Name
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => setFullName(e.target.value)}
            />
            {fullNameError && (
              <p className="text-red-500 text-sm">{fullNameError}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          {/* Phone Number */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="mobile"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="lname"
              name="lname"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => setMobile(e.target.value)}
            />
            {mobileError && (
              <p className="text-red-500 text-sm">{mobileError}</p>
            )}
          </div>
          {/* Address */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              name="Address"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => setAddress(e.target.value)}
            />
            {addressError && (
              <p className="text-red-500 text-sm">{addressError}</p>
            )}
          </div>
          {/* City */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="City"
              name="City"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => setCity(e.target.value)}
            />
            {cityError && <p className="text-red-500 text-sm">{cityError}</p>}
          </div>
          {/* Postal Code */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="postal"
            >
              Postal Code
            </label>
            <input
              type="text"
              id="Postal"
              name="Postal"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => setPostal(e.target.value)}
            />
            {postalError && (
              <p className="text-red-500 text-sm">{postalError}</p>
            )}
          </div>

          {/* numberOfGuests */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="numberOfGuests"
            >
              Number Of Guests
            </label>
            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              className="w-full px-3 py-2 border rounded-md"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
            />
            {numberOfGuestsError && (
              <p className="text-red-500 text-sm">{numberOfGuestsError}</p>
            )}
          </div>

          {/* Date for booking */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="dateForBooking"
            >
              Date For Booking
            </label>
            <input
              type="date"
              id="dateForBooking"
              name="dateForBooking"
              className="w-full px-3 py-2 border rounded-md"
              onClick={fetchAvailableTimeSlots}
              onChange={(e) => setDateForBookingRequest(e.target.value)}
              value={dateForBookingRequest}
            />
            {dateForBookingRequestError && (
              <p className="text-red-500 text-sm">
                {dateForBookingRequestError}
              </p>
            )}
          </div>

          {/* Time for booing */}
          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="timeForBooking"
            >
              Time For Booking.{<span className="ml-[40px] text-sm">(visit {<Link href={'/available'} className="text-red-800 text-lg">slots</Link>} to get available slots.)</span>}
            </label>
            <select
              id="timeForBooking"
              name="timeForBooking"
              className="w-full px-3 py-2 border rounded-md"
              onChange={(e) => setTimeForBookingRequest(e.target.value)}
              onClick={fetchAvailableTimeSlots}
              value={timeForBookingRequest}
            >
              <option value="">Select Time</option>
               {availableTimeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))  
              }
              {/* {console.log(availableTimeSlots)} */}
            </select>
            
            {timeForBookingRequestError && (
              <p className="text-red-500 text-sm">
                {timeForBookingRequestError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gray-800 text-white font-semibold rounded-md"
          >
            Book Now
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          <Link href="/" className="text-gray-600 hover:underline">
            Go back to Homepage?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default booking;

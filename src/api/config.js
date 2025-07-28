import axios from "axios";

// RapidAPI Booking.com configuration
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY || "your-api-key-here";
const RAPIDAPI_HOST = "booking-com15.p.rapidapi.com";

// axios instance for the API
export const rapidApiClient = axios.create({
  baseURL: "https://booking-com15.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": RAPIDAPI_KEY,
    "X-RapidAPI-Host": RAPIDAPI_HOST,
  },
});

// API endpoints
export const API_ENDPOINTS = {
  // for Flights
  FLIGHT_SEARCH: "/api/v1/flights/searchFlights",
  FLIGHT_DETAILS: "/api/v1/flights/getFlightDetails",

  // Hotels
  HOTEL_SEARCH: "/api/v1/hotels/searchHotels",
  HOTEL_DETAILS: "/api/v1/hotels/getHotelDetails",

  // Activities/Attractions
  ACTIVITY_SEARCH: "/api/v1/attractions/searchAttractions",
  ACTIVITY_DETAILS: "/api/v1/attractions/getAttractionDetails",
};


export const handleApiError = (error) => {
  console.error("API Error:", error);
  if (error.response) {
    return error.response.data?.message || "An error occurred";
  }
  return "Network error. Please check your connection.";
};

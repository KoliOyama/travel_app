import React from "react";
import banner from "../../assets/banner.png";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/icons/ArrowLeft.svg";
import calendarIcon from "../../assets/icons/CalendarBlank.svg";
import userPlusIcon from "../../assets/icons/UserPlus.svg";
import gearIcon from "../../assets/icons/GearSix.svg";
import TripCard from "../../components/TripCard";
import Button from "../../components/Button";
import moreIcon from "../../assets/icons/more.svg";
import ItineraryContainer from "../../features/itinerary/ItineraryContainer";

const TripPage = () => {
  const handleAddActivities = () => {
    console.log("Add Activities clicked");
  };

  const handleAddHotels = () => {
    console.log("Add Hotels clicked");
  };

  const handleAddFlights = () => {
    console.log("Add Flights clicked");
  };

  const handleAddUser = () => {
    console.log("Add User clicked");
  };

  return (
    <div className="bg-bgWhite">
      <div className="max-container py-5">
        <div className="flex flex-col gap-5">
          {/* Banner Section */}
          <div className="relative w-full mb-8">
            <img src={banner} alt="banner" className="w-full rounded-lg" />
            <Link className="absolute left-[0.5em] top-[0.5em] p-[0.375em] w-[2.5em] h-[2.5em] rounded-sm bg-bgGray bg-opacity-35">
              <img src={arrowLeft} alt="arrow left" className="" />
            </Link>
          </div>

          {/* Trip Header Section */}
          <div className="flex flex-col gap-[5.625rem]">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                {/* Trip Details */}
                <div className="space-y-3">
                  {/* Date Range */}
                  <div className="flex items-center gap-1 px-3 py-2 bg-secondary100 rounded-md w-fit">
                    <img
                      src={calendarIcon}
                      alt="calendar"
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium text-text-secondary900">
                      21 March 2024 → 21 April 2024
                    </span>
                  </div>

                  {/* Trip Title */}
                  <h1 className="text-h1 font-bold text-text-primary">
                    Bahamas Family Trip
                  </h1>

                  {/* Origin and Trip Type */}
                  <div className="flex items-center">
                    <p className="text-text-secondary text-base">
                      New York, United States of America
                    </p>
                    {/* Vertical bar */}
                    <div class="mx-1 h-5 w-px bg-gray-300"></div>
                    <p className="text-text-secondary text-base">Solo Trip</p>
                  </div>
                </div>

                {/* User Actions */}
                <div className="flex flex-col items-center gap-4">
                  {/* Add User Button */}
                  <div className="flex items-center gap-1">
                    <Button
                      variant="light"
                      size="md"
                      icon={
                        <img
                          src={userPlusIcon}
                          alt="add user"
                          className="w-4 h-4"
                        />
                      }
                      onClick={handleAddUser}
                    />
                    {/* More Options */}
                    <button className="p-2 hover:bg-bgGray rounded-md transition-colors duration-200">
                      <img src={moreIcon} alt="more" className="w-5 h-5" />
                    </button>
                  </div>

                  {/* User Profile */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1551692703-a06c2d31ae51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5pZ2VyaWFuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* horizontal bar */}
                    <div class="h-[1.5px] w-5 bg-border"></div>
                    <button className="p-2 hover:bg-bgGray border-[2px] border-border rounded-full transition-colors duration-200">
                      <img src={gearIcon} alt="settings" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Trip Planning Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                <TripCard
                  title="Activities"
                  description="Build, personalize, and optimize your Itineraries with our trip planner."
                  buttonText="Add Activities"
                  backgroundColor="bg-primary1100"
                  textColor="text-white"
                  buttonVariant="primary"
                  onClick={handleAddActivities}
                />

                <TripCard
                  title="Hotels"
                  description="Build, personalize, and optimize your Itineraries with our trip planner."
                  buttonText="Add Hotels"
                  backgroundColor="bg-bgGray"
                  textColor="text-text-primary"
                  buttonVariant="primary"
                  onClick={handleAddHotels}
                />

                <TripCard
                  title="Flights"
                  description="Build, personalize, and optimize your Itineraries with our trip planner."
                  buttonText="Add Flights"
                  backgroundColor="bg-primary"
                  textColor="text-white"
                  buttonVariant="secondary"
                  onClick={handleAddFlights}
                />
              </div>
            </div>

            {/* Trip Itineraries Section */}
            <div className="">
              <div className="mb-6">
                <h2 className="text-h2 text-text-primary">Trip itineraries</h2>
                <p className="text-text-secondary text-base">
                  Manage and organize your trip details
                </p>
              </div>
              <ItineraryContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPage;

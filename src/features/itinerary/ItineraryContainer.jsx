import React from "react";
import ItinerarySection from "./ItinerarySection";
import flightsIcon from "../../assets/icons/AirplaneInFlight.svg";
import hotelsIcon from "../../assets/icons/Warehouse.svg";
import activitiesIcon from "../../assets/icons/RoadHorizon.svg";

const ItineraryContainer = () => {
  const handleAddFlight = () => {
    console.log("Add Flight clicked");
  };

  const handleAddHotel = () => {
    console.log("Add Hotel clicked");
  };

  const handleAddActivity = () => {
    console.log("Add Activity clicked");
  };

  return (
    <div className="space-y-4">
      {/* Flights Section */}
      <ItinerarySection
        title="Flights"
        icon={flightsIcon}
        headerBgColor="bg-bgGray"
        headerTextColor="text-text-primary"
        emptyStateIcon={flightsIcon}
        onAddClick={handleAddFlight}
      />

      {/* Hotels Section */}
      <ItinerarySection
        title="Hotels"
        icon={hotelsIcon}
        headerBgColor="bg-neutral900"
        headerTextColor="text-white"
        emptyStateIcon={hotelsIcon}
        onAddClick={handleAddHotel}
      />

      {/* Activities Section */}
      <ItinerarySection
        title="Activities"
        icon={activitiesIcon}
        headerBgColor="bg-primary"
        headerTextColor="text-white"
        emptyStateIcon={activitiesIcon}
        onAddClick={handleAddActivity}
      />
    </div>
  );
};

export default ItineraryContainer;

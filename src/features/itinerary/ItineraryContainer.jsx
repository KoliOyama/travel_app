import React from "react";
import ItinerarySection from "./ItinerarySection";
import flightsIcon from "../../assets/icons/AirplaneInFlight.svg";
import hotelsIcon1 from "../../assets/icons/Bed.svg";
import hotelsIcon2 from "../../assets/icons/Warehouse.svg";
import activitiesIcon1 from "../../assets/icons/RoadHorizon.svg";
import activitiesIcon2 from "../../assets/icons/RoadHorizonWhite.svg";

const ItineraryContainer = ({ onAddFlight, onAddHotel, onAddActivity }) => {
  return (
    <>
      <div className="space-y-4">
        {/* Flights Section */}
        <ItinerarySection
          title="Flights"
          icon={flightsIcon}
          headerBgColor="bg-bgGray"
          headerTextColor="text-text-primary"
          emptyStateIcon={flightsIcon}
          onAddClick={onAddFlight}
        />

        {/* Hotels Section */}
        <ItinerarySection
          title="Hotels"
          icon={hotelsIcon2}
          headerBgColor="bg-neutral900"
          headerTextColor="text-white"
          emptyStateIcon={hotelsIcon1}
          onAddClick={onAddHotel}
        />

        {/* Activities Section */}
        <ItinerarySection
          title="Activities"
          icon={activitiesIcon2}
          headerBgColor="bg-primary"
          headerTextColor="text-white"
          emptyStateIcon={activitiesIcon1}
          onAddClick={onAddActivity}
        />
      </div>
    </>
  );
};

export default ItineraryContainer;

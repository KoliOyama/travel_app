import React, { useState } from "react";
import Modal from "../../components/Modal";
import SearchInput from "../../components/SearchInput";
import Button from "../../components/Button";
import AirplaneInFlight from "../../assets/icons/AirplaneInFlight.svg";
import CalendarBlank from "../../assets/icons/CalendarBlank.svg";

const FlightSearchModal = ({ isOpen, onClose, onFlightSelect }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  // Mock flight data - replace with API call
  const mockFlights = [
    {
      id: 1,
      airline: "American Airlines",
      from: "Lagos (LOS)",
      to: "London (LHR)",
      date: "2024-08-20",
      time: "08:35",
      duration: "6h 45m",
      price: "₦ 123,450.00",
      image: AirplaneInFlight,
      flightNumber: "AA 101",
    },
    {
      id: 2,
      airline: "British Airways",
      from: "Lagos (LOS)",
      to: "New York (JFK)",
      date: "2024-08-22",
      time: "09:00",
      duration: "10h 10m",
      price: "₦ 210,000.00",
      image: AirplaneInFlight,
      flightNumber: "BA 202",
    },
    {
      id: 3,
      airline: "Delta Airlines",
      from: "Lagos (LOS)",
      to: "Atlanta (ATL)",
      date: "2024-08-25",
      time: "07:45",
      duration: "11h 00m",
      price: "₦ 180,000.00",
      image: AirplaneInFlight,
      flightNumber: "DL 303",
    },
  ];

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filtered = mockFlights.filter(
      (flight) =>
        flight.airline.toLowerCase().includes(query.toLowerCase()) ||
        flight.from.toLowerCase().includes(query.toLowerCase()) ||
        flight.to.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
  };

  const handleAddFlight = () => {
    if (selectedFlight && onFlightSelect) {
      onFlightSelect(selectedFlight);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add a flight"
      subtitle="Search and add a flight to your trip"
      className="w-full md:max-w-md"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="relative">
            <SearchInput
              placeholder="Search flights..."
              onSearch={handleSearch}
              suggestions={suggestions.map((flight) => ({
                ...flight,
                name: `${flight.airline} (${flight.flightNumber})`,
                location: `${flight.from} → ${flight.to}`,
                type: flight.date,
                typeIcon: CalendarBlank,
                address: `${flight.time} | ${flight.duration}`,
                addressIcon: AirplaneInFlight,
              }))}
              onSuggestionSelect={handleFlightSelect}
            />
          </div>
          {selectedFlight && (
            <div className="bg-light p-4 rounded-lg border border-primary">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedFlight.image}
                  alt={selectedFlight.airline}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-1 text-xs bg-primary text-white rounded">
                      {selectedFlight.from} → {selectedFlight.to}
                    </span>
                  </div>
                  <h4 className="font-medium text-text-primary">
                    {selectedFlight.airline} ({selectedFlight.flightNumber})
                  </h4>
                  <div className="flex items-center space-x-1 mt-1">
                    <img src={CalendarBlank} alt="date" className="w-3 h-3" />
                    <span className="text-xs text-text-secondary">
                      {selectedFlight.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <img
                      src={AirplaneInFlight}
                      alt="time"
                      className="w-3 h-3"
                    />
                    <span className="text-xs text-text-secondary">
                      {selectedFlight.time} | {selectedFlight.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="text-xs text-success font-semibold">
                      {selectedFlight.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-shrink-0 p-6 border-t border-border bg-white">
          <Button
            label="Add to itinerary"
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleAddFlight}
            disabled={!selectedFlight}
          />
        </div>
      </div>
    </Modal>
  );
};

export default FlightSearchModal;

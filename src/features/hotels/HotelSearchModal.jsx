import React, { useState } from "react";
import Modal from "../../components/Modal";
import SearchInput from "../../components/SearchInput";
import Button from "../../components/Button";
import MapPin from "../../assets/icons/MapPin.svg";
import Bed from "../../assets/icons/Bed.svg";
import Star from "../../assets/icons/Star.svg";

const HotelSearchModal = ({ isOpen, onClose, onHotelSelect }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  // Mock hotel data - replace with API call
  const mockHotels = [
    {
      id: 1,
      name: "The New Yorker Hotel By Lotte Hotels",
      location: "New York City",
      rating: 3.9,
      reviews: 16901,
      type: "4-star hotel",
      address: "481 8th Avenue & 34th Street",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      typeIcon: Bed,
      addressIcon: MapPin,
    },
    {
      id: 2,
      name: "New York Hilton Midtown",
      location: "New York City",
      rating: 3.7,
      reviews: 15131,
      type: "4-star hotel",
      address: "1335 Avenue of the Americas",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      typeIcon: Bed,
      addressIcon: MapPin,
    },
    {
      id: 3,
      name: "The Roosevelt New Orleans, A Waldorf Astoria Hotel",
      location: "New Orleans",
      rating: 4.4,
      reviews: 5492,
      type: "5-star hotel",
      address: "130 Roosevelt Way",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      typeIcon: Bed,
      addressIcon: MapPin,
    },
  ];

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    // Filter hotels based on search query
    const filtered = mockHotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(query.toLowerCase()) ||
        hotel.location.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleAddHotel = () => {
    if (selectedHotel && onHotelSelect) {
      onHotelSelect(selectedHotel);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add a place to stay"
      subtitle="Select from your saves or search and add new ones to your trip"
      className="w-full md:max-w-md"
    >
      <div className="flex flex-col h-full">
        {/* Search and Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Search Input */}
          <div className="relative">
            <SearchInput
              placeholder="Search hotels..."
              onSearch={handleSearch}
              suggestions={suggestions}
              onSuggestionSelect={handleHotelSelect}
            />
          </div>

          {/* Selected Hotel Display */}
          {selectedHotel && (
            <div className="bg-light p-4 rounded-lg border border-primary">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedHotel.image}
                  alt={selectedHotel.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-1 text-xs bg-primary text-white rounded">
                      {selectedHotel.location}
                    </span>
                  </div>
                  <h4 className="font-medium text-text-primary">
                    {selectedHotel.name}
                  </h4>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="text-sm text-text-secondary">
                      {selectedHotel.rating}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src={Star}
                          alt="star"
                          className={`w-3 h-3 ${
                            i < Math.floor(selectedHotel.rating)
                              ? "text-success"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-text-secondary">
                      ({selectedHotel.reviews})
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <img
                      src={selectedHotel.typeIcon}
                      alt=""
                      className="w-3 h-3"
                    />
                    <span className="text-xs text-text-secondary">
                      {selectedHotel.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <img
                      src={selectedHotel.addressIcon}
                      alt=""
                      className="w-3 h-3"
                    />
                    <span className="text-xs text-text-secondary">
                      {selectedHotel.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Button - Fixed at bottom */}
        <div className="flex-shrink-0 p-6 border-t border-border bg-white">
          <Button
            label="Add to itinerary"
            variant="primary"
            size="lg"
            fullWidth
            onClick={handleAddHotel}
            disabled={!selectedHotel}
          />
        </div>
      </div>
    </Modal>
  );
};

export default HotelSearchModal;

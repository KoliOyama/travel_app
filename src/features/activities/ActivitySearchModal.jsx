import React, { useState } from "react";
import Modal from "../../components/Modal";
import SearchInput from "../../components/SearchInput";
import Button from "../../components/Button";
import FilmSlate from "../../assets/icons/FilmSlate.svg";
import CalendarBlank from "../../assets/icons/CalendarBlank.svg";

const ActivitySearchModal = ({ isOpen, onClose, onActivitySelect }) => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  // Mock activity data - replace with API call
  const mockActivities = [
    {
      id: 1,
      title: "The Museum of Modern Art",
      location: "New York",
      date: "2024-08-21",
      time: "10:30 AM",
      description:
        "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & the modern restaurant.",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop",
      type: "Museum",
      typeIcon: FilmSlate,
      address: "11 W 53rd St, New York, NY",
      addressIcon: CalendarBlank,
    },
    {
      id: 2,
      title: "Empire State Building",
      location: "New York",
      date: "2024-08-22",
      time: "12:00 PM",
      description: "102-story Art Deco skyscraper in Midtown Manhattan.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      type: "Landmark",
      typeIcon: FilmSlate,
      address: "20 W 34th St, New York, NY",
      addressIcon: CalendarBlank,
    },
    {
      id: 3,
      title: "Central Park Zoo",
      location: "New York",
      date: "2024-08-23",
      time: "09:00 AM",
      description:
        "Compact zoo with penguins, sea lions, monkeys & a petting zoo.",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
      type: "Zoo",
      typeIcon: FilmSlate,
      address: "East 64th St, New York, NY",
      addressIcon: CalendarBlank,
    },
  ];

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    const filtered = mockActivities.filter(
      (activity) =>
        activity.title.toLowerCase().includes(query.toLowerCase()) ||
        activity.location.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
  };

  const handleAddActivity = () => {
    if (selectedActivity && onActivitySelect) {
      onActivitySelect(selectedActivity);
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create activities"
      subtitle="Search and add an activity to your trip"
      className="w-full md:max-w-md"
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="relative">
            <SearchInput
              placeholder="Search activities..."
              onSearch={handleSearch}
              suggestions={suggestions.map((activity) => ({
                ...activity,
                name: activity.title,
                location: activity.location,
                type: activity.date,
                typeIcon: CalendarBlank,
                address: `${activity.time} | ${activity.type}`,
                addressIcon: FilmSlate,
              }))}
              onSuggestionSelect={handleActivitySelect}
            />
          </div>
          {selectedActivity && (
            <div className="bg-light p-4 rounded-lg border border-primary">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-1 text-xs bg-primary text-white rounded">
                      {selectedActivity.location}
                    </span>
                  </div>
                  <h4 className="font-medium text-text-primary">
                    {selectedActivity.title}
                  </h4>
                  <div className="flex items-center space-x-1 mt-1">
                    <img src={CalendarBlank} alt="date" className="w-3 h-3" />
                    <span className="text-xs text-text-secondary">
                      {selectedActivity.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <img src={FilmSlate} alt="time" className="w-3 h-3" />
                    <span className="text-xs text-text-secondary">
                      {selectedActivity.time} | {selectedActivity.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="text-xs text-text-secondary">
                      {selectedActivity.address}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="text-xs text-text-secondary">
                      {selectedActivity.description}
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
            onClick={handleAddActivity}
            disabled={!selectedActivity}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ActivitySearchModal;

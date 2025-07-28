import React, { useState } from "react";
import MagnifyingGlass from "../assets/icons/MagnifyingGlass.svg";

const SearchInput = ({
  placeholder = "Search...",
  onSearch,
  suggestions = [],
  onSuggestionSelect,
  className = "",
}) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.length > 0);

    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name || suggestion.title);
    setShowSuggestions(false);
    if (onSuggestionSelect) {
      onSuggestionSelect(suggestion);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setShowSuggestions(false);
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(query.length > 0)}
          placeholder={placeholder}
          className="w-full h-12 px-4 pl-12 pr-10 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />

        {/* Search Icon */}
        <img
          src={MagnifyingGlass}
          alt="search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary"
        />

        {/* Clear Button */}
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-bgGray rounded"
          >
            <svg
              className="w-4 h-4 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 text-left hover:bg-bgGray transition-colors duration-150 border-b border-border last:border-b-0"
            >
              <div className="flex items-center space-x-3">
                {suggestion.image && (
                  <img
                    src={suggestion.image}
                    alt={suggestion.name || suggestion.title}
                    className="w-12 h-12 rounded object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    {suggestion.location && (
                      <span className="px-2 py-1 text-xs bg-light text-primary rounded">
                        {suggestion.location}
                      </span>
                    )}
                  </div>
                  <h4 className="font-medium text-text-primary mt-1">
                    {suggestion.name || suggestion.title}
                  </h4>
                  {suggestion.rating && (
                    <div className="flex items-center space-x-1 mt-1">
                      <span className="text-sm text-text-secondary">
                        {suggestion.rating}
                      </span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(suggestion.rating)
                                ? "text-success"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      {suggestion.reviews && (
                        <span className="text-xs text-text-secondary">
                          ({suggestion.reviews})
                        </span>
                      )}
                    </div>
                  )}
                  {suggestion.type && (
                    <div className="flex items-center space-x-1 mt-1">
                      <img
                        src={suggestion.typeIcon}
                        alt=""
                        className="w-3 h-3"
                      />
                      <span className="text-xs text-text-secondary">
                        {suggestion.type}
                      </span>
                    </div>
                  )}
                  {suggestion.address && (
                    <div className="flex items-center space-x-1 mt-1">
                      <img
                        src={suggestion.addressIcon}
                        alt=""
                        className="w-3 h-3"
                      />
                      <span className="text-xs text-text-secondary">
                        {suggestion.address}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;

import React from "react";

const SIZE_MAP = {
  sm: "w-4 h-4 border-2",
  md: "w-5 h-5 border-2",
  lg: "w-6 h-6 border-4",
};

const Loader = ({ size = "md", className = "" }) => (
  <span
    className={`inline-block animate-spin rounded-full border-t-2 border-b-2 border-primary border-solid ${
      SIZE_MAP[size] || SIZE_MAP.md
    } ${className}`}
    role="status"
    aria-label="Loading"
  />
);

export default Loader;

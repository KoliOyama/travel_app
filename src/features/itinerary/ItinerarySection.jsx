import React from "react";
import Button from "../../components/Button";

const ItinerarySection = ({
  title,
  icon,
  headerBgColor,
  headerTextColor,
  emptyStateIcon,
  onAddClick,
}) => {
  return (
    <div className="rounded-[0.25rem] overflow-hidden">
      {/* Header */}
      <div className={`px-6 py-3 ${headerBgColor}`}>
        <div className="flex items-center gap-2">
          <img src={icon} alt={title} className="w-4 h-4" />
          <span className={`text-sm font-medium ${headerTextColor}`}>
            {title}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className={`px-6 pb-[3.25rem] ${headerBgColor}`}>
        <div className="flex flex-col items-center justify-center bg-white rounded-sm py-8">
          {/* Empty State Icon */}
          <div className="mb-4">
            <img
              src={emptyStateIcon}
              alt={`No ${title} yet`}
              className="w-16 h-16 opacity-40"
            />
          </div>

          {/* Empty State Text */}
          <p className="text-text-secondary text-sm mb-4">No Request yet</p>

          {/* Add Button */}
          <Button
            label={`Add ${title}`}
            variant="primary"
            size="md"
            onClick={onAddClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ItinerarySection;

import React from "react";
import Button from "./Button";

const TripCard = ({
  title,
  description,
  buttonText,
  backgroundColor,
  textColor,
  buttonVariant = "primary",
  onClick,
}) => {
  return (
    <div
      className={`px-[0.875rem] py-[1.125rem] rounded-lg flex flex-col justify-between gap-[2.375rem] ${backgroundColor}`}
    >
      <div>
        <h3 className={`text-bodyB2 mb-3 ${textColor}`}>{title}</h3>
        <p className={`text-sm leading-relaxed ${textColor}`}>{description}</p>
      </div>

      <Button
        label={buttonText}
        variant={buttonVariant}
        size="md"
        fullWidth={true}
        onClick={onClick}
        className="w-full"
      />
    </div>
  );
};

export default TripCard;

import React from "react";

export const Tile = ({ name, description }) => {
  const descriptionValues = Object.values(description);

  return (
    <div className="tile-container">
      <p className="tile-title" >{name}</p>
      {descriptionValues.map((value, index) => (
        <p key={index} className="tile" >{value}</p>
      ))}
    </div>
  );
};

import React from "react";

export const Tile = ({ tile }) => {
  const values = Object.values(tile);
  return (
    <div className="tile-container">
      {values.map((value, index) => {
        if (index === 0) {
          return (
            <p key={index} className="tile-title">
              {value}
            </p>
          );
        } else {
          return (
            <p key={index} className="title">
              {value}
            </p>
          );
        }
      })}
    </div>
  );
};

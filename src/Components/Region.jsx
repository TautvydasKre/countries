/** @format */

import React from "react";

const Region = ({ selectedRegion, handleRegionChange }) => {
  return (
    <div className="filter">
      <p>Filter by Region:</p>
      <div className="region-buttons">
        {["All", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
          (region) => (
            <button
              key={region}
              className={`region-button ${
                selectedRegion === region ? "active" : ""
              }`}
              onClick={() => handleRegionChange(region)}
            >
              {region}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Region;

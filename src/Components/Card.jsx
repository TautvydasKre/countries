/** @format */

import React from "react";

const Card = ({ country, handleMoreButtonClick }) => {
  return (
    <div className={`country-card card ${country.region.toLowerCase()}`}>
      <img
        src={country.flags.png}
        alt={`Flag ${country.name.common}`}
        className="flag-image"
      />
      <div className="country-details">
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Region: {country.region}</p>
        <button onClick={() => handleMoreButtonClick(country)}>More</button>
      </div>
    </div>
  );
};

export default Card;

/** @format */

import React from "react";

const Modal = ({ modalOpen, closeModal, selectedCountry }) => {
  return (
    modalOpen &&
    selectedCountry && (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedCountry.flags.png}
              alt="Flag"
              className="modal-flag"
            />
            <h2>{selectedCountry.name.common}</h2>
            <p>Capital: {selectedCountry.capital}</p>
            <p>Region: {selectedCountry.region}</p>
            <p>Population: {selectedCountry.population}</p>
            <p>Area: {selectedCountry.area} km²</p>
            <p>
              Currency:{" "}
              {selectedCountry.currencies
                ? Object.values(selectedCountry.currencies)
                    .map((currency) => currency.name)
                    .join(", ")
                : ""}
            </p>
            <p>
              Languages:{" "}
              {selectedCountry.languages
                ? Object.values(selectedCountry.languages).join(", ")
                : ""}
            </p>
            <p>
              Neighboring Countries:{" "}
              {selectedCountry.borders
                ? selectedCountry.borders.join(", ")
                : ""}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

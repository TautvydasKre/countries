/** @format */

import React, { useState, useEffect } from "react";
import getAllCountriesInfo from "../Services/CountriesService";
import Card from "./Card";
import Region from "./Region";
import Search from "./Search";
import Modal from "./Modal";
import "../styles.css";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesData = await getAllCountriesInfo();
        setCountries(countriesData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = countries;

    if (selectedRegion !== "All") {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    if (searchInput.trim() !== "") {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  }, [selectedRegion, countries, searchInput]);

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleMoreButtonClick = (country) => {
    setSelectedCountry(country);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="main-menu">
      <Region
        selectedRegion={selectedRegion}
        handleRegionChange={handleRegionChange}
      />
      <Search
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && (
        <div className="flags">
          {filteredCountries.map((country, index) => (
            <Card
              key={index}
              country={country}
              handleMoreButtonClick={handleMoreButtonClick}
            />
          ))}
        </div>
      )}
      <Modal
        modalOpen={modalOpen}
        closeModal={closeModal}
        selectedCountry={selectedCountry}
      />
    </div>
  );
};

export default Main;

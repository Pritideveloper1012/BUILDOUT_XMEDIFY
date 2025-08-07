import React, { useEffect, useState } from "react";
import { fetchStates, fetchCities } from "../../Utils/Api";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStates().then(setStates);
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState).then(setCities);
    }
  }, [selectedState]);

  const handleSearch = () => {
    if (selectedState && selectedCity) {
      setLoading(true);
      setTimeout(() => {
        navigate(`/search?state=${selectedState}&city=${selectedCity}`);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <div className="p-4 shadow rounded bg-white" style={{ margin: "0 auto" }}>
       
        <div className="row g-3 align-items-center" id="search-controls">
          {/* State Dropdown */}
          <div className="col-md-5" id="state">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-geo-alt"></i>
              </span>
              <select
                className="form-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state}>{state}</option>
                ))}
              </select>
            </div>
          </div>

          {/* City Dropdown */}
          <div className="col-md-5" id="city">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-building"></i>
              </span>
              <select
                className="form-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                disabled={!selectedState}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="col-md-2 d-grid">
            <button
              id="searchBtn"
              className="btn btn-primary"
              type="submit"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : (
                <>
                  <i className="bi bi-search me-1"></i> Search
                </>
              )}
            </button>
          </div>
        </div>
        {/* 👆 All Inputs in one row div */}
      </div>
    </div>
  );
};

export default SearchBar;

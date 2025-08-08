import React, { useEffect, useState, useRef } from "react";
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

  // Dropdown open/close state
  const [stateOpen, setStateOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const stateRef = useRef(null);
  const cityRef = useRef(null);

  useEffect(() => {
    fetchStates().then(setStates);
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState).then(setCities);
      setSelectedCity("");
    } else {
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedState]);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (stateRef.current && !stateRef.current.contains(event.target)) {
        setStateOpen(false);
      }
      if (cityRef.current && !cityRef.current.contains(event.target)) {
        setCityOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedState && selectedCity) {
      setLoading(true);
      setTimeout(() => {
        navigate(`/search?state=${selectedState}&city=${selectedCity}`);
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div className="container">
      <form
        className="p-4 shadow rounded bg-white"
        style={{ margin: "0 auto" }}
        onSubmit={handleSearch}
      >
        <div className="row g-3 align-items-center" id="search-controls">
          {/* State Dropdown */}
          <div
            className="col-md-5"
            id="state"
            ref={stateRef}
            style={{ position: "relative" }}
          >
            <div
              className="input-group"
              onClick={() => setStateOpen((prev) => !prev)}
              style={{ cursor: "pointer" }}
              tabIndex={0}
            >
              <span className="input-group-text">
                <i className="bi bi-geo-alt"></i>
              </span>
              <input
                type="text"
                className="form-control"
                readOnly
                value={selectedState || "Select State"}
                aria-haspopup="listbox"
                aria-expanded={stateOpen}
              />
            </div>
            {stateOpen && (
              <ul
                className="list-group position-absolute w-100"
                style={{ maxHeight: "150px", overflowY: "auto", zIndex: 1000 }}
                role="listbox"
              >
                {states.map((state) => (
                  <li
                    key={state}
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                      setSelectedState(state);
                      setStateOpen(false);
                    }}
                    role="option"
                    aria-selected={selectedState === state}
                    tabIndex={-1}
                  >
                    {state}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* City Dropdown */}
          <div
            className="col-md-5"
            id="city"
            ref={cityRef}
            style={{ position: "relative" }}
          >
            <div
              className="input-group"
              onClick={() => {
                if (selectedState) setCityOpen((prev) => !prev);
              }}
              style={{ cursor: selectedState ? "pointer" : "not-allowed" }}
              tabIndex={0}
            >
              <span className="input-group-text">
                <i className="bi bi-geo-alt"></i>
              </span>
              <input
                type="text"
                className="form-control"
                readOnly
                value={selectedCity || "Select City"}
                aria-haspopup="listbox"
                aria-expanded={cityOpen}
                disabled={!selectedState}
              />
            </div>
            {cityOpen && (
              <ul
                className="list-group position-absolute w-100"
                style={{ maxHeight: "150px", overflowY: "auto", zIndex: 1000 }}
                role="listbox"
              >
                {cities.map((city) => (
                  <li
                    key={city}
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                      setSelectedCity(city);
                      setCityOpen(false);
                    }}
                    role="option"
                    aria-selected={selectedCity === city}
                    tabIndex={-1}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <div className="col-md-2 d-grid">
            <button
              id="searchBtn"
              className="btn btn-primary"
              type="submit"
              disabled={loading || !selectedState || !selectedCity}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

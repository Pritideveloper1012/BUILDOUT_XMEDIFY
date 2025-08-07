import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing images
import doctorImg from "../../assets/Doctor.jpg";
import labImg from "../../assets/Drugstore.jpg";
import hospitalImg from "../../assets/Hospital.jpg";
import storeImg from "../../assets/Capsule.jpg";
import ambulanceImg from "../../assets/Ambulance.jpg";

const SearchBar = ({ onSearch }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loading, setLoading] = useState(false);

  const services = [
    { img: doctorImg, label: "Doctors" },
    { img: labImg, label: "Labs" },
    { img: hospitalImg, label: "Hospitals", active: true },
    { img: storeImg, label: "Medical Store" },
    { img: ambulanceImg, label: "Ambulance" },
  ];

  // Fetch states on load
  useEffect(() => {
    axios.get("https://meddata-backend.onrender.com/states")
      .then(res => setStates(res.data))
      .catch(err => console.error("Error fetching states:", err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (selectedState) {
      axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then(res => setCities(res.data))
        .catch(err => console.error("Error fetching cities:", err));
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleSearch = async () => {
    if (!selectedState || !selectedCity) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
      );
      if (onSearch) {
        onSearch(res.data, selectedCity); // Pass data to parent
      }
    } catch (err) {
      console.error("Error fetching hospitals:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div
        className="p-4 shadow rounded bg-white"
        style={{ margin: "0 auto" }}
      >
        {/* Search Inputs */}
        <div className="row g-3 align-items-center">
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
                {states.map((state, i) => (
                  <option key={i} value={state}>{state}</option>
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
              >
                <option value="">Select City</option>
                {cities.map((city, i) => (
                  <option key={i} value={city}>{city}</option>
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
              {loading ? "Searching..." : <><i className="bi bi-search me-1"></i> Search</>}
            </button>
          </div>
        </div>

        {/* Services */}
        <div className="text-center mt-5">
          <h5 className="mb-4 fw-semibold">You may be looking for</h5>
          <div className="row justify-content-center g-4">
            {services.map((item, idx) => (
              <div key={idx} className="col-6 col-sm-4 col-md-2">
                <div
                  className={`p-3 rounded text-center shadow-sm ${
                    item.active ? "border-primary border-2 border" : "border"
                  }`}
                  style={{ cursor: "pointer", backgroundColor: "#F8FAFF" }}
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <div className="mt-2 fw-medium">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

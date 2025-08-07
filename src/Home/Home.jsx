import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/hero_image.png";
import SearchBar from "../Components/SearchBar/SearchBar";

const Home = () => {
  return (
   
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #E7F0FF, #E8F1FF78)",
        minHeight: "100vh",
      }}
    >
       
      <div className="container">
        <div className="row align-items-right">
          {/* Left side: Text content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="fw-bold mb-3" style={{ fontSize: "2.8rem" }}>
              Skip the travel! <br />
              Find Online <br />
              Medical Centers
            </h1>
            <p className="mb-4" style={{ fontSize: "1.2rem", color: "#555" }}>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button className="btn btn-primary px-4 py-2">
              Find Center
            </button>
          </div>

          {/* Right side: Image */}
          <div className="col-md-6 text-center">
            <img
              src={heroImage}
              alt="Medical Center"
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Home;

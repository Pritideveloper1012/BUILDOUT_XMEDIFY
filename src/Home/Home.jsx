import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../assets/hero_image.png";
import SearchBar from "../Components/SearchBar/SearchBar";
import HeroSlider from "../Components/HeroSlider/HeroSlider";

// Importing images
import doctorImg from "../assets/Doctor.jpg";
import labImg from "../assets/Drugstore.jpg";
import hospitalImg from "../assets/Hospital.jpg";
import storeImg from "../assets/Capsule.jpg";
import ambulanceImg from "../assets/Ambulance.jpg";

const services = [
  { img: doctorImg, label: "Doctors" },
  { img: labImg, label: "Labs" },
  { img: hospitalImg, label: "Hospitals", active: true },
  { img: storeImg, label: "Medical Store" },
  { img: ambulanceImg, label: "Ambulance" },
];

const Home = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{
          background: "linear-gradient(135deg, #E7F0FF, #E8F1FF78)",
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
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </p>
              <button className="btn btn-primary px-4 py-2">Find Center</button>
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

       
        {/* Services Section: Unified div with Search + Title + Services */}
        <div className="container mt-8 ">
          <div className="p-4 shadow rounded bg-white">
            {/*  SearchBar is now grouped inside this services block */}
            <SearchBar />

            {/* Title */}
            <h5 className="text-center mt-5 mb-4 fw-semibold">
              You may be looking for
            </h5>

            {/* Services Icons */}
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
        {/* Now HeroSlider directly below, inside same container */}
          <div className="pt-4">
            <HeroSlider />
          </div>
      </div>
     
    </>
  );
};

export default Home;

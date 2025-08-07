import React from "react";
import SmsForm from "./SmsForm";

// Assets
import mobileImage from "../../../assets/mobile.jpg";
import downArrow from "../../../assets/down-arr.png";
import googlePlay from "../../../assets/google-play.png";
import appStore from "../../../assets/apple_store.png";

const DownloadApp = () => {
  return (
    <div className="bg-light py-5" style={{
          background: "linear-gradient(135deg, #E7F0FF, #E8F1FF78)",
        }}>
      <div className="container">
        <div className="row align-items-center">

          {/* Left Column: Mobile Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={mobileImage}
              alt="Medify Mobile App"
              className="img-fluid"
              style={{ maxWidth: "600px" }}
            />
             <img
              src={downArrow}
              alt="Down Arrow"
              className="mb-4"
              style={{ width: "36px", height: "36px" }}
            />
          </div>

          {/* Right Column: Text, Form, Store Links */}
          <div className="col-md-6">
            <h2 className="h4 fw-bold mb-2">Download the Medify App</h2>
            <p className="text-muted mb-3">
              Get the link to download the app via SMS
            </p>

           

            {/* SMS Form */}
            <SmsForm />

            {/* App Store Buttons */}
            <div className="d-flex gap-3 mt-4">
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={googlePlay}
                  alt="Download on Google Play"
                  className="img-fluid"
                  style={{ maxWidth: "130px" }}
                />
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  className="img-fluid"
                  style={{ maxWidth: "130px" }}
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
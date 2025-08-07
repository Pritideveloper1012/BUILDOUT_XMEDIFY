import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterestP } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterLink from "./FooterLink";


const Footer = () => {
  const columnLinks = [
    ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
    ["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"],
    ["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"]
  ];

  return (
    <footer className="text-white pt-5 pb-3" style={{
      background:"#1B3C74"
    }}>
      <div className="container">
        <div className="row">
          {/* Logo & Social Icons */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">
              <i className="bi bi-shield-fill-check me-2"></i> Medify
            </h5>
            <div className="d-flex gap-3">
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
              <FaPinterestP />
            </div>
          </div>

          {/* Link Columns */}
          <div className="col-md-9">
            <div className="row">
              {columnLinks.map((links, idx) => (
                <div className="col-6 col-md-4 mb-3" key={idx}>
                  <FooterLink links={links} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <div className="text-center small">
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

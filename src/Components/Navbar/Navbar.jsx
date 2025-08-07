import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from '../../assets/logo.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-md  ">
    <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" className={styles.logo} width="80" height="80" />
      </Link>

      {/* Toggle button for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible nav links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Find Doctors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Hospitals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Medicines</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Surgeries</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Software for provider</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Facilities</Link>
          </li>
         <Link
            className="btn text-white ms-2"
            to="/my-bookings"
            style={{ backgroundColor: "#2AA8FF" }}
            >
            My Bookings
            </Link>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
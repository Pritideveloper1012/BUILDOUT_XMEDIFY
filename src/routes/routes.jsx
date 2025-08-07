// routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Search from "../Search/Search";
import Home from "../Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import MyBookings from "../MyBookings/MyBookings";
import Footer from "../Components/Footer/Footer";


const AppRoutes = () => (
  <Router>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      {/* <Route path="/booking" element={<BookingPage />} /> */}
      <Route path="/my-bookings" element={<MyBookings />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;
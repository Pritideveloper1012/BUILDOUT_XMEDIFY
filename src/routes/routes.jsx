// routes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


// import SearchResultsPage from "./pages/SearchResultsPage";
// import BookingPage from "./pages/BookingPage";
// import MyBookingsPage from "./pages/MyBookingsPage";


const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/my-bookings" element={<MyBookingsPage />} /> */}
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;
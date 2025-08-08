import React from "react";

const MyBookings = () => {
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  return (
    <div className="container my-4">
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b, i) => {
          // Extract hospital info and booking date/time, support both nested and flat format
          const center = b.center || b; // if nested, use center; else fallback to flat booking object
          const bookingDate = b.date || b.bookingDate || "N/A";
          const bookingTime = b.time || b.bookingTime || "N/A";

          return (
            <div key={i} className="border p-3 mb-3 rounded">
              <h3>{center["Hospital Name"] || "Unknown Hospital"}</h3>
              <p>
                {center.Address || "No address"},{" "}
                {center.City || "Unknown city"},{" "}
                {center.State || "Unknown state"}
              </p>
              <p><strong>Date:</strong> {bookingDate}</p>
              <p><strong>Time:</strong> {bookingTime}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyBookings;

import React from "react";

const MyBookings = () => {
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  return (
    <div className="container my-4">
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b, i) => (
          <div key={i} className="border p-3 mb-3 rounded">
            <h3>{b["Hospital Name"] || "Unknown Hospital"}</h3>
            <p>
              {b.Address || "No address"},{" "}
              {b.City || "Unknown city"},{" "}
              {b.State || "Unknown state"}
            </p>
            <p><strong>Date:</strong> {b.bookingDate || "N/A"}</p>
            <p><strong>Time:</strong> {b.bookingTime || "N/A"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBookings;

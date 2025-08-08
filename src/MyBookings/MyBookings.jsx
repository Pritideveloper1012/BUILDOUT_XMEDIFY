import React from "react";
import { ListGroup } from "react-bootstrap";

const formatDate = (dateStr) => {
 if (!dateStr) return "N/A";
 const options = { year: "numeric", month: "long", day: "numeric" };
const d = new Date(dateStr);
 return d.toLocaleDateString(undefined, options);
};

function MyBookings() {
  const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");

  return (
    <div className="container my-4">
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ListGroup>
          {bookings.map((b, i) => {
            const center = b.center || b;
            const bookingDate = formatDate(b.bookingDate || b.date);
            const bookingTime = b.bookingTime || b.time || "N/A";

            return (
              <ListGroup.Item key={i} className="mb-3">
                <h3>{center["Hospital Name"] || center.name || "Unknown Hospital"}</h3>
                <p>
                  {center.Address || "No address"},{" "}
                  {center.City || "Unknown city"},{" "}
                  {center.State || "Unknown state"}
                </p>
                <p>
                  <strong>Date:</strong> {bookingDate}
                </p>
                <p>
                  <strong>Time:</strong> {bookingTime}
                </p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </div>
  );
}

export default MyBookings;

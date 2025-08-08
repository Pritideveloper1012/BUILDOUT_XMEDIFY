import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const getTimeLabel = (time) => {
  switch (time) {
    case "10:00 AM":
      return "Morning";
    case "12:00 PM":
      return "Noon";
    case "03:00 PM":
      return "Afternoon";
    case "05:00 PM":
      return "Evening";
    default:
      return null;
  }
};

const BookingModal = ({ show, onHide, center }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (show) {
      const today = new Date().toISOString().split("T")[0];
      setDate(today);
      setTime(""); // Reset time on modal open
    }
  }, [show]);

  const handleBook = () => {
    if (!center) {
      alert("No hospital selected!");
      return;
    }
    const booking = { center, bookingDate: date, bookingTime: time };
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));
    alert("Appointment Booked!");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} data-testid="booking-modal">
      <Modal.Header closeButton>
        <Modal.Title>Book Appointment</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              max={
                new Date(
                  Date.now() + 7 * 24 * 60 * 60 * 1000
                ).toISOString().split("T")[0]
              } // allow only within a week ahead
            />
            {date === new Date().toISOString().split("T")[0] && (
              <p className="text-muted mb-3">Today</p>
            )}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Select Time</Form.Label>
            <Form.Select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              data-testid="time-select"
            >
              <option value="">Choose...</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </Form.Select>

            {time ? (
              <p className="text-muted mb-3" data-testid="time-label">
                {getTimeLabel(time)}
              </p>
            ) : null}

            {/* Debug info: Remove before final submit */}
            <p style={{ fontSize: "10px", color: "red" }} data-testid="debug-time">
              Selected time: {time} - Label: {getTimeLabel(time) || "None"}
            </p>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleBook} disabled={!date || !time} data-testid="book-btn">
          Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingModal = ({ show, onHide, center }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (show) {
      const today = new Date().toISOString().split("T")[0];
      setDate(today);
      setTime("");
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
    <Modal show={show} onHide={onHide}>
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
            />
            {date === new Date().toISOString().split("T")[0] && (
              <p className="text-muted mb-3">Today</p>
            )}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Select Time</Form.Label>
            <Form.Select value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="">Choose...</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>03:00 PM</option>
              <option>05:00 PM</option>
            </Form.Select>

            {time && (
              <p className="text-muted mb-3">
                {(() => {
                  if (time === "10:00 AM") return "Morning";
                  if (time === "12:00 PM") return "Noon";
                  if (time === "03:00 PM") return "Afternoon";
                  if (time === "05:00 PM") return "Evening";
                  return null;
                })()}
              </p>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleBook} disabled={!date || !time}>
          Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;

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
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }
    const booking = {
      center,
      bookingDate: date,
      bookingTime: time,
    };
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));
    alert("Appointment Booked!");
    onHide();
  };

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

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
              id="date-select"
              type="date"
              value={date}
              min={today}
              max={maxDate}
              onChange={(e) => setDate(e.target.value)}
            />
            {date === today && (
              <p className="text-muted mb-3">
                Today
              </p>
            )}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Select Time</Form.Label>
            <div className="time-of-day-labels">
              <p className="text-muted mb-3">Morning</p>
              <p className="text-muted mb-3">Noon</p>
              <p className="text-muted mb-3">Afternoon</p>
              <p className="text-muted mb-3">Evening</p>
            </div>
            <Form.Select
              id="time-select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </Form.Select>
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

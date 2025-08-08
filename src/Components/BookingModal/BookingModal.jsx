import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingModal = ({ show, onHide, center }) => {
  const todayISO = new Date().toISOString().split("T")[0];
  const maxDateISO = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (show) {
      setDate(todayISO);
      setTime(""); // Reset time selection when modal opens
      console.log("Modal opened - date set to:", todayISO);
    }
  }, [show, todayISO]);

  useEffect(() => {
    console.log("Selected date:", date);
  }, [date]);

  useEffect(() => {
    console.log("Selected time:", time);
  }, [time]);

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
              min={todayISO}
              max={maxDateISO}
            />
            {date === todayISO && (
              <p className="text-muted mb-3">Today</p>
            )}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Select Time</Form.Label>
            <Form.Select value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="">Choose...</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="03:00 PM">03:00 PM</option>
              <option value="05:00 PM">05:00 PM</option>
            </Form.Select>

            {time && (
              <p className="text-muted mb-3">
                {time === "10:00 AM"
                  ? "Morning"
                  : time === "12:00 PM"
                  ? "Noon"
                  : time === "03:00 PM"
                  ? "Afternoon"
                  : time === "05:00 PM"
                  ? "Evening"
                  : null}
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

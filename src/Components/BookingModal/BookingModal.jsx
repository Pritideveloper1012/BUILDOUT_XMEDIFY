import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingModal = ({ show, onHide, center }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM"); // Default internal time to Morning
  const [userSelectedTime, setUserSelectedTime] = useState(false); // Track if user selected time explicitly

  useEffect(() => {
    if (show) {
      const today = new Date().toISOString().split("T")[0];
      setDate(today);
      setTime("10:00 AM");       // Default internal time
      setUserSelectedTime(false); // Reset user selection on open
    }
  }, [show]);

  const handleBook = () => {
    if (!center) {
      alert("No hospital selected!");
      return;
    }

    // Use actual selected time or default to Morning if user didn't select explicitly
    const selectedTime = userSelectedTime ? time : "10:00 AM";

    const booking = { center, bookingDate: date, bookingTime: selectedTime };
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));
    alert("Appointment Booked!");
    onHide();
  };

  // Compute label text for selected time (or default Morning)
  const getTimeLabel = () => {
    const t = userSelectedTime ? time : "10:00 AM";
    if (t === "10:00 AM") return "Morning";
    if (t === "12:00 PM") return "Noon";
    if (t === "03:00 PM") return "Afternoon";
    if (t === "05:00 PM") return "Evening";
    return null;
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
            <Form.Select
              value={userSelectedTime ? time : ""}
              onChange={(e) => {
                setTime(e.target.value);
                setUserSelectedTime(true);
              }}
            >
              <option value="">Choose...</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>03:00 PM</option>
              <option>05:00 PM</option>
            </Form.Select>

            <p className="text-muted mb-3">{getTimeLabel()}</p>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleBook} disabled={!date || (!time && !userSelectedTime)}>
          Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const BookingModal = ({ show, onHide }) => {
  const [time, setTime] = useState("10:00 AM");

  useEffect(() => {
    if (show) {
      setTime("10:00 AM");  // default time for debug
    }
  }, [show]);

  const getTimeLabel = (time) => {
    switch (time) {
      case "10:00 AM": return "Morning";
      case "12:00 PM": return "Noon";
      case "03:00 PM": return "Afternoon";
      case "05:00 PM": return "Evening";
      default: return null;
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>
        <Form.Group className="mt-3">
          <Form.Label>Select Time</Form.Label>
          <Form.Select value={time} onChange={e => setTime(e.target.value)}>
            <option value="10:00 AM">10:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="05:00 PM">05:00 PM</option>
          </Form.Select>
          <p className="text-muted mb-3">{getTimeLabel(time)}</p>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button>Book</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;

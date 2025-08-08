import React, { useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";

import dayjs from "dayjs";

const BookingModal = ({ show, onHide, center }) => {
  const [dayIdx, setDayIdx] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Generate 7 days
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = dayjs().add(i, "day");
    days.push(d);
  }

  // Define slots per period
  const slots = {
    Morning: ["10:00 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "03:00 PM"],
    Evening: ["05:00 PM", "06:00 PM"],
  };

  const handleBook = () => {
    if (!center) {
      alert("No hospital selected!");
      return;
    }
    if (!selectedSlot) {
      alert("Please select a time slot!");
      return;
    }
    const booking = {
      center,
      bookingDate: days[dayIdx].format("YYYY-MM-DD"),
      bookingTime: selectedSlot,
    };
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));
    alert("Appointment Booked!");
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Book Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {/* Date Selector */}
          <div>
            {days.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setDayIdx(idx)}
                style={{ fontWeight: dayIdx === idx ? "bold" : "normal" }}
              >
                {day.format("ddd, MMM D")}
              </button>
            ))}
          </div>

          {/* Slots */}
          {Object.entries(slots).map(([period, times]) => (
            <div key={period}>
              <h5>{period}</h5>
              <div>
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedSlot(time)}
                    style={{
                      backgroundColor: selectedSlot === time ? "green" : "",
                      color: selectedSlot === time ? "white" : "",
                      marginRight: 5,
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleBook} disabled={!selectedSlot}>
          Book
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default BookingModal
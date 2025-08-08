import React from "react";
import { Card, Button } from "react-bootstrap";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ data }) {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <div style={{ cursor: "pointer" }}
        onClick={() => setShow(true)}
      >
        <Card className="my-3">
          <Card.Body>
            <Card.Title>{data["Hospital Name"]}</Card.Title>
            <Card.Text>
              {data.Address}, {data.City}, {data.State}, {data["ZIP Code"]}
              <br />
              Rating: {data["Overall Rating"] || "N/A"}
            </Card.Text>

            {/* Optional: keep the button too (clicking either li or button opens modal) */}
            <Button style={{ cursor: "pointer", all: "unset" }} onClick={(e) => { e.stopPropagation(); setShow(true); }}>
              Book FREE Center Visit
            </Button>
          </Card.Body>
        </Card>
      </div>

      <BookingModal show={show} onHide={() => setShow(false)} center={data} />
    </>
  );
}

export default HospitalCard;

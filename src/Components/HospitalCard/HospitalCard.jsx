import React from "react";
import { Card, Button } from "react-bootstrap";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({ data }) {
  const [show, setShow] = React.useState(false);

  return (
    <>
      {/* Make the entire card clickable with Bootstrap classes */}
      <Card
        className="my-3"
        role="button"
        tabIndex={0}
        onClick={() => setShow(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setShow(true);
        }}
        aria-label={`Book appointment at ${data["Hospital Name"]}`}
        style={{ cursor: "pointer" }}
      >
        <Card.Body>
          <Card.Title>{data["Hospital Name"]}</Card.Title>
          <Card.Text>
            {data.Address}, {data.City}, {data.State}, {data["ZIP Code"]}
            <br />
            Rating: {data["Overall Rating"] || "N/A"}
          </Card.Text>

          {/* Button with Bootstrap styling, prevent propagation */}
          <Button
            variant="primary"
            onClick={(e) => {
              e.stopPropagation();
              setShow(true);
            }}
          >
            Book FREE Center Visit
          </Button>
        </Card.Body>
      </Card>

      <BookingModal show={show} onHide={() => setShow(false)} center={data} />
    </>
  );
}

export default HospitalCard;

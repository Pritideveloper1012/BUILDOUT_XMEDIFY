import React from 'react';
import { Card, Button } from "react-bootstrap";
import BookingModal from "../BookingModal/BookingModal";

function HospitalCard({data}) {
   const [show, setShow] = React.useState(false);
  
  return (
    <>
    <li>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>{data["Hospital Name"]}</Card.Title>
          <Card.Text>
            {data.Address}, {data.City}, {data.State}, {data["ZIP Code"]}
            <br />
            Rating: {data["Overall Rating"] || "N/A"}
          </Card.Text>
          <Button onClick={() => setShow(true)}>Book FREE Center Visit</Button>
        </Card.Body>
      </Card>
        </li>
      <BookingModal show={show} onHide={() => setShow(false)} center={data} />
      
    </>
  );
}

export default HospitalCard;
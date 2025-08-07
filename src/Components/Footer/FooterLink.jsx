// src/Components/Footer/FooterLink.jsx
import React from "react";

const FooterLink = ({ links = [] }) => {
  return (
    <ul className="list-unstyled">
      {links.map((text, index) => (
        <li key={index} className="mb-2">
          <span className="me-2">›</span>{text}
        </li>
      ))}
    </ul>
  );
};

export default FooterLink;

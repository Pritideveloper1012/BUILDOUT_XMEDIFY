import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import bannerImage from "../../../assets/faqs-banner.jpg";


const faqsData = [
  { id: 1, question: "Why choose our medical for your family?" },
  { id: 2, question: "Why we are different from others?" },
  { id: 3, question: "Trusted & experienced senior care & love" },
  { id: 4, question: "How to get appointment for emergency cases" },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="container bg-white my-5 p-4 shadow">
      <div className="row">
        {/* Left side image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img src={bannerImage} alt="FAQs Banner" className="img-fluid" />

        </div>

        {/* Right side FAQs */}
        <div className="col-md-6">
          <h3 className="mb-4">Frequently Asked Questions</h3>
          <div className="accordion" id="faqAccordion">
            {faqsData.map((faq, index) => (
              <div className="card mb-2 border-0" key={faq.id}>
                <div
                  className="card-header bg-light d-flex justify-content-between align-items-center"
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <span>{faq.question}</span>
                  <span>
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="card-body">
                    <p>This is a sample answer to the FAQ question.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

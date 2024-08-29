import React from "react";
import "./Faq.css";
import FaqCard from "../faqCard/FaqCard";

const Faq = () => {
  return (
    <div className="client-test-container">
      <div className="testimonial-header">
        <h1>Frequently Asked Questions</h1>
        <p>
          Got questions? We've got answers. Browse our FAQs for quick insights
          into how we work, what we offer, and how we can help your brand shine.
        </p>
      </div>
      <FaqCard />
    </div>
  );
};

export default Faq;

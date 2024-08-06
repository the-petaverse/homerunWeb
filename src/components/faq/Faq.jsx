import React, { useState } from "react";
import "./Faq.css";

import RightIcon from "../../assets/right.png";
import ChevronIcon from "../../assets/chevron-down.png";

const accordionData = [
  {
    id: "1",
    title: "What services does Homerun offer?",
    desc: "What services does Homerun offer? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. ui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium",
  },
  {
    id: "2",
    title: "What services does Homerun offer?",
    desc: "What services does Homerun offer? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. ui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium",
  },
  {
    id: "3",
    title: "What services does Homerun offer?",
    desc: "What services does Homerun offer? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. ui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium",
  },
  {
    id: "4",
    title: "What services does Homerun offer?",
    desc: "What services does Homerun offer? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. ui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium",
  },
];
const Faq = () => {
  const [showAccordion, setShowAccordion] = useState("1");

  const handleOpenAccordion = (id) => {
    setShowAccordion(id);
  };
  return (
    <div className="client-test-container">
      <div className="testimonial-header">
        <h1>Frequently Asked Questions</h1>
        <p>
          Got questions? We've got answers. Browse our FAQs for quick insights
          into how we work, what we offer, and how we can help your brand shine.
        </p>
      </div>
      <div className="inner-border-wrapper">
        <div className="testimonia-card-wrapper">
          {accordionData &&
            accordionData.map((accordion, index) => {
              return (
                <div className="accordion-main-wrapper" key={index}>
                  <div
                    className="accordion-header-wrapper"
                    onClick={() => handleOpenAccordion(accordion.id)}
                  >
                    <p>{accordion.title}</p>
                    <img
                      src={
                        showAccordion === accordion.id ? ChevronIcon : RightIcon
                      }
                      className="accordion-icon"
                      alt="icon"
                    />
                  </div>
                  {showAccordion === accordion.id && (
                    <div className="accordion-body">
                      <p>{accordion.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Faq;

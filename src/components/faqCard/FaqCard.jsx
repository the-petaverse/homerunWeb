import React, { useState } from "react";
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
const FaqCard = () => {
  const [showAccordion, setShowAccordion] = useState(false);
  const [accordionId, setAccordionId] = useState("0");

  const handleOpenAccordion = (id) => {
    setAccordionId(id);
    setShowAccordion((prev) => !prev);
  };
  return (
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
                {showAccordion && accordionId === accordion.id && (
                  <div className="accordion-body">
                    <p>{accordion.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FaqCard;

import React, { useState } from "react";
import RightIcon from "../../assets/right.png";
import ChevronIcon from "../../assets/chevron-down.png";
import ChevronUpIcon from "../../assets/chevron-up.webp"; // Icon for open state
import { IoChevronForwardSharp } from "react-icons/io5";



const accordionData = [
  {
    id: 1,
    title: "What services does Homerun offer?",
    desc: "What services does Homerun offer? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. ui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium",
    chevron: <IoChevronForwardSharp />
  },
  {
    id: 2,
    title: "What services does Homerun offer?",
    desc: "What services does Homerun offer? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. ui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium",
  },
  {
    id: 3,
    title: "What services does Homerun offer?",
    desc: "What services does Homerun offer? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. ui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium",
  },
  {
    id: 4,
    title: "What services does Homerun offer?",
    desc: "What services does Homerun offer? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. ui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sitvoluptatem accusantium doloremque laudantium",
  },
];
const FaqCard = () => {
  const [accordionId, setAccordionId] = useState(null); // Track which accordion is open

  const handleOpenAccordion = (id) => {
    // Toggle the accordion: if the same one is clicked, close it; otherwise, open the clicked one
    setAccordionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="inner-border-wrapper">
      <div className="testimonia-card-wrapper">
        {accordionData &&
          accordionData.map((accordion) => (
            <div className="accordion-main-wrapper" key={accordion.id}>
              <div
                className="accordion-header-wrapper"
                onClick={() => handleOpenAccordion(accordion.id)}
              >
                <h4>{accordion.title}</h4>
                <img
                  src={
                    accordionId === accordion.id ? ChevronUpIcon : RightIcon
                  }
                  className="accordion-icon"
                  alt="icon"
                />
              </div>
              {accordionId === accordion.id && (
                <div className="accordion-body">
                  <p>{accordion.desc}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default FaqCard;
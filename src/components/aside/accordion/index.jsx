import React, { cloneElement, useState } from "react";
import "./accordion.css";

 function Accordion({children}){
    const [openIndex, setOpenIndex] = useState(0);

    const handleItemClick = (index) => {
      if (index === openIndex) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    };
  
    return (
      <div className="accordion">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isOpen: openIndex === index,
            onClick: () => handleItemClick(index),
          })
        )}
      </div>
    );
};

function AccordionItem({ title, children, isOpen, onClick }) {
    return (
      <div className="accordion-item">
        <div className="accordion-header">
            <p>{title}</p>
            <button onClick={onClick}>+</button>
        </div>
        {isOpen && <div className="accordion-item-container">{children}</div>}
      </div>
    );
  }

export {Accordion, AccordionItem}


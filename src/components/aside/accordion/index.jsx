import React, { cloneElement, useState } from "react";
import "./accordion.css";

 function Accordion({children}){
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
      if (index === openIndex) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    };
  
    return (
      <div>
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
      <div>
        <button onClick={onClick}>{title}</button>
        {isOpen && <div>{children}</div>}
      </div>
    );
  }

export {Accordion, AccordionItem}


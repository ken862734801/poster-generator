import React, { cloneElement, useState, useEffect } from "react";
import "./accordion.css";
import { Remove, Add } from "@material-ui/icons";

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
    const [icon, setIcon] = useState(<Add/>);

    useEffect(() => {
        isOpen ? setIcon(<Remove />) : setIcon(<Add />);
      }, [isOpen]);
    
    return (
      <div className="accordion-item">
        <div className="accordion-header">
            <p>{title}</p>
            <div className="icon-btn" onClick={onClick}>{icon}</div> 
        </div>
        {isOpen && <div className="accordion-item-container">{children}</div>}
      </div>
    );
  }

export {Accordion, AccordionItem}


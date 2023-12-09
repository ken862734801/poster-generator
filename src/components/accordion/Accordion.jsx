import './accordion.css';

import React, { useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react";

function Accordion( { children }){
    const [openIndex, setOpenIndex] = useState(0);

    function handleOpenIndexChange(index){
        if(index === openIndex){
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    };

    return (
        <div className="accordion">
            {React.Children.map(children, (child, index) => (
                React.cloneElement(child, {
                    isOpen: openIndex === index,
                    handleOnClick: ()=> handleOpenIndexChange(index)
                })
            ))}
        </div>
    )
};

function AccordionItem({children, handleOnClick, isOpen, title}){
    const accordionIcon = isOpen? <Minus size={20}/> : <Plus size={20}/>

    return (
        <div className="accordion-item">
            <div className="accordion-item--header">
                <p>{title}</p>
                <button onClick={handleOnClick}>
                    {accordionIcon}
                </button>
            </div>
            {isOpen && <div className="accordion-item--content">{children}</div>}
        </div>
    )
};

export { Accordion, AccordionItem }
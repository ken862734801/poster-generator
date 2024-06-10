import React from 'react';

export type AccordionProps = {
    children?: React.ReactNode;
};

export type AccordionItemProps = {
    title?: string;
    isChecked?: boolean;
    children?: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isChecked, children }): JSX.Element => (
   <div>{children}</div>
);

const Accordion: React.FC<AccordionProps> & { Item: React.FC<AccordionItemProps> } = ({ children }) => {
    return <div className=''>{children}</div>;
};

Accordion.Item = AccordionItem;

export default Accordion;

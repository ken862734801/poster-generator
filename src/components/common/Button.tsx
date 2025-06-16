import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={props.className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

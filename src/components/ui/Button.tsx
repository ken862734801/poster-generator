import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    className,
    onClick,
    children,
    ...props
}) => {
    return (
        <button onClick={onClick} className={className} {...props}>
            <span>{children}</span>
        </button>
    );
};

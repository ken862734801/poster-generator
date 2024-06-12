export type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    className,
    onClick,
    children,
}) => {
    return (
        <button onClick={onClick} className={className}>
            <span>{children}</span>
        </button>
    );
};

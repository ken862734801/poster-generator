import { Spinner } from "./Spinner";

export type ButtonProps = {
    isLoading?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    isLoading,
    className,
    onClick,
    children,
}) => {
    return (
        <button onClick={onClick} className={className}>
            {isLoading ? <Spinner className="w-5 h-5"/> : <span>{children}</span>}
        </button>
    );
};

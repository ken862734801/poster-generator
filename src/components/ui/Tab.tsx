import { cn } from '@/utils/cn';

export type TabProps = {
    isActive?: boolean;
    hint: string;
    onClick: () => void;
    icon: React.ReactNode;
    className?: string;
};

export const Tab: React.FC<TabProps> = ({
    hint,
    isActive,
    onClick,
    icon,
    className,
}) => {
    const classes = cn(
        'rounded text-slate-600 w-16 h-16 hover:bg-gray-100 hover:text-slate-700 my-1 p-0',
        { '!text-slate-800 !bg-gray-100': isActive },
        className
    );
    return (
        <button className={classes} onClick={onClick}>
            <div className="flex justify-center mb-[-2px]">{icon}</div>
            <span className="text-xs">{hint}</span>
        </button>
    );
};

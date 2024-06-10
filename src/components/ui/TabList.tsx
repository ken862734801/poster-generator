import { cn } from '@/utils/cn';

export type TabListProps = {
    children: React.ReactNode;
    className?: string;
};

export const TabList: React.FC<TabListProps> = ({ children, className }) => {
    const classes = cn(
        'rounded-none daisy-join daisy-join-vertical p-1.5 border-r border-gray-200 border-solid',
        className
    );
    return <div className={classes}>{children}</div>;
};

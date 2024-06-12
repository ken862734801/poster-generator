import { cn } from '@/utils/cn';

export interface SeparatorProps {
    color?: string;
    className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ color, className }) => {
    const classes = cn('w-full', className);

    return <div style={{ border: `1px solid ${color}` }} className={classes}></div>;
};

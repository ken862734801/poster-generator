import { cn } from '@/utils';

export interface SpinnerProps {
    style?: any;
    className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ style, className }) => {
    const classes = cn('rounded-full animate-spin', className);
    return <div style={style} className={classes}></div>;
};

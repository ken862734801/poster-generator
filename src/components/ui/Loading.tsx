import { cn } from '@/utils';

export interface LoadingProps {
    variant?: 'spinner' | 'dots' | 'ring' | 'ball';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
    variant,
    size,
    className,
}) => {
    const classes = cn(
        'daisy-loading',
        {
            'daisy-loading-spinner': variant === 'spinner',
            'daisy-loading-dots': variant === 'dots',
            'daisy-loading-ring': variant === 'ring',
            'daisy-loading-ball': variant === 'ball',
        },
        `daisy-loading-${size}`
    );
    return <div className={classes}></div>;
};

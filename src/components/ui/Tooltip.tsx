import { cn } from '@/utils/cn';

export interface TooltipProps {
    hint?: string;
    position?: 'top' | 'bottom' | 'right' | 'left';
    children?: React.ReactNode;
    className?: string;
}
export const ToolTip: React.FC<TooltipProps> = ({
    hint,
    position,
    className,
    children,
}) => {
    const classes = cn(
        'daisy-tooltip',
        {
            'daisy-tooltip-top': position === 'top',
            'daisy-tooltip-bottom': position === 'bottom',
            'daisy-tooltip-right': position === 'right',
            'daisy-tooltip-left': position === 'left',
        },
        className
    );
    return (
        <div className={classes} data-tip={hint}>
            {children}
        </div>
    );
};

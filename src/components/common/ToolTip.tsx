import React from 'react';
import { cn } from '@/lib';

export interface ToolTipProps {
  hint: string;
  children: React.ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const ToolTip = ({
  hint,
  children,
  position,
  className,
}: ToolTipProps) => {
  const classes = cn('tooltip', `tooltip-${position}`, className);
  return (
    <div className={classes}>
      <div className="tooltip-content">
        <div className="text-xs capitalize">{hint}</div>
      </div>
      {children}
    </div>
  );
};

export default ToolTip;

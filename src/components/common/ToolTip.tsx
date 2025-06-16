import React from 'react';
import { cn } from '@/lib';

export interface ToolTipProps {
  children: React.ReactNode;
  hint: string;
  position: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export const ToolTip: React.FC<ToolTipProps> = (props) => {
  const classes = cn('tooltip', `tooltip-${props.position}`, props.className);
  return (
    <div className={classes}>
      <div className="tooltip-content">
        <div>{props.hint}</div>
      </div>
      {props.children}
    </div>
  );
};

export default ToolTip;

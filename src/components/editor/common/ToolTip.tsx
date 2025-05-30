import React from 'react';

export interface ToolTipProps {
  hint: string;
  children: React.ReactNode;
}

export const ToolTip = ({ hint, children }: ToolTipProps) => {
  return (
    <div className="tooltip" data-tip={hint}>
      {children}
    </div>
  );
};

export default ToolTip;

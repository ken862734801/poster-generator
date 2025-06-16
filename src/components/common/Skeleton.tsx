import { cn } from '@/lib';
import React from 'react';

export interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const classes = cn('skeleton', props.className);
  return <div className={classes}></div>;
};

export default Skeleton;
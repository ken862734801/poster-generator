import { cn } from '@/lib';

export interface SkeletonProps {
  className?: string;
}
export const Skeleton = ({ className }: SkeletonProps) => {
  const classes = cn('skeleton', className);
  return <div className={classes}></div>;
};

export default Skeleton;

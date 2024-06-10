import { cn } from '@/utils';

export interface ModalProps {
    title?: string;
    className?: string;
}
export const Modal: React.FC<ModalProps> = ({ title, className }) => {
    const classes = cn('daisy-modal', className);
    return <div className={classes}></div>;
};

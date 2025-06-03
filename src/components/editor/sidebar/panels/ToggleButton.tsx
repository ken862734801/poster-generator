import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { ToggleWrapper } from './ToggleWrapper';
import { cn } from '@/lib';

export interface ToggleButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleButton = ({ isOpen, setIsOpen }: ToggleButtonProps) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={cn(
        'absolute right-0 -translate-y-1/2 top-1/2 w-[21px] h-[74px] z-100 cursor-pointer',
        isOpen ? 'translate-x-full' : 'translate-x-[95%]'
      )}
      onClick={handleClick}
    >
      <ToggleWrapper />
      {isOpen ? (
        <CaretLeftIcon
          size={12}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />
      ) : (
        <CaretRightIcon
          size={12}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        />
      )}
    </button>
  );
};

export default ToggleButton;

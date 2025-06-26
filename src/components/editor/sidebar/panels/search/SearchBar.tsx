import { UseFormRegisterReturn } from 'react-hook-form';
import { MagnifyingGlassIcon, XCircleIcon } from '@phosphor-icons/react';
import { Button } from '@/components/common';
import { cn } from '@/lib';

export interface SearchBarProps {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  isClearable: boolean;
  error?: string;
  onClear: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <>
      <p className="text-xs capitalize">
        {props.label} <span className="text-error">*</span>
      </p>
      <div className='mt-1 mb-2'>
        <div className="border-none input input-sm bg-[var(--input-default)] focus-within:outline-none !shadow-none">
          <MagnifyingGlassIcon size={18} />
          <input placeholder={props.placeholder} {...props.register} />
          <Button
            className={cn(
              'btn btn-xs btn-circle btn-ghost',
              props.isClearable ? '' : 'invisible'
            )}
            onClick={props.onClear}
            type="button"
          >
            <XCircleIcon size={18} />
          </Button>
        </div>
        {props.error && <p className="mt-1 text-xs text-error">{props.error}</p>}
      </div>
    </>
  );
};

export default SearchBar;

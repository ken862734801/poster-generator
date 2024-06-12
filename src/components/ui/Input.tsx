import React, { useRef } from 'react';
import { Button } from './Button';
import { XCircle } from '@phosphor-icons/react';

export interface InputProps {
    variant?: 'text' | 'color';
    label?: string;
    id?: string;
    name?: string;
    value?: string | string[] | number;
    placeholder?: string;
    leadingIcon?: React.ReactNode;
    register?: any;
    isRequired?: boolean;
    isClearable?: boolean;
    error?: string;
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
    variant = 'text',
    label,
    name,
    placeholder,
    value,
    leadingIcon,
    onClick,
    onChange,
    register,
    isRequired,
    isClearable = true,
    error,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
            if (onChange) {
                const event = {
                    target: inputRef.current,
                } as React.ChangeEvent<HTMLInputElement>;
                onChange(event);
            }
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="w-10/12 text-slate-600 mx-auto my-2">
            <div className="capitalize my-1 text-xs">
                {label} {isRequired && <span className="text-red-400">*</span>}
            </div>
            {variant === 'text' ? (
                <label className="daisy-input daisy-input-sm !outline-none border-none flex items-center mx-auto bg-gray-100">
                    {leadingIcon}
                    <input
                        ref={inputRef}
                        name={name}
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        className="grow px-2"
                        {...(register && register(name, { required: isRequired }))}
                        onChange={onChange}
                    />
                    {value && isClearable && (
                        <Button
                            onClick={handleClear}
                            className="daisy-btn daisy-btn-xs daisy-btn-circle daisy-btn-ghost"
                        >
                            <XCircle size={18} />
                        </Button>
                    )}
                </label>
            ) : (
                <div className="flex items-center">
                    <label className="daisy-input daisy-input-sm !outline-none border-none flex items-center bg-gray-100 mr-2">
                        <span className='text-[13px]'>HEX</span>
                        <input
                            ref={inputRef}
                            type="text"
                            className="px-2 w-3/4"
                            name={name}
                            value={value}
                            onChange={onChange}
                        />
                    </label>
                    <div className="w-9 h-8 rounded-lg overflow-hidden border border-solid border-gray-200">
                        <input
                            style={{ transform: 'translate(-25%, -25%)' }}
                            className="cursor-pointer p-0 border-0 w-[200%] h-[200%]"
                            type="color"
                            name={name}
                            value={value}
                            onChange={onChange}
                        />
                    </div>
                </div>
            )}
            {error && (
                <div className="my-1 text-xs text-red-400">{error}</div>
            )}
        </div>
    );
};

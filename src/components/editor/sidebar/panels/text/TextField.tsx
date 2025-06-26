import React from "react";

interface TextFieldProps {
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <>
      <p className="text-xs capitalize">{props.label}</p>
      <div className="mt-1 mb-2">
        <div className="border-none input input-sm bg-[var(--input-default)]">
          <input type="text" value={props.value} onChange={props.onChange} />
        </div>
      </div>
    </>
  );
};

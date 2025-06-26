import { HashIcon } from '@phosphor-icons/react';
import { useStore } from '@/store/useStore';

export interface ColorPickerProps {
  label: string;
  target: number;
}

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const canvas = useStore((state) => state.canvas);
  const workarea = useStore((state) => state.workarea);
  const color = useStore((state) => state.colors[props.target]);
  const setColor = useStore((state) => state.setColor);

  const applyColor = (value: string) => {
    const hex = value.startsWith('#') ? value : `#${value}`;
    setColor(props.target, hex);

    if (props.target === 0) {
      workarea?.set({ fill: hex });
      canvas?.renderAll();
    }

    if (props.target === 1) {
      canvas?.getObjects().forEach((object: any) => {
        if (object.type === 'textbox') {
          object.set({ fill: hex });
        }
      });
      canvas?.renderAll();
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    applyColor(event.target.value);
  };

  return (
    <>
      <p className="text-xs capitalize">{props.label}</p>
      <div className="flex mt-1 mb-2 space-x-3">
        <div className="border-none input input-sm bg-[var(--input-default)] focus-within:outline-none !shadow-none">
          <HashIcon size={16} />
          <input
            className="uppercase"
            type="text"
            value={color.replace('#', '')}
            onChange={handleColorChange}
          />
        </div>
        <div className="w-9 h-8 overflow-hidden border border-solid border-[var(--base-gray-100)] rounded">
          <input
            className="w-[200%] h-[200%] transform -translate-x-1/4 -translate-y-1/4 cursor-pointer"
            type="color"
            value={color}
            onChange={handleColorChange}
          />
        </div>
      </div>
    </>
  );
};

export default ColorPicker;

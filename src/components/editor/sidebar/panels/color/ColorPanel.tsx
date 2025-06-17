import { ColorPicker, colorItems } from './index';

export const ColorPanel = () => {
  return (
    <div className='p-4'>
      {colorItems.map((item) => {
        return (
          <ColorPicker
            key={item.label}
            label={item.label}
            target={item.target}
          />
        );
      })}
    </div>
  );
};

export default ColorPanel;

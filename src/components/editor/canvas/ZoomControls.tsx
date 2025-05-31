import { PlusIcon, MinusIcon } from '@phosphor-icons/react';
import ToolTip from '../../common/ToolTip';

export const ZoomControls = () => {
  return (
    <div className="flex justify-around items-center w-32 h-10 rounded absolute bottom-2 right-4 bg-white">
      <ToolTip hint="Zoom Out">
        <button className="btn-sm btn-square flex justify-center items-center rounded cursor-pointer hover:bg-[var(--background-hover)]">
          <MinusIcon />
        </button>
      </ToolTip>
      <div className="w-10">
        <input
          className="w-full text-center text-sm "
          type="text"
          value={'100%'}
          readOnly
        />
      </div>
      <ToolTip hint="Zoom In">
        <button className="btn-sm btn-square flex justify-center items-center rounded cursor-pointer hover:bg-[var(--background-hover)]">
          <PlusIcon />
        </button>
      </ToolTip>
    </div>
  );
};

export default ZoomControls;

import { PlusIcon, MinusIcon } from '@phosphor-icons/react';

export const ZoomControls = () => {
  return (
    <div>
      <div>
        <button>
          <MinusIcon />
        </button>
      </div>
      <div>
        <input type="text" readOnly />
      </div>
      <div>
        <button>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

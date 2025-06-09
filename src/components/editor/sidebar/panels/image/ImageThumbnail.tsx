import { ToolTip } from '@/components/common';
import { TrashIcon } from '@phosphor-icons/react';

export interface ImageThumbnailProps {
  src?: string;
  alt?: string;
  onClick?: () => void;
  onDelete?: () => void;
}

export const ImageThumbnail = ({
  src,
  alt,
  onClick,
  onDelete,
}: ImageThumbnailProps) => {
  return (
    <div
      className="relative rounded cursor-pointer w-18 h-18 group"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="object-contain w-full h-full rounded"
      />
      <div className="absolute hidden bottom-1 left-1 group-hover:block">
        <ToolTip hint="delete" position="bottom">
          <button
            className="flex items-center opacity-75 rounded justify-center cursor-pointer btn-xs btn-square bg-[var(--background-hover)]"
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.();
            }}
          >
            <TrashIcon size={16} />
          </button>
        </ToolTip>
      </div>
    </div>
  );
};

export default ImageThumbnail;

import { TrashIcon } from '@phosphor-icons/react';
import { Button, Skeleton, ToolTip } from '@/components/common';

export interface ImageThumbnailProps {
  src: string;
  alt: string;
  loading?: boolean;
  onClick?: () => void;
  onDelete: () => void;
}

export const ImageThumbnail: React.FC<ImageThumbnailProps> = (props) => {
  if (props.loading) {
    return <Skeleton className="rounded w-18 h-18" />;
  }

  return (
    <div
      className="relative rounded cursor-pointer w-18 h-18 group bg-[var(--thumbnail-default)]"
      onClick={props.onClick}
    >
      <img
        className="object-contain w-full h-full rounded"
        src={props.src}
        alt={props.alt}
      />
      <div className="absolute hidden bottom-1 left-1 group-hover:block">
        <ToolTip hint="Delete" position="bottom">
          <Button
            className="flex items-center justify-center rounded opacity-75 cursor-pointer btn-xs btn-square bg-[var(--button-hover)]"
            onClick={(event) => {
              event.stopPropagation();
              props.onDelete();
            }}
          >
            <TrashIcon size={16} />
          </Button>
        </ToolTip>
      </div>
    </div>
  );
};

export default ImageThumbnail;

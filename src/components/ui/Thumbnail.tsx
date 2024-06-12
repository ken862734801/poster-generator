import { Trash } from '@phosphor-icons/react';
import { cn } from '@/utils';
import { ToolTip } from './Tooltip';
import { Button } from './Button';
import { useState } from 'react';

export interface ThumbnailProps {
    image?: string;
    handleThumbnailClick: () => void;
    handleTrashClick: () => void;
    className?: string;
}
export const Thumbnail: React.FC<ThumbnailProps> = ({
    image,
    handleThumbnailClick,
    handleTrashClick,
    className,
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const classes = cn('relative w-[4.5rem] h-[4.5rem] bg-gray-100 rounded', className);
    return (
        <div
            className={classes}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={image}
                className="object-contain w-full h-full rounded"
                onClick={handleThumbnailClick}
            />
            {isHovered && (
                <ToolTip
                hint="Delete"
                position='bottom'
                className="absolute bottom-0 left-1 z-50"
                >
                    <Button
                        onClick={handleTrashClick}
                        className="flex justify-center items-center daisy-btn-xs daisy-btn-square rounded opacity-50 bg-gray-100"
                    >
                        <Trash size={16} />
                    </Button>
                </ToolTip>
            )}
        </div>
    );
};

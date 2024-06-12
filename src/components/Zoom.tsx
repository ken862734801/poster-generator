import { cn } from '@/utils/cn';
import { Button, ToolTip } from './ui';
import { Plus, Minus } from '@phosphor-icons/react';
import { useControls } from 'react-zoom-pan-pinch';
import { useEffect } from 'react';

export interface ZoomProps {
    zoomLevel: number;
    showSideNav: boolean;
    className?: string;
}

export const Zoom: React.FC<ZoomProps> = ({
    zoomLevel,
    showSideNav,
    className,
}) => {
    const { zoomIn, zoomOut, resetTransform } = useControls();

    const classes = cn(
        'flex items-center justify-around w-32 h-10 bg-white rounded shadow-md',
        className
    );

    useEffect(() => {
        resetTransform();
    }, [showSideNav]);
 
    return (
        <div className={classes}>
            <ToolTip hint="Zoom Out">
                <Button
                    onClick={() => zoomOut(0.5)}
                    className="rounded daisy-btn-sm daisy-btn-square daisy-btn-ghost hover:bg-gray-100"
                >
                    <Minus className="mx-auto" size={20} />
                </Button>
            </ToolTip>
            <div className="w-10">
                <input
                    value={`${Math.ceil(zoomLevel * 100)}%`}
                    className="text-center text-sm pb-1 outline-none w-full"
                    readOnly
                />
            </div>
            <ToolTip hint="Zoom In">
                <Button
                    onClick={() => zoomIn(0.5)}
                    className="rounded daisy-btn-sm daisy-btn-square daisy-btn-ghost hover:bg-gray-100"
                >
                    <Plus className="mx-auto" size={20} />
                </Button>
            </ToolTip>
        </div>
    );
};

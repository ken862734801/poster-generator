import { PaletteColors, Settings } from '@/app/page';
import { Button, Input, ToolTip } from '../ui';
import { useCallback } from 'react';
import { AlbumData } from '@/utils';
import { usePalette } from 'react-palette';
import { Config } from '@/configs';
import { ArrowsCounterClockwise } from '@phosphor-icons/react';

export interface ColorContentProps {
    album?: AlbumData;
    palette?: PaletteColors;
    setPalette?: (palette: PaletteColors) => void;
    settings: Settings;
    setSettings: (settings: Settings) => void;
}

export const ColorContent: React.FC<ColorContentProps> = ({
    album,
    palette,
    setPalette,
    settings,
    setSettings,
}) => {
    const { data } = usePalette(album?.image || '');

    const handleColorInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            if (name in settings) {
                setSettings({ ...settings, [name]: value });
            } else if (palette && setPalette && name in palette) {
                setPalette({ ...palette, [name]: value });
            }
        },
        [palette, setPalette, settings, setSettings]
    );

    const resetPaletteColors = useCallback(() => {
        setSettings({
            backgroundColor: Config.DEFAULT_BACKGROUND,
            textColor: Config.DEFAULT_COLOR,
        });

        if (setPalette && data) {
            setPalette({
                vibrant: data.vibrant,
                lightVibrant: data.lightVibrant,
                darkVibrant: data.darkVibrant,
                muted: data.muted,
                lightMuted: data.lightMuted,
            });
        }
    }, [setSettings, setPalette, data]);

    return (
        <div>
            <div>
                {Object.keys(settings).map((key, index) => (
                    <Input
                        variant="color"
                        key={key}
                        name={key}
                        label={`${key === "backgroundColor" ? 'Background Color' : 'Text Color'}`}
                        value={settings[key as keyof Settings]}
                        onChange={handleColorInputChange}
                    />
                ))}
                {palette &&
                    Object.keys(palette).map((key, index) => (
                        <Input
                            variant="color"
                            key={key}
                            name={key}
                            label={`Color #${index + 1}`}
                            value={palette[key as keyof PaletteColors]}
                            onChange={handleColorInputChange}
                        />
                    ))}
            </div>
            {/* <div className="w-full flex justify-center my-4">
                <ToolTip hint="Reset" position="bottom">
                    <Button
                        className="daisy-btn daisy-btn-md daisy-btn-circle daisy-btn-ghost hover:bg-gray-100"
                        onClick={resetPaletteColors}
                    >
                        <ArrowsCounterClockwise
                            className="text-slate-600"
                            size={24}
                        />
                    </Button>
                </ToolTip>
            </div> */}
        </div>
    );
};

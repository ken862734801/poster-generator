import { PaletteColors, Settings } from '@/app/page';
import { Input } from '../ui';
import { useCallback } from 'react';
import { AlbumData } from '@/utils';

export interface ColorContentProps {
    album?: AlbumData;
    palette?: PaletteColors;
    setPalette?: (palette: PaletteColors) => void;
    settings: Settings;
    setSettings: (settings: Settings) => void;
}

export const ColorContent: React.FC<ColorContentProps> = ({
    palette,
    setPalette,
    settings,
    setSettings,
}) => {

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

    return (
        <div>
            <div>
                {Object.keys(settings).map((key) => (
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
        </div>
    );
};

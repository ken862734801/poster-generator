import { useEffect } from 'react';
import ColorThief from 'colorthief';
import { useStore } from '@/store/useStore';

const toHex = (r: number, g: number, b: number) => {
  return (
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('')
      .toUpperCase()
  );
};

export const usePalette = () => {
  const url = useStore((state) => state.data?.image_url);
  const setColor = useStore((state) => state.setColor);

  useEffect(() => {
    if (!url) return;

    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.src = url;

    image.onload = () => {
      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(image, 10, 5);

      palette.forEach((value, index) => {
        const hex = toHex(value[0], value[1], value[2]);
        const target = 2 + index;
        setColor(target, hex);
      });
    };

    image.onerror = () => {
      console.error('Palette extraction failed for:', url);
    };
  }, [url, setColor]);
};

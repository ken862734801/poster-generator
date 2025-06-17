declare module 'colorthief' {
    export default class ColorThief {
        constructor()
        getColor(
            image: HTMLElement,
            quality: number
        ): [number, number, number]
        getPalette(
            image: HTMLElement,
            colorCount?: number,
            quality: number
        ): [number, number, number][];
    }
}


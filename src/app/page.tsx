'use client';
import { Poster, SiteContainer } from '@/components';
import { Config } from '@/configs';
import { AlbumData, parseData, saveToLocalStorage } from '@/utils';
import { useEffect, useState } from 'react';
import { usePalette } from 'react-palette';

export interface PaletteColors {
    vibrant?: string;
    lightVibrant?: string;
    darkVibrant?: string;
    muted?: string;
    lightMuted?: string;
}

export interface Settings {
    backgroundColor: string;
    textColor: string;
}

export default function Home() {
    const [album, setAlbum] = useState<AlbumData>();
    const [palette, setPalette] = useState<PaletteColors>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [settings, setSettings] = useState<Settings>({
        backgroundColor: Config.DEFAULT_BACKGROUND,
        textColor: Config.DEFAULT_COLOR,
    });

    const { data, error } = usePalette(`${album && album.image}`);

    const getData = async (artist: string, album: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(
                Config.URL +
                    Config.DEV_API_KEY +
                    '&artist=' +
                    artist +
                    '&album=' +
                    album +
                    '&format=json'
            );
            if (response.status === 200) {
                const data = await response.json();
                const albumData = parseData(data);
                setAlbum(albumData);
                saveToLocalStorage('album-data', albumData);
            } else {
                console.error('Request failed with status:', response.status);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData(Config.DEFAULT_ARTIST, Config.DEFAULT_ALBUM);
    }, []);

    useEffect(() => {
        const newPalette = { ...palette };
        if (data) {
            newPalette.vibrant = data.vibrant;
            newPalette.lightVibrant = data.lightVibrant;
            newPalette.darkVibrant = data.darkVibrant;
            newPalette.muted = data.muted;
            newPalette.lightMuted = data.lightMuted;
        } else if (error) {
            console.error('Failed to generate palette with error:', error);
        }
        setPalette(newPalette);
    }, [data, error]);

    return (
        <SiteContainer
            album={album}
            setAlbum={setAlbum}
            palette={palette}
            setPalette={setPalette}
            settings={settings}
            setSettings={setSettings}
            getData={getData}
        >
            <Poster album={album} palette={palette} settings={settings} />
        </SiteContainer>
    );
}

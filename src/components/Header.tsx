import { Config } from '@/configs';
import { Button } from './ui';
import { useState } from 'react';
import DomToImage from 'dom-to-image';
import { AlbumData } from '@/utils';

export interface HeaderProps {
    album?: AlbumData;
}

export const Header: React.FC<HeaderProps> = ({ album }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const updateTotalDownloads = async (albumName: string, artistName: string) => {
        try {
            const response = await fetch('/api/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ album: albumName, artist: artistName }),
            });
            if (!response.ok) {
                throw new Error('Failed to record new download.');
            }
        } catch (error) {
            console.error();
        }
    };

    const saveImage = async () => {
        setIsLoading(true);
        try {
            const posterElement = document.getElementById('poster');
            if (posterElement) {
                const dataUrl = await DomToImage.toPng(posterElement, {
                    quality: 1,
                });
                let link = document.createElement('a');

                const albumName = album?.album;
                const artistName = album?.artist;

                const fileAlbumName = albumName?.replace(/\s+/g, '-');
                const fileArtistName = artistName?.replace(/\s+/g, '-');

                const fileName = `${fileAlbumName}-${fileArtistName}`.toLocaleLowerCase()

                link.download = fileName;
                link.href = dataUrl;
                link.click();

                if (albumName && artistName) {
                    await updateTotalDownloads(albumName, artistName);
                }

            } else {
                console.error('Poster element not found.');
            }
        } catch (error) {
            console.error('An error occured:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <header>
            <nav className="flex items-center px-4 w-full h-[3.25rem] border-b border-solid border-gray-200">
                <div className="flex-1">
                    <a
                        href="/"
                        className="daisy-btn daisy-btn-sm daisy-btn-ghost hover:bg-gray-100 font-normal text-lg text-slate-600"
                    >
                        {Config.TITLE}
                    </a>
                </div>
                <div className="flex-none">
                    <Button
                        className="font-normal daisy-btn daisy-btn-sm daisy-btn-ghost text-slate-600 hover:bg-gray-100 text-base"
                        onClick={() => saveImage()}
                    >
                        Download
                    </Button>
                </div>
            </nav>
        </header>
    );
};

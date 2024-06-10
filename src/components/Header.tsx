import { Config } from '@/configs';
import { Button } from './ui';
import { useState } from 'react';
import DomToImage from 'dom-to-image';

export const Header = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const saveImage = async () => {
        setIsLoading(true);
        try {
            const posterElement = document.getElementById('poster');
            if (posterElement) {
                const dataUrl = await DomToImage.toPng(posterElement, {
                    quality: 1,
                });
                let link = document.createElement('a');
                link.download = 'my-poster';
                link.href = dataUrl;
                link.click();
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

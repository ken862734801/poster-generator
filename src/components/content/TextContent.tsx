import Accordion from '../ui/Accordion';
import { Button, Input, ToolTip } from '../ui';
import { AlbumData, getFromLocalStorage } from '@/utils';
import { ArrowsCounterClockwise } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export type TextContentProps = {
    album?: AlbumData;
    setAlbum?: (album: AlbumData) => void;
};

export const TextContent: React.FC<TextContentProps> = ({
    album,
    setAlbum,
}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [originalAlbumData, setOriginalAlbumData] =
        useState<AlbumData | null>(null);

    const getTextFields = () => {
        if (album) {
            return Object.keys(album).filter(
                (key) =>
                    key !== 'image' && key !== 'tracklist' && key !== 'tags'
            );
        }
    };

    const textFields = getTextFields();

    const handleTextInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: any,
        index = 0
    ) => {
        const { value } = e.target;

        if (album && setAlbum) {
            const newAlbum = { ...album };
            if (Array.isArray(album[key as keyof AlbumData])) {
                const newArray = [
                    ...(newAlbum[
                        key as keyof AlbumData
                    ] as unknown as string[]),
                ];
                newArray[index] = value;
                newAlbum[key as keyof AlbumData] =
                    newArray as unknown as AlbumData[keyof AlbumData];
                setAlbum(newAlbum);
            } else {
                newAlbum[key as keyof AlbumData] = value as any;
                setAlbum(newAlbum);
            }
        }
    };

    const resetTextFields = () => {
        if (originalAlbumData && setAlbum) {
            const newAlbum = { ...album };
            Object.keys(originalAlbumData).forEach((key) => {
                if (key !== 'image') {
                    newAlbum[key as keyof AlbumData] =
                        originalAlbumData[key as keyof AlbumData];
                }
            });
            setAlbum(newAlbum);
        }
    };

    useEffect(() => {
        // Fetch the original album data from local storage when the component mounts
        const storedAlbumData = getFromLocalStorage('album-data');
        if (storedAlbumData) {
            setOriginalAlbumData(JSON.parse(storedAlbumData));
        }
    }, []);

    return (
        <div>
            <div className="w-10/12 mx-auto bg-gray-100 rounded-lg flex justify-around p-1 text-slate-600 mb-2">
                <Button
                    className={`text-xs flex justify-center rounded-lg mr-1 p-1 w-1/2 ${activeTab == 0 ? 'bg-white' : 'bg-gray-100'}`}
                    onClick={() => setActiveTab(0)}
                >
                    General
                </Button>
                <Button
                    className={`text-xs flex justify-center rounded-lg ml-1 p-1 w-1/2 ${activeTab == 1 ? 'bg-white' : 'bg-gray-100'}`}
                    onClick={() => setActiveTab(1)}
                >
                    Advanced
                </Button>
            </div>
            <div>
                {activeTab === 0 ? (
                    <div className='h-[70vh] overflow-scroll'>
                        {album &&
                            textFields?.map((item: any) => (
                                <Input
                                    key={item}
                                    label={item}
                                    value={album[item as keyof AlbumData]}
                                    isClearable={false}
                                    onChange={(e) =>
                                        handleTextInputChange(e, item)
                                    }
                                />
                            ))}
                        {album?.tags?.map((item: any, index: number) => (
                            <Input
                                key={`genre-${index + 1}`}
                                label={`Genre # ${index + 1}`}
                                value={item}
                                isClearable={false}
                                onChange={(e) =>
                                    handleTextInputChange(e, 'tags', index)
                                }
                            />
                        ))}
                    </div>
                ) : (
                    <div className='h-[75vh] overflow-scroll'>
                        {album?.tracklist?.map((item: any, index: number) => (
                            <Input
                                key={`track-${index}`}
                                label={`Track ${index + 1}`}
                                value={item}
                                isClearable={false}
                                onChange={(e) =>
                                    handleTextInputChange(e, 'tracklist', index)
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
            {/* <div className="w-full flex justify-center my-2">
                <ToolTip hint="Reset" position="bottom">
                    <Button
                        onClick={resetTextFields}
                        className="daisy-btn daisy-btn-md daisy-btn-circle daisy-btn-ghost hover:bg-gray-100"
                    >
                        <ArrowsCounterClockwise size={24} />
                    </Button>
                </ToolTip>
            </div> */}
        </div>
    );
};

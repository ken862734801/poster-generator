import { Button, Input } from '../ui';
import { AlbumData, getFromLocalStorage } from '@/utils';
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

    const getTextFields = () => {
        if (album) {
            return Object.keys(album).filter(
                (key) =>
                    key !== 'image_url' && key !== 'tracks' && key !== 'genres'
            );
        }
    };

    const textFields = getTextFields();

    const handleTextInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        key: keyof AlbumData,
        index = 0
      ) => {
        const { value } = e.target;
        if (!album || !setAlbum) return;
      
        // shallow‐copy album
        const newAlbum = { ...album };
      
        if (key === 'tracks') {
          // newAlbum.tracks is Track[] | undefined
          const old = newAlbum.tracks ?? [];
          const updated = old.map((t:any, i:any) =>
            i === index
              ? { ...t, name: value }   // update only the name
              : t
          );
          newAlbum.tracks = updated;
        } else if (
          Array.isArray(newAlbum[key]) &&
          typeof newAlbum[key]?.[index] === 'string'
        ) {
          // e.g. genres: string[]
          const old = [...(newAlbum[key] as unknown as string[])];
          old[index] = value;
          newAlbum[key] = old as any;
        } else {
          // any other scalar field
          (newAlbum as any)[key] = value;
        }
      
        setAlbum(newAlbum);
      };
      

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
                        {album?.genres?.map((item: any, index: number) => (
                            <Input
                                key={`genre-${index + 1}`}
                                label={`Genre # ${index + 1}`}
                                value={item}
                                isClearable={false}
                                onChange={(e) =>
                                    handleTextInputChange(e, 'genres', index)
                                }
                            />
                        ))}
                    </div>
                ) : (
                    <div className='h-[75vh] overflow-scroll'>
                        {album?.tracks?.map((track: any, index: number) => (
                            <Input
                                key={`track-${track.track_number}`}
                                label={`Track ${track.track_number}`}
                                value={track.name}
                                isClearable={false}
                                onChange={(e) =>
                                    handleTextInputChange(e, 'tracks', index)
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

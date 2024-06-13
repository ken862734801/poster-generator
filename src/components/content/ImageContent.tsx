import { useEffect, useState } from 'react';
import { Thumbnail } from '../ui';
import { AlbumData, getFromLocalStorage, saveToLocalStorage } from '@/utils';

export interface ImageContentProps {
    album?: AlbumData;
    setAlbum?: (album: AlbumData) => void;
}

export const ImageContent: React.FC<ImageContentProps> = ({
    album,
    setAlbum,
}) => {
    const [library, setLibrary] = useState<any[]>([]);

    useEffect(() => {
        const savedImages = getFromLocalStorage('image-library');
        if (savedImages) {
            setLibrary(JSON.parse(savedImages));
        }
    }, []);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const uploadedFile = e.target.files?.[0];
            if (uploadedFile) {
                const reader = new FileReader();
                reader.onload = () => {
                    const newLibrary = [...library, reader.result];
                    setLibrary(newLibrary);
                    saveToLocalStorage('image-library', newLibrary);
                };
                reader.readAsDataURL(uploadedFile);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleImageUpdate = (image: string) => {
        if (album && setAlbum) {
            const newAlbum = { ...album, image };
            setAlbum(newAlbum);
        }
    };

    const handleImageDelete = (index: number) => {
        const newLibrary = library.filter((_, i) => i !== index);
        setLibrary(newLibrary);
        saveToLocalStorage('image-library', newLibrary);
    };

    return (
        <>
            <div className="h-[75vh] overflow-scroll">
                {library.length == 0 ? (
                    <div className="relative h-full">
                        <div
                            style={{ transform: 'translate(-50%, 10%)' }}
                            className="absolute top-1/4 left-1/2"
                        >
                            <img
                                className="w-[8.25rem] h-[8.25rem]"
                                src="./placeholder.jpg"
                                alt='placeholder image'
                            />
                            <p className="uppercase text-gray-300 text-center text-[.70rem] leading-5 my-4">
                                Your uploaded images will appear here
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-3 px-4">
                        {library?.map((image, index) => (
                            <Thumbnail
                                key={index}
                                image={image}
                                handleThumbnailClick={() =>
                                    handleImageUpdate(image)
                                }
                                handleTrashClick={() =>
                                    handleImageDelete(index)
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="mt-2 border-t border-solid border-gray-200 flex justify-center">
                <input
                    id="file-input"
                    type="file"
                    onChange={(e) => handleImageUpload(e)}
                />
                <label
                    role="button"
                    tabIndex={0}
                    htmlFor="file-input"
                    className="font-normal text-slate-600 daisy-btn daisy-btn-sm daisy-btn-wide mt-4 border-none bg-gray-100 hover:bg-gray-100"
                >
                    Upload Image
                </label>
            </div>
        </>
    );
};

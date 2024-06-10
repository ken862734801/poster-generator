import Accordion from '../ui/Accordion';
import { Button, Input, ToolTip } from '../ui';
import { AlbumData, getFromLocalStorage } from '@/utils';
import { ArrowsCounterClockwise } from '@phosphor-icons/react';

export type TextContentProps = {
    album?: AlbumData;
    setAlbum?: (album: AlbumData) => void;
};

export const TextContent: React.FC<TextContentProps> = ({
    album,
    setAlbum,
}) => {
    const getTextFields = () => {
        if (album) {
            return Object.keys(album).filter(
                (key) =>
                    key !== 'image' && key !== 'tracklist' && key !== 'tags'
            );
        }
    };

    const textFields = getTextFields();

    // const handleTextInputChange = (
    //     e: React.ChangeEvent<HTMLInputElement>,
    //     key: any,
    //     index = 0
    // ) => {
    //     const { value } = e.target;
    //     if(album && setAlbum){
    //         const newAlbum = { ...album };
    //         if(Array.isArray(newAlbum[key as keyof AlbumData])){
    //             console.log('This is an array!');
    //         } else {
    //             console.log('This is not an array!');
    //             newAlbum[key as keyof AlbumData] = value as any;
    //         }
    //     }
    // };

    const handleTextInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index = 0
    ) => {
        const { value, name } = e.target;
        if (album && setAlbum) {
            const newAlbum = { ...album };
            if (Array.isArray(newAlbum[name as keyof AlbumData])) {
                newAlbum[name as keyof AlbumData][index] = value;
                setAlbum(newAlbum);
            } else {
                newAlbum[name as keyof AlbumData] = value;
                setAlbum(newAlbum);
            }
        }
    };

    return (
        <div>
            <Accordion>
                <Accordion.Item title="General" isChecked>
                    {album && 
                        textFields?.map((item: any) => (
                            <Input
                                key={item}
                                name={item}
                                label={item}
                                value={album[item as keyof AlbumData]}
                                onChange={(e) => handleTextInputChange(e)}
                                isClearable={false}
                            />
                        ))}
                    
                    {/* {album?.tags?.map((item: any, index: number) => (
                        <Input
                            key={item + index}
                            name={'tags'}
                            label={`Genre # ${index + 1}`}
                            value={item}
                            onChange={(e) => handleTextInputChange(e, index)}
                            isClearable={false}
                        />
                    ))} */}
                </Accordion.Item>
                {/* <Accordion.Item title="Advanced">
                {album?.tracklist?.map((item, index) => (
                    <Input
                        key={name + index}
                        name={item}
                        label={`Track ${index + 1}`}
                        value={item}
                    />
                ))}
            </Accordion.Item> */}
            </Accordion>
            <div className="w-full flex justify-center my-4">
                <ToolTip hint="Reset" position="bottom">
                    <Button className="daisy-btn daisy-btn-md daisy-btn-circle daisy-btn-ghost hover:bg-gray-100">
                        <ArrowsCounterClockwise size={24} />
                    </Button>
                </ToolTip>
            </div>
        </div>
    );
};

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Input } from '../ui';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useState } from 'react';

export type SearchFormProps = {
    onSearch: (artist: string, album: string) => void;
};

export type FormData = {
    artist: string;
    album: string;
};

const icon = {
    search: <MagnifyingGlass size={18} />,
};

export const SearchContent: React.FC<SearchFormProps> = ({ onSearch }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const [artist, setArtist] = useState<string>('');
    const [album, setAlbum] = useState<string>('');

    const onSubmit: SubmitHandler<FormData> = () => {
        onSearch(artist, album);
        setArtist('');
        setAlbum('');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="artist"
                label="Artist"
                placeholder="Enter artist..."
                value={artist}
                register={register}
                leadingIcon={icon.search}
                onChange={(e) => setArtist(e.target.value)}
                onClick={() => setArtist('')}
                error={errors.artist && 'This field is required.'}
                isRequired
            />
            <Input
                name="album"
                label="Album"
                placeholder="Enter album..."
                value={album}
                register={register}
                leadingIcon={icon.search}
                onChange={(e) => setAlbum(e.target.value)}
                onClick={() => setAlbum('')}
                error={errors.album && 'This field is required.'}
                isRequired
            />
            <div className="flex justify-center w-10/12 mx-auto my-6">
                <Button className="text-sm text-slate-600 bg-gray-100 w-40 mx-auto rounded-lg py-1.5">
                    Search
                </Button>
            </div>
        </form>
    );
};

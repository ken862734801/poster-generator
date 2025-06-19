import { useForm, SubmitHandler } from 'react-hook-form';
import { useStore } from '@/store/useStore';
import { useSearch } from '@/hooks';
import SearchBar from './SearchBar';
import { Button } from '@/components/common';

export const SearchPanel: React.FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useForm<Query>({
    defaultValues: { artist: '', album: '' },
  });
  const { mutate } = useSearch();

  const album = watch('album');
  const artist = watch('artist');

  const isLoading = useStore((state) => state.isLoading);

  const onSubmit: SubmitHandler<Query> = (query) => {
    mutate(query, {
      onSettled: () => {
        reset();
      },
    });
  };

  return (
    <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
      <SearchBar
        label="Artist"
        placeholder="Artist..."
        register={register('artist', { required: 'Artist is required.' })}
        error={errors.artist?.message}
        onClear={() => setValue('artist', '')}
        isClearable={!!artist}
      />
      <SearchBar
        label="Album"
        placeholder="Album..."
        register={register('album', { required: 'Album is required.' })}
        error={errors.album?.message}
        onClear={() => setValue('album', '')}
        isClearable={!!album}
      />
      <div className="flex flex-col justify-center mt-7">
        <Button
          className={`mx-auto font-normal btn btn-sm btn-block bg-[var(--button-hover)] hover:bg-[var(--button-default)] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SearchPanel;

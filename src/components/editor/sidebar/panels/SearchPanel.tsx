import { useSearch } from '@/hooks';
import { useForm, SubmitHandler } from 'react-hook-form';

export const SearchPanel = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Query>();

  const { mutate, isPending } = useSearch();

  const onSubmit: SubmitHandler<Query> = (query) => {
    mutate(query, {
      onSuccess: () => {
        reset()
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="artist-input">
          Artist <span>*</span>
        </label>
        <input
          id="artist-input"
          {...register('artist', { required: 'Artist is required.' })}
          placeholder="Enter an artist..."
        />
        {errors.artist && <p>{errors.artist.message}</p>}
      </div>
      <div>
        <label htmlFor="album-input">
          Album <span>*</span>
        </label>
        <input
          id="album-input"
          {...register('album', { required: 'Album is required.' })}
          placeholder="Enter an album..."
        />
        {errors.album && <p>{errors.album.message}</p>}
      </div>
      <div>
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SearchPanel;

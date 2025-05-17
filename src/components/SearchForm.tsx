import { useForm, SubmitHandler } from 'react-hook-form';
import { useSearch } from '@/hooks/useSearch';
import { Payload } from '@/types';

export default function SearchForm() {
  const { mutate: search, isPending } = useSearch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Payload>();

  const onSubmit: SubmitHandler<Payload> = (data) => {
    search(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Artist</label>
      <input
        placeholder="Artist"
        {...register('artist', { required: 'Artist is required.' })}
      />
      {errors.artist && <p>{errors.artist.message}</p>}
      <label>Album</label>
      <input
        placeholder="Album"
        {...register('album', { required: 'Album is required.' })}
      />
      {errors.album && <p>{errors.album.message}</p>}
      <button type="submit" className="" disabled={isPending}>
        {isPending ? 'Loading...' : 'Search'}
      </button>
    </form>
  );
}

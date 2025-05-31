import { useMutation } from '@tanstack/react-query';
import { fetchData } from '@/lib';
import { useStore } from '@/store/useStore';

export const useSearch = () => {
  const setIsLoading = useStore((state) => state.setIsLoading);
  const setData = useStore((state) => state.setData);

  return useMutation({
    mutationFn: fetchData,
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: (data) => {
      setData(data);
    },
    onError: (error, variables) => {
      console.error('Error fetching data:', error);
      window.alert(
        `Oops! ${variables.album} by ${variables.artist} could not found. Please try again later.`
      );
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });
};

export default useSearch;

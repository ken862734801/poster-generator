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
    onSettled: () => {
      setIsLoading(false);
    }
  });
};

export default useSearch;

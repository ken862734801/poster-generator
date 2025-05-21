import { useMutation } from '@tanstack/react-query';
import { fetchData } from '@/lib';

export const useSearch = () => {
  return useMutation({
    mutationFn: fetchData,
  });
};

export default useSearch;
import { useMutation } from '@tanstack/react-query';
import { Data, Payload } from '@/types';
import { getData } from '@/lib/api';
import { useStore } from '@/store';

export function useSearchData() {
  const setData = useStore((s) => s.setData);
  const setLoading = useStore((s) => s.setLoading);

  return useMutation<Data, Error, Payload>({
    mutationFn: getData,

    onMutate: () => setLoading(true),
    onSuccess: (data) => setData(data),
    onError: (error) => window.alert(error.message),
    onSettled: () => setLoading(false),
  });
}

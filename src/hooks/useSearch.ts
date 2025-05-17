import { useMutation } from '@tanstack/react-query';
import { Data, Payload } from '@/types';
import { getData } from '@/lib/api';
import { useCanvasStore } from '@/store/canvasStore';

export function useSearch() {
  const setData = useCanvasStore((s) => s.setData);

  return useMutation<Data, Error, Payload>({
    mutationFn: (payload) => getData(payload),
    onSuccess: (data) => {
      setData(data);
    },
  });
}

import { create } from 'zustand';
import { Data } from '@/types';

interface StoreState {
  data: Data | null;
  setData: (data: Data) => void;

  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  data: null,
  setData: (x) => set({ data: x }),

  loading: false,
  setLoading: (x) => set({ loading: x }),
}));

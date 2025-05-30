import { create } from 'zustand';

export interface Store {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;

  data: Data | null;
  setData: (state: any) => void;
}

export const useStore = create<Store>((set) => ({
  isLoading: false,
  setIsLoading: (state) => set({ isLoading: state }),

  data: null,
  setData: (state) => set({ data: state }),
}));

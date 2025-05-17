import { CanvasStore } from '@/types';
import { create } from 'zustand';

export const useCanvasStore = create<CanvasStore>((set) => ({
  data: {
    album: '',
    artist: '',
    duration: '',
    genres: [],
    image_url: '',
    record_label: '',
    release_date: '',
    release_year: '',
  },
  setData: (s) => set({ data: s }),
}));

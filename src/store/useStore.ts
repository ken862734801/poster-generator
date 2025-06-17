import { create } from 'zustand';

interface Store {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;

  data: Data | null;
  setData: (state: any) => void;

  canvas: any;
  setCanvas: (state: any) => void;

  workarea: any;
  setWorkarea: (state: any) => void;

  colors: Record<number, string>;
  setColor: (target: number, value: string) => void;
}

export const useStore = create<Store>((set) => ({
  isLoading: false,
  setIsLoading: (state) => set({ isLoading: state }),

  data: null,
  setData: (state) => set({ data: state }),

  canvas: null,
  setCanvas: (state) => set({ canvas: state }),

  workarea: null,
  setWorkarea: (state) => set({ workarea: state }),

  colors: {
    0: '#FFFFFF',
    1: '#000000',
    2: '#000000',
    3: '#000000',
    4: '000000',
    5: '000000',
    6: '000000',
  },
  setColor: (target, color) =>
    set((state) => ({ colors: { ...state.colors, [target]: color } })),
}));

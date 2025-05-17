export interface CanvasStore {
  data: Data
  setData: (x: Data) => void
}

export interface Data {
  album: artist;
  artist: string;
  duration: string;
  genres: string[];
  image_url: string;
  record_label: string;
  release_date: string;
  release_year: string;
}

export interface Payload {
  album: string;
  artist: string;
}


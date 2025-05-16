import { Data, Payload } from '@/types';

export async function getData(payload: Payload): Promise<Data> {
  const { artist, album } = payload;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

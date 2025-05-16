export async function getData(artist: string, album: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}artist=${artist}&album=${album}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const fetchData = async ({ album, artist }: Query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}artist=${artist}&album=${album}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = response.json();
  return data;
};

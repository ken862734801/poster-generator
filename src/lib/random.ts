import data from '../data/data.json';

export const getRandom = () => {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
};

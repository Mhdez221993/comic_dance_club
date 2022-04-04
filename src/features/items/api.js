import axios from 'axios';

const BASE_URL = 'https://comic-dance-club.herokuapp.com/api/dances';

export const fetchItems = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createItems = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

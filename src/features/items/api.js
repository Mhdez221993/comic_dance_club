import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/dances';

export const fetchItems = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createItem = async (payload = {}) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.post(BASE_URL, { item: payload }, {
    headers: { Authorization: token },
  });
  return res.data;
};

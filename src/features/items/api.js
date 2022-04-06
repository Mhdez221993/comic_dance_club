import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/dances';

export const fetchItems = async () => {
  const response = await axios.get(BASE_URL);
  const data = await response.data;
  return data;
};

export const createItem = async (payload = {}) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.post(BASE_URL, { item: payload }, {
    headers: { Authorization: token },
  });
  return res.data;
};

export const deleteItem = async (id) => {
  const token = JSON.parse(localStorage.getItem('token'));
  await axios.delete(`${BASE_URL}/${id}`, {
    headers: { Authorization: token },
  });
};

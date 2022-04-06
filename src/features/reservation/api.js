import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/reservations';

export const loadReservations = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.get(BASE_URL, {
    headers: { Authorization: token },
  });

  return res.data;
};

export const createReservation = async (payload = {}) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.post(BASE_URL, { reservation: payload }, {
    headers: { Authorization: token },
  });

  return res.data;
};

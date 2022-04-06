import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
// const BASE_URL = 'https://comic-dance-club.herokuapp.com';

export const authApi = (endPoint = 'users', payload = {}) => axios
  .post(`${BASE_URL}/${endPoint}`, {
    user: payload,
  })
  .then((response) => {
    if (response.headers.authorization) {
      localStorage.setItem('token', JSON.stringify(response.headers.authorization));
      const { role } = response.data;
      if (role) {
        localStorage.setItem('role', JSON.stringify(role));
        localStorage.setItem('status', JSON.stringify(response.data.status));
      }
    }

    return response.data;
  });

export const destroySession = async () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const res = await axios.delete(`${BASE_URL}/users/sign_out`, { headers: { Authorization: token } });

  localStorage.removeItem('token');
  localStorage.removeItem('status');
  localStorage.removeItem('role');
  return res.data;
};

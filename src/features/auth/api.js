import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const authApi = (endPoint = 'users', payload = {}) => axios
  .post(`${BASE_URL}/${endPoint}`, {
    user: payload,
  })
  .then((response) => {
    if (response.headers.authorization) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.headers.authorization));
    }

    return response.data;
  });

export default authApi;

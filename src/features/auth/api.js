import axios from 'axios';

const BASE_URL = 'https://comic-dance-club.herokuapp.com';

const authApi = (endPoint = 'users', payload = {}) => axios
  .post(`${BASE_URL}/${endPoint}`, {
    user: payload,
  })
  .then((response) => {
    if (response.headers.authorization) {
      localStorage.setItem('token', JSON.stringify(response.headers.authorization));
    }

    return response.data;
  });

export default authApi;

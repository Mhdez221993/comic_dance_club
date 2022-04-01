const BASE_URL = 'https://comic-dance-club.herokuapp.com';

const authApi = async (endPoint = 'users', payload = {}) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: payload })
  };

  const response = await fetch(`${BASE_URL}/${endPoint}`, requestOptions);

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    return {}
  }
};

export default authApi;

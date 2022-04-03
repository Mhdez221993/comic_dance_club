const BASE_URL = 'http://localhost:3000';

const authApi = async (endPoint = 'users', payload = {}) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: payload })
  };

  try {
    const response = await fetch(`${BASE_URL}/${endPoint}`, requestOptions);
    const data = await response.json();
    return data;
  } catch (e) {
    return { message: ['Failed to fetch'], status: false }
  }
};

export default authApi;

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    const response = await api.get('/profile', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getDoctors = async () => {
  try {
    const response = await api.get('/doctors');
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getAISystems = async () => {
  try {
    const response = await api.get('/ai');
    return response.data;
  } catch (error) {
    console.error('Error fetching AI systems:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export default api;

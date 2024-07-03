import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Asegúrate de que esta URL apunte a tu backend
});

export const getDoctors = async () => {
  try {
    const response = await api.get('/doctors');
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const getAISystems = async () => {
  try {
    const response = await api.get('/ai');
    return response.data;
  } catch (error) {
    console.error('Error fetching AI systems:', error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export default api;

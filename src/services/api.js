import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Asegúrate de que esta URL apunte a tu backend
});

export const getDoctors = async () => {
  try {
    const response = await api.get('/doctors'); // Asegúrate de que este endpoint exista en tu backend
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const getAISystems = async () => {
  try {
    const response = await api.get('/ai'); // Asegúrate de que este endpoint exista en tu backend
    return response.data;
  } catch (error) {
    console.error('Error fetching AI systems:', error);
    throw error;
  }
};

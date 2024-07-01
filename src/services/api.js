import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getInstitutions = () => axios.get(`${API_URL}/institutions`);
// Otros servicios...

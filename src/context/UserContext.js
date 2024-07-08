import React, { createContext, useContext, useState, useEffect } from 'react';
import { getProfile, loginUser } from '../services/api';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      const fetchProfile = async () => {
        try {
          const profileData = await getProfile();
          setUser(profileData);
        } catch (error) {
          console.error('Error fetching profile data:', error);
          localStorage.removeItem('token'); // Clear token if it is invalid
        }
      };
      fetchProfile();
    }
  }, []);

  const login = async (credentials) => {
    try {
      const { token } = await loginUser(credentials);
      console.log(token);
      localStorage.setItem('token', token);
      const profileData = await getProfile();
      console.log(profileData);
      setUser(profileData);
    } catch (error) {
      console.error('Login error:', error.message);
      throw new Error('Login failed. Please check your credentials and try again.'); // More user-friendly error message
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

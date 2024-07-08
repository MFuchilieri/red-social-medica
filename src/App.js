import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import SideMenu from './components/Layout/SideMenu';
import Header from './components/Layout/Header';
import Profile from './components/Profile';
import Login from './components/Login';
import RegisterDoctor from './components/RegisterDoctor';
import RegisterInstitution from './components/RegisterInstitution';
import RegisterAI from './components/RegisterAI';
import { UserProvider } from './context/UserContext';

const App = () => {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Header toggleTheme={toggleTheme} />
          <SideMenu />
          <main style={{ marginLeft: 240, padding: 75 }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register-doctor" element={<RegisterDoctor />} />
              <Route path="/register-institution" element={<RegisterInstitution />} />
              <Route path="/register-ai" element={<RegisterAI />} />
            </Routes>
          </main>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;

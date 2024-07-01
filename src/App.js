import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DoctorList from './components/DoctorList';
import AIList from './components/AIList';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Layout/Header';
import SideMenu from './components/Layout/SideMenu';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Router>
          <Header />
          <SideMenu />
          <div style={{ marginLeft: 240, padding: 16 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<DoctorList />} />
              <Route path="/ai" element={<AIList />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;



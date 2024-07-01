import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Institutions from './components/Institutions';
import Doctors from './components/Doctors';
import AI from './components/AI';
import Studies from './components/Studies';
import Jobs from './components/Jobs';

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/institutions" element={<Institutions />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/ai" element={<AI />} />
    <Route path="/studies" element={<Studies />} />
    <Route path="/jobs" element={<Jobs />} />
  </Routes>
);

export default RoutesComponent;

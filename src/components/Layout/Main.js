import React from 'react';
import { Toolbar } from '@mui/material';
import RoutesComponent from '../../routes';

const Main = () => {
  return (
    <main style={{ marginLeft: 240, padding: 16 }}>
      <Toolbar />
      <RoutesComponent />
    </main>
  );
};

export default Main;

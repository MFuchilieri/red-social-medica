import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Red Social Médica
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body1">{theme.palette.mode === 'light' ? 'Claro' : 'Oscuro'}</Typography>
          <Switch checked={theme.palette.mode === 'dark'} onChange={toggleTheme} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


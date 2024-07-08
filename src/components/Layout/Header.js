import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Switch, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useUser } from '../../context/UserContext';

const Header = ({ toggleTheme }) => {
  const theme = useTheme();
  const { user, logout } = useUser();

  return (
    <AppBar position="fixed" style={{ marginLeft: 240 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: theme.spacing(2) }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {user ? `Hola, ${user.name}` : 'Bienvenido'}
        </Typography>
        <Switch checked={theme.palette.mode === 'dark'} onChange={toggleTheme} />
        {user && (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

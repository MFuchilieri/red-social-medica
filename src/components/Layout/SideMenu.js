import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, Typography, Avatar, Box } from '@mui/material';
import { Home, Business, LocalHospital, Computer, ListAlt, Work } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
  },
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const UserContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const SideMenu = () => {
  const { user } = useUser();
  const isLoggedIn = !!user; // Verifica si el usuario está logueado

  return (
    <DrawerStyled variant="permanent">
      <ToolbarStyled />
      <UserContainer>
        <UserInfo>
          <Avatar alt={user?.name} src={user?.avatarUrl || ''} style={{ width: 64, height: 64 }} />
          <Typography variant="h6" mt={2}>{user?.name || 'Usuario Anónimo'}</Typography>
        </UserInfo>
      </UserContainer>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/institutions" disabled={!isLoggedIn}>
          <ListItemIcon><Business /></ListItemIcon>
          <ListItemText primary="Instituciones" />
        </ListItem>
        <ListItem button component={Link} to="/doctors" disabled={!isLoggedIn}>
          <ListItemIcon><LocalHospital /></ListItemIcon>
          <ListItemText primary="Médicos" />
        </ListItem>
        <ListItem button component={Link} to="/ai" disabled={!isLoggedIn}>
          <ListItemIcon><Computer /></ListItemIcon>
          <ListItemText primary="IA" />
        </ListItem>
        <ListItem button component={Link} to="/studies" disabled={!isLoggedIn}>
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Lista de Estudios" />
        </ListItem>
        <ListItem button component={Link} to="/jobs" disabled={!isLoggedIn}>
          <ListItemIcon><Work /></ListItemIcon>
          <ListItemText primary="Ofertas Laborales" />
        </ListItem>
      </List>
    </DrawerStyled>
  );
};

export default SideMenu;

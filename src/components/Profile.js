import React from 'react';
import { useUser } from '../context/UserContext';
import { Box, Typography, Avatar } from '@mui/material';

const Profile = () => {
  const { user } = useUser();

  if (!user) {
    return <Typography>Cargando perfil...</Typography>;
  }

  return (
    <Box p={3}>
      <Avatar alt={user.name} src={user.avatarUrl || ''} style={{ width: 64, height: 64, marginBottom: 16 }} />
      <Typography variant="h4">{user.name}</Typography>
      <Typography variant="subtitle1">{user.email}</Typography>
      <Typography variant="body1">Rol: {user.role}</Typography>
    </Box>
  );
};

export default Profile;

import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user } = useUser();

  return (
    <Container maxWidth="sm">
      <Box mt={8}>
        <Typography variant="h4">Perfil del Usuario</Typography>
        <Typography variant="h6">Nombre: {user.name}</Typography>
        <Typography variant="h6">Email: {user.email}</Typography>
        <Typography variant="h6">Rol: {user.role}</Typography>
        {user.role === 'institucion' && (
          <>
            <Typography variant="h6">Nombre de la Institución: {user.institutionName}</Typography>
            <Typography variant="h6">Domicilio: {user.address}</Typography>
            <Typography variant="h6">Teléfono: {user.phone}</Typography>
            <Typography variant="h6">Nombre del Contacto: {user.contactName}</Typography>
          </>
        )}
        {/* Puedes agregar más detalles específicos para otros roles si es necesario */}
      </Box>
    </Container>
  );
};

export default Profile;

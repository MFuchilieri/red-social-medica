import React from 'react';
import { Button, Typography, Container, Box, Paper } from '@mui/material';

const Register = ({ onSelect, onBack }) => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '16px', marginTop: '32px' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">Crear Cuenta</Typography>
          <Button onClick={() => onSelect('medico')} variant="outlined" fullWidth style={{ marginTop: '16px' }}>
            Registrar Médico
          </Button>
          <Button onClick={() => onSelect('institucion')} variant="outlined" fullWidth style={{ marginTop: '16px' }}>
            Registrar Institución
          </Button>
          <Button onClick={() => onSelect('ia')} variant="outlined" fullWidth style={{ marginTop: '16px' }}>
            Registrar IA
          </Button>
          <Button onClick={onBack} variant="outlined" fullWidth style={{ marginTop: '16px' }}>
            Volver
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;

import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Grid, Paper } from '@mui/material';
import { useUser } from '../context/UserContext';

const Login = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleLogin = (event) => {
    event.preventDefault();
    const loggedUser = {
      name: 'Nombre Usuario',
      email: email,
      role: 'medico',
      avatarUrl: 'https://via.placeholder.com/150'
    };
    setUser(loggedUser);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '16px', marginTop: '32px' }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">Login</Typography>
          <Box component="form" onSubmit={handleLogin} mt={2} width="100%">
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
            <Button variant="outlined" color="primary" fullWidth onClick={onRegister} style={{ marginTop: '16px' }}>
              Registrar
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;



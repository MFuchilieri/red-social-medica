import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper, Modal, Grid } from '@mui/material';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
   
    try {
      await login({ email: trimmedEmail, password: trimmedPassword });
      console.log("handleLogin: " + trimmedEmail)
      navigate('/profile');
    } catch (error) {
        setError(error.response ? error.response.data.message : 'Login fallo. Please check your credentials and try again.');
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
              Login
            </Button>
            <Button variant="outlined" color="primary" fullWidth onClick={handleOpen} style={{ marginTop: '16px' }}>
              Registrar
            </Button>
          </Box>
        </Box>
      </Paper>

      <StyledModal open={open} onClose={handleClose}>
        <Paper elevation={3} style={{ padding: '16px', maxWidth: '400px', width: '100%' }}>
          <Typography variant="h5" align="center">Registrar</Typography>
          <Grid container spacing={2} justifyContent="center" style={{ marginTop: '16px' }}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => navigate('/register-doctor')}
              >
                Registrar Médico
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => navigate('/register-institution')}
              >
                Registrar Institución
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => navigate('/register-ai')}
              >
                Registrar IA
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleClose}
              >
                Volver
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </StyledModal>
    </Container>
  );
};

export default Login;


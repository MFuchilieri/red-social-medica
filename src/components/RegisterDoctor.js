import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerUser } from '../services/api';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Nombre es requerido'),
  username: yup.string().required('Nombre de usuario es requerido'),
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Confirmación de contraseña es requerida'),
  country: yup.string().required('País es requerido'),
  phone: yup.string().required('Teléfono es requerido'),
});

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const RegisterDoctor = () => {
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userData = {
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      role: 'medico',
      country: data.country,
      phone: data.phone,
    };

    try {
      await registerUser(userData);
      alert('Médico registrado exitosamente');
      reset();
      navigate('/');
    } catch (error) {
      alert('Error registrando médico');
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <FormContainer>
      <Typography variant="h5" gutterBottom>
        Registrar Médico
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={2} width="100%">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre de Usuario"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Correo Electrónico"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirmar Contraseña"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
            />
          )}
        />
        <Controller
          name="country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="País"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.country}
              helperText={errors.country ? errors.country.message : ''}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Teléfono"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ''}
            />
          )}
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="outlined" onClick={handleReset}>
            Limpiar
          </Button>
          <Button variant="contained" color="secondary" onClick={() => navigate('/')}>
            Volver
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Grabar
          </Button>
        </Box>
      </Box>
    </FormContainer>
  );
};

export default RegisterDoctor;

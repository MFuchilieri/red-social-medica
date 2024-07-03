import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerUser } from '../services/api';
import { styled } from '@mui/material/styles';

const schema = yup.object().shape({
  institutionName: yup.string().required('Nombre de la institución es requerido'),
  username: yup.string().required('Nombre de usuario es requerido'),
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir').required('Confirmación de contraseña es requerida'),
  country: yup.string().required('País es requerido'),
  address: yup.string().required('Domicilio es requerido'),
  phone: yup.string().required('Teléfono es requerido'),
  contactName: yup.string().required('Nombre del contacto es requerido'),
});

const FormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const RegisterInstitution = ({ onGoBack }) => {
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    const userData = {
      institutionName: data.institutionName,
      username: data.username,
      password: data.password,
      email: data.email,
      role: 'institucion',
      country: data.country,
      address: data.address,
      phone: data.phone,
      contactName: data.contactName,
    };

    try {
      await registerUser(userData);
      alert('Institución registrada exitosamente');
      reset();
      onGoBack();
    } catch (error) {
      alert('Error registrando institución');
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <FormContainer>
      <Typography variant="h5" gutterBottom>
        Registrar Institución
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={2} width="100%">
        <Controller
          name="institutionName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre de la Institución"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.institutionName}
              helperText={errors.institutionName ? errors.institutionName.message : ''}
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
          name="address"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Domicilio"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.address}
              helperText={errors.address ? errors.address.message : ''}
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
        <Controller
          name="contactName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre del Contacto"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.contactName}
              helperText={errors.contactName ? errors.contactName.message : ''}
            />
          )}
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="outlined" onClick={handleReset}>
            Limpiar
          </Button>
          <Button variant="contained" color="secondary" onClick={onGoBack}>
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

export default RegisterInstitution;

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('Nombre es requerido'),
  lastName: yup.string().required('Apellido es requerido'),
  username: yup.string().required('Nombre de usuario es requerido'),
  country: yup.string().required('País es requerido'),
  phone: yup.string().required('Número de teléfono es requerido'),
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirmación de contraseña es requerida'),
});

const RegisterDoctor = ({ onGoBack }) => {
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // Aquí iría la lógica para registrar al médico
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={2} width="100%">
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Nombre"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName.message : ''}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Apellido"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ''}
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
            label="Número de Teléfono"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone ? errors.phone.message : ''}
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
  );
};

export default RegisterDoctor;


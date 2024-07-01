import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  aiName: yup.string().required('Nombre del Sistema de IA es requerido'),
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es requerida'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Confirmación de contraseña es requerida'),
});

const RegisterAI = ({ onGoBack }) => {
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    // Aquí iría la lógica para registrar el sistema de IA
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} mt={2} width="100%">
      <Controller
        name="aiName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Nombre del Sistema de IA"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.aiName}
            helperText={errors.aiName ? errors.aiName.message : ''}
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

export default RegisterAI;




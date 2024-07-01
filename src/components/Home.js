import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import Login from './Login';
import Register from './Register';
import RegisterDoctor from './RegisterDoctor';
import RegisterInstitution from './RegisterInstitution';
import RegisterAI from './RegisterAI';
import Profile from './Profile';

const Home = () => {
  const { user } = useUser();
  const [registerStep, setRegisterStep] = useState(null);

  const handleRegister = () => {
    setRegisterStep('select');
  };

  const handleSelect = (type) => {
    setRegisterStep(type);
  };

  const handleBack = () => {
    setRegisterStep(null);
  };

  if (user) {
    return <Profile />;
  }

  if (registerStep === 'select') {
    return <Register onSelect={handleSelect} onBack={handleBack} />;
  }

  if (registerStep === 'medico') {
    return <RegisterDoctor onGoBack={handleBack} />;
  }

  if (registerStep === 'institucion') {
    return <RegisterInstitution onGoBack={handleBack} />;
  }

  if (registerStep === 'ia') {
    return <RegisterAI onGoBack={handleBack} />;
  }

  return <Login onRegister={handleRegister} />;
};

export default Home;

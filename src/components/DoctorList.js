import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { getDoctors } from '../services/api';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <Grid container spacing={3}>
      {doctors.map((doctor) => (
        <Grid item xs={12} sm={6} md={4} key={doctor.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{doctor.name}</Typography>
              <Typography variant="body2">{doctor.specialty}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DoctorList;

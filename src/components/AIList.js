import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { getAISystems } from '../services/api';

const AIList = () => {
  const [aiSystems, setAISystems] = useState([]);

  useEffect(() => {
    const fetchAISystems = async () => {
      try {
        const data = await getAISystems();
        setAISystems(data);
      } catch (error) {
        console.error('Error fetching AI systems:', error);
      }
    };

    fetchAISystems();
  }, []);

  return (
    <Grid container spacing={3}>
      {aiSystems.map((ai) => (
        <Grid item xs={12} sm={6} md={4} key={ai.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{ai.name}</Typography>
              <Typography variant="body2">{ai.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AIList;

import React from 'react';
import { Button, CardContent, Typography, Card as CardBox, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { getPerson } from 'shared/lib/router';
import { Person } from 'shared/api/people';

type CardProps = {
  item: Person;
};

export const Card = ({ item: { name, height, mass, id, gender, birthYear } }: CardProps) => {
  return (
    <CardBox variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {name}
        </Typography>
        <Typography color="text.secondary">
          gender:{' '}
          <Typography component="span" color="text.primary">
            {gender}
          </Typography>
        </Typography>
        <Typography color="text.secondary">
          height/weight:{' '}
          <Typography component="span" color="text.primary">
            {height} / {mass}
          </Typography>
        </Typography>
        <Typography color="text.secondary">
          birth year:{' '}
          <Typography component="span" color="text.primary">
            {birthYear}
          </Typography>
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Link to={getPerson(id)}>
            <Button size="small" variant="outlined">
              More
            </Button>
          </Link>
        </Box>
      </CardContent>
    </CardBox>
  );
};

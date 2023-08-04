import React from 'react';
import { Button, CardContent, Typography, Card as MCard, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { getPerson } from 'shared/lib/router';
import { Person } from 'shared/api/people';

type CardProps = {
  item: Person;
};

export const Card = ({ item: { name, height, mass, id, gender, birthYear } }: CardProps) => {
  return (
    <MCard variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {name}
        </Typography>
        <Typography color="text.secondary">gender: {gender}</Typography>
        <Typography color="text.secondary">
          height: {height} / weight: {mass}
        </Typography>
        <Typography color="text.secondary">birth year: {birthYear}</Typography>
        <Box sx={{ mt: 3 }}>
          <Link to={getPerson(id)}>
            <Button size="small" variant="outlined">
              More
            </Button>
          </Link>
        </Box>
      </CardContent>
    </MCard>
  );
};

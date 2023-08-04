import React from 'react';
import { Person } from 'shared/api/people';
import { Grid } from '@mui/material';
import { Card } from '../Card';

type CardsProps = {
  list: Person[];
};

export const Cards = ({ list }: CardsProps) => {
  return (
    <Grid container spacing={2}>
      {list.map((item) => (
        <Grid key={item.id} item xs={6} md={4}>
          <Card item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

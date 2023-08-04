import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { PersonFull } from 'shared/api/people';

type CardDetailProps = {
  item: PersonFull;
};

export const CardDetail = ({
  item: { name, height, mass, birthYear, gender, hairColor, skinColor, eyeColor },
}: CardDetailProps) => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 5 }}>
        {name}
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <>
              <CardContent>
                <Typography color="text.secondary">
                  gender:{' '}
                  <Typography component="span" color="text.primary">
                    {gender}
                  </Typography>
                </Typography>
                <Typography color="text.secondary">
                  height:{' '}
                  <Typography component="span" color="text.primary">
                    {height}
                  </Typography>
                </Typography>
                <Typography color="text.secondary">
                  weight:{' '}
                  <Typography component="span" color="text.primary">
                    {mass}
                  </Typography>
                </Typography>
                <Typography color="text.secondary">
                  birth year:{' '}
                  <Typography component="span" color="text.primary">
                    {birthYear}
                  </Typography>
                </Typography>
                <Typography color="text.secondary">
                  hair color:{' '}
                  <Typography component="span" color="text.primary">
                    {hairColor}
                  </Typography>
                </Typography>
                <Typography color="text.secondary">
                  skin color:{' '}
                  <Typography component="span" color="text.primary">
                    {skinColor}
                  </Typography>
                </Typography>
                <Typography color="text.secondary">
                  eye color:{' '}
                  <Typography component="span" color="text.primary">
                    {eyeColor}
                  </Typography>
                </Typography>
              </CardContent>
            </>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

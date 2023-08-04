import React from 'react';
import { Alert, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { getMain } from 'shared/lib/router';
import { Layout } from 'widgets/Layout';

export const NotFound = () => {
  return (
    <Layout>
      <Box textAlign="center">
        <Alert severity="warning" sx={{ mb: 3 }}>
          Sorry, this page isn’t working or doesn’t exist.
        </Alert>
        <Link to={getMain()}>
          <Button size="small" variant="contained">
            Go to home
          </Button>
        </Link>
      </Box>
    </Layout>
  );
};

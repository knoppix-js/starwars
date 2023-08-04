import React from 'react';
import { Alert, Box } from '@mui/material';

export const Empty = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 10 }}>
      <Alert severity="warning" sx={{ maxWidth: 600, width: '100%' }}>
        No results
      </Alert>
    </Box>
  );
};

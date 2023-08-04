import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: 10, mb: 10 }}>
      <CircularProgress />
    </Box>
  );
};

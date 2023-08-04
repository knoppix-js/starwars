import React from 'react';
import { Alert, Box, Button } from '@mui/material';

type ErrorProps = {
  message: string;
  onRetry: () => void;
};

export const Error = ({ message, onRetry }: ErrorProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 10 }}>
      <Alert
        sx={{ maxWidth: 600, width: '100%' }}
        severity="error"
        action={
          <Button onClick={onRetry} color="inherit" size="small">
            Repeat
          </Button>
        }
      >
        {message}
      </Alert>
    </Box>
  );
};

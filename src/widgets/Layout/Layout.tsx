import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Container } from '@mui/material';
import { getMain } from 'shared/lib/router';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AppBar position="static">
        <Box sx={{ p: 3 }}>
          <Link to={getMain()} style={{ textDecoration: 'none' }}>
            <Box color="white" sx={{ display: 'inline-flex' }}>
              Star Wars People
            </Box>
          </Link>
        </Box>
      </AppBar>
      <Container sx={{ pt: 5, pb: 5 }}>{children}</Container>
    </>
  );
};

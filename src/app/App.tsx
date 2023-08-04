import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Alert } from '@mui/material';
import { store, StoreContext } from 'app/store';
import { Router } from './router';
import './App.css';

function ErrorHandler({ error }: { error: Error }) {
  return <Alert severity="error">An error occurred: {error.message}</Alert>;
}

export const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <StoreContext.Provider value={store}>
        <Router />
      </StoreContext.Provider>
    </ErrorBoundary>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

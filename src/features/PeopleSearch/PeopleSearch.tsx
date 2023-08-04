import React from 'react';
import { TextField } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

export const PeopleSearch = () => {
  const history = useHistory();
  const location = useLocation();
  const getParams = new URLSearchParams(location.search);
  const search = getParams.get('search') || '';

  const debounced = useDebouncedCallback((value: string) => {
    getParams.delete('page');
    value ? getParams.set('search', value) : getParams.delete('search');
    history.push({ search: getParams.toString() });
  }, 500);

  return (
    <TextField
      defaultValue={search}
      size="small"
      label="search"
      variant="outlined"
      onChange={(e) => debounced(e.target.value)}
    />
  );
};

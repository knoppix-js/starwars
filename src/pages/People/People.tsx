import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Box, Pagination } from '@mui/material';
import { useStore } from 'app/store';
import { Cards } from 'entities/People/shared/ui/Cards/Cards';
import { Layout } from 'widgets/Layout';
import { PeopleSearch } from 'features/PeopleSearch';
import { Empty, Error, Loader } from 'shared/ui';

const PER_PAGE = 10;

export const PeopleContent = observer(() => {
  const history = useHistory();
  const location = useLocation();
  const getParams = new URLSearchParams(location.search);
  const page = Number(getParams.get('page')) || 1;
  const search = getParams.get('search') || '';
  const { peopleStore } = useStore();
  const { loading, error, data } = peopleStore;

  useEffect(() => {
    const abortController = new AbortController();
    peopleStore.load({ search, page }, abortController);

    return () => {
      abortController.abort();
    };
  }, [peopleStore, page, search]);

  const setPage = (currentPage: number) => {
    getParams.set('page', String(currentPage));
    history.push({ search: getParams.toString() });
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error} onRetry={() => peopleStore.load({ search, page })} />;
  }
  if (!data) {
    return null;
  }

  const { count, list } = data;

  if (list.length === 0) {
    return <Empty />;
  }

  return (
    <div>
      <Cards list={list} />
      {count > PER_PAGE && (
        <Pagination
          sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}
          page={page}
          count={Math.ceil(count / PER_PAGE)}
          onChange={(_, currentPage) => setPage(currentPage)}
        />
      )}
    </div>
  );
});

export const People = () => {
  return (
    <Layout>
      <Box sx={{ mb: 3, textAlign: 'right' }}>
        <PeopleSearch />
      </Box>
      <PeopleContent />
    </Layout>
  );
};

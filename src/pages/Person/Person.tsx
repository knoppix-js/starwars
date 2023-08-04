import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Alert, Button, Dialog, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import { useStore } from 'app/store';
import { CardDetail } from 'entities/People';
import { PersonEditForm } from 'features/PersonEditForm';
import { PersonForm } from 'shared/api/people';
import { Layout } from 'widgets/Layout';
import { Error, Loader } from '../../shared/ui';

export const PersonContent = observer(() => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [editFormSnackbarOpen, setEditFormSnackbarOpen] = useState(false);

  const { id: personId } = useParams<{ id: string }>();
  const { personStore } = useStore();
  const { loading, error, data } = personStore;

  useEffect(() => {
    const abortController = new AbortController();
    personStore.load(personId, abortController);
    return () => {
      abortController.abort();
    };
  }, [personStore, personId]);

  const setEditFormSubmit = (form: PersonForm) => {
    personStore.changeData(form);
    setEditFormOpen(false);
    setEditFormSnackbarOpen(true);
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error message={error} onRetry={() => personStore.load(personId)} />;
  }
  if (!data) {
    return null;
  }

  const { id, ...editFormInitialData } = data;

  return (
    <>
      <CardDetail item={data} />
      <Button variant="outlined" sx={{ mt: 3 }} onClick={() => setEditFormOpen(true)}>
        Edit
      </Button>
      <Dialog onClose={() => setEditFormOpen(false)} open={editFormOpen}>
        <DialogTitle>Edit {editFormInitialData.name}</DialogTitle>
        <DialogContent>
          <PersonEditForm onSubmit={setEditFormSubmit} initialData={editFormInitialData} />
        </DialogContent>
      </Dialog>
      <Snackbar
        open={editFormSnackbarOpen}
        autoHideDuration={5000}
        onClose={() => setEditFormSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setEditFormSnackbarOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          The form has been saved successfully
        </Alert>
      </Snackbar>
    </>
  );
});

export const Person = () => {
  return (
    <Layout>
      <PersonContent />
    </Layout>
  );
};

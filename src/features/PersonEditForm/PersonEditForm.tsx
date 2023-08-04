import React, { useId } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { PersonForm, PersonFull } from 'shared/api/people';
import { Button, TextField } from '@mui/material';

type PersonEditFormData = Omit<PersonFull, 'id'>;

type PersonEditFormProps = {
  initialData: PersonForm;
  onSubmit: (data: PersonForm) => void;
};

const schema = yup
  .object({
    gender: yup.string().required().label('Gender'),
    name: yup.string().required().label('Name'),
    height: yup.string().required().label('Height'),
    mass: yup.string().required().label('Mass'),
    hairColor: yup.string().required().label('Hair color'),
    skinColor: yup.string().required().label('Skin color'),
    eyeColor: yup.string().required().label('Eye color'),
    birthYear: yup.string().required().label('Birth year'),
  })
  .required();

export const PersonEditForm = ({ initialData, onSubmit }: PersonEditFormProps) => {
  const formId = useId();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<PersonEditFormData>({
    resolver: yupResolver<PersonEditFormData>(schema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} id={formId}>
      <TextField
        margin="normal"
        fullWidth
        label="Gender"
        error={!!errors.gender}
        helperText={errors.gender?.message}
        {...register('gender')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register('name')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Height"
        type="number"
        error={!!errors.height}
        helperText={errors.height?.message}
        {...register('height')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Mass"
        type="number"
        error={!!errors.mass}
        helperText={errors.mass?.message}
        {...register('mass')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Birth year"
        error={!!errors.birthYear}
        helperText={errors.birthYear?.message}
        {...register('birthYear')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Hair color"
        error={!!errors.hairColor}
        helperText={errors.hairColor?.message}
        {...register('hairColor')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Skin color"
        error={!!errors.skinColor}
        helperText={errors.skinColor?.message}
        {...register('skinColor')}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Eye color"
        error={!!errors.eyeColor}
        helperText={errors.eyeColor?.message}
        {...register('eyeColor')}
      />
      <Button disabled={!isDirty} sx={{ mt: 3 }} variant="outlined" type="submit">
        Edit
      </Button>
    </form>
  );
};

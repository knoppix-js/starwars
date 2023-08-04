import { AxiosResponse } from 'axios';
import { apiInstance } from '../apiInstance';
import { PeopleDTO, PersonDTO } from './types';

export const getPeople = (
  {
    search,
    page,
  }: {
    search: string;
    page: number;
  },
  signal?: AbortSignal,
): Promise<AxiosResponse<PeopleDTO>> => {
  return apiInstance.get('people', { signal, params: { search, page } });
};

export const getPerson = (id: string, signal?: AbortSignal): Promise<AxiosResponse<PersonDTO>> => {
  return apiInstance.get(`people/${id}`, { signal });
};

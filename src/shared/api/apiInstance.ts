import axios, { AxiosInstance } from 'axios';

export const apiInstance: AxiosInstance = axios.create({
  headers: {
    Accept: 'application/json',
  },
  baseURL: 'https://swapi.dev/api/',
});

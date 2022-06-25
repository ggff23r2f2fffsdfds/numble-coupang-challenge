import axios, { AxiosInstance } from 'axios';

export const customAxios = (option = {}) => {
  const instance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
    ...option,
  });
  return instance;
};

import axios, { AxiosResponse } from 'axios';

export const fetcher = async <T>(url: string): Promise<T> => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const res: AxiosResponse<T> = await axios.get(url, {
    headers: { 'X-API-KEY': API_KEY },
  });

  return res.data;
};

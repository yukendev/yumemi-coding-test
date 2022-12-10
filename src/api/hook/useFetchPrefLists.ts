import { useEffect, useState } from 'react';
import { Prefecture } from '@commonType';
import axios, { AxiosResponse } from 'axios';
import { APIResponsePrefLists } from '@responseType';
import { URL_GET_PREFECTURE_LIST } from '../data';

type UseFetchPrefListsResponse = {
  prefectures: Prefecture[] | undefined;
};

export const useFetchPrefLists = (): UseFetchPrefListsResponse => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>();

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchPref = async () => {
      const res: AxiosResponse<APIResponsePrefLists> = await axios.get(URL_GET_PREFECTURE_LIST, {
        headers: { 'X-API-KEY': API_KEY },
      });
      const prefList = res.data.result;
      setPrefectures(prefList);
    };
    fetchPref();
  }, []);

  return {
    prefectures,
  };
};

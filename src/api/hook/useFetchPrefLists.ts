import { useEffect, useState } from 'react';
import { Prefecture } from '@commonType';
import { fetchPrefList } from '../fetcher';

export const useFetchPrefLists = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetch = async () => {
      try {
        const prefList = await fetchPrefList();

        setPrefectures(prefList);
        setError(undefined);
      } catch {
        setError('都道府県が取得できませんでした');
      }
    };
    fetch();
  }, []);

  return {
    prefectures,
    error,
  };
};

import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { PrefectureItem } from '../molecules/PrefectureItem';
import { URL_GET_PREFECTURE_LIST } from '../../api/data';

import styles from './PrefectureLists.module.scss';

type APIResponsePrefList = {
  message: string | null;
  result: Prefecture[];
};

type Prefecture = {
  prefCode: number;
  prefName: string;
};

export const PrefectureLists = (): JSX.Element => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>();

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchPref = async () => {
      const res: AxiosResponse<APIResponsePrefList> = await axios.get(URL_GET_PREFECTURE_LIST, {
        headers: { 'X-API-KEY': API_KEY },
      });
      const prefList = res.data.result;
      setPrefectures(prefList);
    };
    fetchPref();
  }, []);

  // ローディング中
  if (prefectures == null) {
    return <></>;
  }

  return (
    <ul className={styles.prefectureLists}>
      {prefectures.map((pref) => (
        <PrefectureItem key={pref.prefCode} prefName={pref.prefName} />
      ))}
    </ul>
  );
};

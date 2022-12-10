import { useEffect, useState } from 'react';
import { Prefecture } from '@commonType';
import { APIResponsePrefLists } from '@responseType';
import { URL_GET_PREFECTURE_LIST } from '../urls';
import { fetcher } from '../fetcher';

type UseFetchPrefListsResponse = {
  prefectures: Prefecture[] | undefined;
  error: string | undefined;
};

export const useFetchPrefLists = (): UseFetchPrefListsResponse => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchPrefList = async () => {
      try {
        const res = await fetcher<APIResponsePrefLists>(URL_GET_PREFECTURE_LIST);

        // API_KEYが不適切な場合などのエラーもレスポンスヘッダーのステータスは'200 OK'なので、resultの有無でエラーを判断している
        // 参考: https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
        if (res.result == null) {
          setError('都道府県が取得できませんでした');
        } else {
          const prefList = res.result;
          setPrefectures(prefList);
          setError(undefined);
        }
      } catch {
        setError('都道府県が取得できませんでした');
      }
    };
    fetchPrefList();
  }, []);

  return {
    prefectures,
    error,
  };
};

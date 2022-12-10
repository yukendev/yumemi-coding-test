import { PopulationData } from '@commonType';
import { APIResponsePopulationFromPrefCode } from '@responseType';
import { useEffect, useState } from 'react';
import { fetcher } from '../fetcher';
import { URL_GET_POPULATION_FROM_PREF_CODE } from '../urls';

type UseFetchPopulationFromPrefCodeResponse = {
  populationData: PopulationData[] | undefined;
  error: string | undefined;
};

export const useFetchPopulationFromPrefCode = (
  prefCode: number,
): UseFetchPopulationFromPrefCodeResponse => {
  const [populationData, setPopulationData] = useState<PopulationData[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchPopulation = async (prefCode: number) => {
      try {
        const URL = URL_GET_POPULATION_FROM_PREF_CODE(prefCode);
        const res = await fetcher<APIResponsePopulationFromPrefCode>(URL);

        // API_KEYが不適切な場合などのエラーもレスポンスヘッダーのステータスは'200 OK'なので、resultの有無でエラーを判断している
        // 参考: https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
        if (res.result == null) {
          setError('都道府県コードから総人口が取得できませんでした');
        } else {
          const populationData = res.result.data.filter((data) => data.label === '総人口')[0];
          setPopulationData(populationData.data);
          setError(undefined);
        }
      } catch (error) {
        setError('都道府県コードから総人口が取得できませんでした');
      }
    };
    fetchPopulation(prefCode);
  }, [prefCode]);

  return {
    populationData,
    error,
  };
};

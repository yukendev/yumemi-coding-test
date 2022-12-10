import { PopulationDataForChart, Prefecture, PrefectureWithPopulation } from '@commonType';
import { APIResponsePopulationFromPrefCode } from '@responseType';
import { useEffect, useState } from 'react';
import { formatDataForChart } from 'src/utils/formatDataForChart';
import { fetcher } from '../fetcher';
import { URL_GET_POPULATION_FROM_PREF_CODE } from '../urls';

export const useFetchPopulationDataForChart = (prefs: Prefecture[]) => {
  const [formattedData, setFormattedData] = useState<PopulationDataForChart>();
  const [error, setError] = useState<string>();

  const getPopulationFromPrefCode = async (pref: Prefecture): Promise<PrefectureWithPopulation> => {
    const url = URL_GET_POPULATION_FROM_PREF_CODE(pref.prefCode);
    const res = await fetcher<APIResponsePopulationFromPrefCode>(url);
    if (res.result == null) {
      throw Error();
    }
    const populationData = res.result.data.filter((data) => data.label === '総人口')[0];
    return {
      prefCode: pref.prefCode,
      prefName: pref.prefName,
      populationDataList: populationData.data,
    };
  };

  useEffect(() => {
    // 都道府県コードから人口構成を取得
    const fetchPopulation = async (prefs: Prefecture[]) => {
      const fetcherList = prefs.map((pref) => {
        return getPopulationFromPrefCode(pref);
      });

      try {
        const results = await Promise.all(fetcherList);

        const formattedData = formatDataForChart(results);

        setFormattedData(formattedData);
      } catch (error) {
        setError('都道府県コードから総人口が取得できませんでした');
      }
    };
    fetchPopulation(prefs);
  }, [prefs]);

  return {
    formattedData,
    error,
  };
};

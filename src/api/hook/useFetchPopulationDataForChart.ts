import { PopulationDataForChart, Prefecture } from '@commonType';
import { useEffect, useState } from 'react';
import { formatDataForChart } from 'src/utils/formatDataForChart';
import { fetchPopulation } from '../fetcher';

export const useFetchPopulationDataForChart = (prefs: Prefecture[]) => {
  const [formattedData, setFormattedData] = useState<PopulationDataForChart>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetch = async (prefs: Prefecture[]) => {
      const fetcherList = prefs.map((pref) => {
        return fetchPopulation(pref);
      });

      try {
        // 選択されている都道府県の全てのデータを取得
        const results = await Promise.all(fetcherList);

        // 取得したデータをグラフ用に整形
        const formattedData = formatDataForChart(results);

        setFormattedData(formattedData);
      } catch (error) {
        setError('都道府県コードから総人口が取得できませんでした');
      }
    };
    fetch(prefs);
  }, [prefs]);

  return {
    formattedData,
    error,
  };
};

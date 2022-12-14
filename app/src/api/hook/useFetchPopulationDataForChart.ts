import { PopulationDataForChart } from 'src/utils/commonType';
import { useEffect, useState } from 'react';
import { useSelectedPrefecturesState } from 'src/store/selectedPrefecturesState';
import { formatDataForChart } from 'src/utils/formatDataForChart';
import { fetchPopulation } from '../fetcher';

export const useFetchPopulationDataForChart = () => {
  const [formattedData, setFormattedData] = useState<PopulationDataForChart>();
  const [error, setError] = useState<string>();
  const selectedPrefs = useSelectedPrefecturesState();

  useEffect(() => {
    const fetch = async () => {
      if (selectedPrefs.length === 0) {
        return;
      }
      const fetcherList = selectedPrefs.map((pref) => {
        return fetchPopulation(pref);
      });

      try {
        // 選択されている都道府県の全てのデータを取得
        const results = await Promise.all(fetcherList);

        // 取得したデータをグラフ用に整形
        const formattedData = formatDataForChart(results);

        setFormattedData(formattedData);
        setError(undefined);
      } catch (error) {
        setError('都道府県コードから総人口が取得できませんでした');
      }
    };
    fetch();
  }, [selectedPrefs]);

  return {
    selectedPrefs,
    formattedData,
    error,
  };
};

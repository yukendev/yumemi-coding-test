import { PopulationDataForChart, PrefectureWithPopulation } from '@commonType';

// 複数都道府県の人口構成データの配列を受け取って、グラフ用のデータに整形するメソッド
export const formatDataForChart = (prefectureWithPopulationList: PrefectureWithPopulation[]) => {
  // 年だけを含んだオブジェクトの配列を作成
  const formattedData: PopulationDataForChart =
    prefectureWithPopulationList[0].populationDataList.map((populationData) => {
      return {
        year: populationData.year,
      };
    });

  // 各都道府県の人口構成のデータをマージしていく
  prefectureWithPopulationList.forEach((prefectureWithPopulation) => {
    const prefName = prefectureWithPopulation.prefName; // ex. 北海道
    prefectureWithPopulation.populationDataList.forEach((populationData, index) => {
      formattedData[index][prefName] = populationData.value; // ex. { '北海道': 5039206 } を追加
    });
  });

  return formattedData;
};

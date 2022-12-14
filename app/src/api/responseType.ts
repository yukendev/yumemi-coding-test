import { Prefecture, PopulationData, PopulationDataType } from 'src/utils/commonType';

// 都道府県一覧
// 参考: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
export type APIResponsePrefLists = {
  message: string | null;
  result: Prefecture[];
};

// 各都道府県の各都道府県の人口構成
// 参考: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
export type APIResponsePopulationFromPrefCode = {
  message: string | null;
  result: {
    data: {
      label: PopulationDataType;
      data: PopulationData[];
    }[];
  };
};

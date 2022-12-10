export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationData = {
  year: number;
  value: number;
};

export type SelectedPrefectures = {
  selectedPrefectures: Prefecture[] | undefined;
};

export type PrefectureWithPopulation = {
  prefCode: number;
  prefName: string;
  populationDataList: PopulationData[];
};

export type PopulationDataForChart = {
  year: number;
  [prefName: string]: number;
}[];

export type PopulationDataType = '総人口' | '年少人口' | '生産年齢人口' | '老年人口';

import { Prefecture, PrefectureWithPopulation } from 'src/utils/commonType';
import { APIResponsePopulationFromPrefCode, APIResponsePrefLists } from '@responseType';
import axios, { AxiosResponse } from 'axios';
import { URL_GET_POPULATION_FROM_PREF_CODE, URL_GET_PREFECTURE_LIST } from './urls';

// 共通のfetch処理
const fetcher = async <T>(url: string): Promise<T> => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const res: AxiosResponse<T> = await axios.get(url, {
    headers: { 'X-API-KEY': API_KEY },
  });

  return res.data;
};

// 都道府県の人口構成を取得
export const fetchPopulation = async (pref: Prefecture): Promise<PrefectureWithPopulation> => {
  const url = URL_GET_POPULATION_FROM_PREF_CODE(pref.prefCode);
  const res = await fetcher<APIResponsePopulationFromPrefCode>(url);
  // API_KEYが不適切な場合などのエラーもレスポンスヘッダーのステータスは'200 OK'なので、resultの有無でエラーを判断している
  // 参考: https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
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

// 都道府県のリストを取得
export const fetchPrefList = async (): Promise<Prefecture[]> => {
  const res = await fetcher<APIResponsePrefLists>(URL_GET_PREFECTURE_LIST);
  // API_KEYが不適切な場合などのエラーもレスポンスヘッダーのステータスは'200 OK'なので、resultの有無でエラーを判断している
  // 参考: https://opendata.resas-portal.go.jp/docs/api/v1/detail/index.html
  if (res.result == null) {
    throw Error();
  }
  return res.result;
};

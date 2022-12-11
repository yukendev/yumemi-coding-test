// 都道府県リストを取得
export const URL_GET_PREFECTURE_LIST = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

// 都道府県コードから人口構成を取得
export const URL_GET_POPULATION_FROM_PREF_CODE = (prefCode: number): string => {
  const parsedUrl = new URL(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear',
  );

  // 全ての市町村を選択するので'-'をセット
  // 参考: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
  parsedUrl.searchParams.set('cityCode', '-');

  // 取得したい都道府県のprefCodeをセット
  parsedUrl.searchParams.set('prefCode', prefCode.toString());

  return parsedUrl.toString();
};

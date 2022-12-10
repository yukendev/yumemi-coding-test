import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useFetchPopulationDataForChart } from 'src/api/hook/useFetchPopulationDataForChart';
import { ErrorAlert } from './ErrorAlert';
import { LoadingSpinner } from './LoadingSpinner';
import { UnSelectedAlert } from './UnSelectedAlert';

import styles from './Chart.module.scss';

export const Chart = (): JSX.Element => {
  const { selectedPrefs, formattedData, error } = useFetchPopulationDataForChart();

  // 人口構成取得時にエラーが発生した場合
  if (error != null) {
    return <ErrorAlert message={error} />;
  }

  // ローディング中
  if (selectedPrefs.length !== 0 && formattedData == null) {
    return <LoadingSpinner />;
  }

  // 何も選択されていない場合
  if (selectedPrefs.length === 0) {
    return <UnSelectedAlert />;
  }

  return (
    <LineChart
      className={styles.chart}
      width={500}
      height={300}
      data={formattedData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='year' />
      <YAxis />
      <Tooltip />
      <Legend />
      {selectedPrefs.map((pref) => (
        <Line key={pref.prefCode} dataKey={pref.prefName} />
      ))}
    </LineChart>
  );
};

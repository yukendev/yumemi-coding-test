import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useFetchPopulationDataForChart } from 'src/api/hook/useFetchPopulationDataForChart';
import { ErrorAlert } from './ErrorAlert';
import { LoadingSpinner } from './LoadingSpinner';
import { UnSelectedAlert } from './UnSelectedAlert';

import styles from './Chart.module.scss';
import { colors } from 'src/utils/color';

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
    <div className={styles.chartWrapper}>
      <ResponsiveContainer>
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 60,
            left: 60,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='year'
            label={{
              value: '年度',
              offset: -10,
              position: 'insideBottomRight',
            }}
          />
          <YAxis label={{ value: '人口数', offset: -40, angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend
            layout='vertical'
            verticalAlign='middle'
            align='right'
            wrapperStyle={{ paddingLeft: 30, height: 400, overflowY: 'scroll' }}
          />
          {selectedPrefs.map((pref) => (
            <Line
              key={pref.prefCode}
              dataKey={pref.prefName}
              dot={false}
              stroke={colors[pref.prefCode]}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

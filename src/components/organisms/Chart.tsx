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

const examplePrefs = [
  {
    prefCode: 1,
    prefName: '北海道',
  },
  {
    prefCode: 2,
    prefName: '青森県',
  },
  {
    prefCode: 3,
    prefName: '岩手県',
  },
  {
    prefCode: 4,
    prefName: '宮城県',
  },
];

export const Chart = (): JSX.Element => {
  const { formattedData, error } = useFetchPopulationDataForChart(examplePrefs);

  // 人口構成取得時にエラーが発生した場合
  if (error != null) {
    return <ErrorAlert message={error} />;
  }

  // ローディング中
  if (formattedData == null) {
    return <LoadingSpinner />;
  }

  return (
    <LineChart
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
      {examplePrefs.map((pref) => (
        <Line key={pref.prefCode} dataKey={pref.prefName} />
      ))}
    </LineChart>
  );
};

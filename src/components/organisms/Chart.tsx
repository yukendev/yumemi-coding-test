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
import { useFetchPopulationFromPrefCode } from 'src/api/hook/useFetchPopulationFromPrefCode';
import { useFetchPopulationDataForChart } from 'src/api/hook/useFetchPopulationDataForChart';
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
      <Line type='monotone' dataKey='北海道' stroke='#82ca9d' />
      <Line type='monotone' dataKey='青森県' stroke='#82ca9d' />
      <Line type='monotone' dataKey='岩手県' stroke='#82ca9d' />
      <Line type='monotone' dataKey='宮城県' stroke='#82ca9d' />
    </LineChart>
  );
};

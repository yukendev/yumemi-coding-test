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
import { LoadingSpinner } from './LoadingSpinner';

export const Chart = (): JSX.Element => {
  const { populationData, error } = useFetchPopulationFromPrefCode(1);

  // ローディング中
  if (populationData == null) {
    return <LoadingSpinner />;
  }

  return (
    <LineChart
      width={500}
      height={300}
      data={populationData}
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
      <Line type='monotone' dataKey='value' stroke='#82ca9d' />
    </LineChart>
  );
};

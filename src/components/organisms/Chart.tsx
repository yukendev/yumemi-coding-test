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

const sampleData = {
  message: null,
  result: {
    boundaryYear: 2015,
    data: [
      {
        label: '総人口',
        data: [
          {
            year: 1980,
            value: 12817,
          },
          {
            year: 1985,
            value: 12707,
          },
          {
            year: 1990,
            value: 12571,
          },
          {
            year: 1995,
            value: 12602,
          },
          {
            year: 2000,
            value: 12199,
          },
          {
            year: 2005,
            value: 11518,
          },
          {
            year: 2010,
            value: 10888,
          },
          {
            year: 2015,
            value: 10133,
          },
          {
            year: 2020,
            value: 9275,
          },
          {
            year: 2025,
            value: 8431,
          },
          {
            year: 2030,
            value: 7610,
          },
          {
            year: 2035,
            value: 6816,
          },
          {
            year: 2040,
            value: 6048,
          },
          {
            year: 2045,
            value: 5324,
          },
        ],
      },
      {
        label: '年少人口',
        data: [
          {
            year: 1980,
            value: 2906,
            rate: 22.6,
          },
          {
            year: 1985,
            value: 2769,
            rate: 21.7,
          },
          {
            year: 1990,
            value: 2346,
            rate: 18.6,
          },
          {
            year: 1995,
            value: 2019,
            rate: 16,
          },
          {
            year: 2000,
            value: 1728,
            rate: 14.1,
          },
          {
            year: 2005,
            value: 1442,
            rate: 12.5,
          },
          {
            year: 2010,
            value: 1321,
            rate: 12.1,
          },
          {
            year: 2015,
            value: 1144,
            rate: 11.2,
          },
          {
            year: 2020,
            value: 979,
            rate: 10.5,
          },
          {
            year: 2025,
            value: 822,
            rate: 9.7,
          },
          {
            year: 2030,
            value: 705,
            rate: 9.2,
          },
          {
            year: 2035,
            value: 593,
            rate: 8.7,
          },
          {
            year: 2040,
            value: 513,
            rate: 8.4,
          },
          {
            year: 2045,
            value: 443,
            rate: 8.3,
          },
        ],
      },
      {
        label: '生産年齢人口',
        data: [
          {
            year: 1980,
            value: 8360,
            rate: 65.2,
          },
          {
            year: 1985,
            value: 8236,
            rate: 64.8,
          },
          {
            year: 1990,
            value: 8144,
            rate: 64.7,
          },
          {
            year: 1995,
            value: 8048,
            rate: 63.8,
          },
          {
            year: 2000,
            value: 7595,
            rate: 62.2,
          },
          {
            year: 2005,
            value: 7032,
            rate: 61,
          },
          {
            year: 2010,
            value: 6387,
            rate: 58.6,
          },
          {
            year: 2015,
            value: 5538,
            rate: 54.6,
          },
          {
            year: 2020,
            value: 4748,
            rate: 51.1,
          },
          {
            year: 2025,
            value: 4187,
            rate: 49.6,
          },
          {
            year: 2030,
            value: 3693,
            rate: 48.5,
          },
          {
            year: 2035,
            value: 3251,
            rate: 47.6,
          },
          {
            year: 2040,
            value: 2681,
            rate: 44.3,
          },
          {
            year: 2045,
            value: 2261,
            rate: 42.4,
          },
        ],
      },
      {
        label: '老年人口',
        data: [
          {
            year: 1980,
            value: 1550,
            rate: 12,
          },
          {
            year: 1985,
            value: 1702,
            rate: 13.3,
          },
          {
            year: 1990,
            value: 2081,
            rate: 16.5,
          },
          {
            year: 1995,
            value: 2535,
            rate: 20.1,
          },
          {
            year: 2000,
            value: 2876,
            rate: 23.5,
          },
          {
            year: 2005,
            value: 3044,
            rate: 26.4,
          },
          {
            year: 2010,
            value: 3179,
            rate: 29.1,
          },
          {
            year: 2015,
            value: 3442,
            rate: 33.9,
          },
          {
            year: 2020,
            value: 3548,
            rate: 38.2,
          },
          {
            year: 2025,
            value: 3422,
            rate: 40.5,
          },
          {
            year: 2030,
            value: 3212,
            rate: 42.2,
          },
          {
            year: 2035,
            value: 2972,
            rate: 43.6,
          },
          {
            year: 2040,
            value: 2854,
            rate: 47.1,
          },
          {
            year: 2045,
            value: 2620,
            rate: 49.2,
          },
        ],
      },
    ],
  },
};

export const Chart = (): JSX.Element => {
  const populationData = sampleData.result.data[0];

  return (
    <LineChart
      width={500}
      height={300}
      data={populationData.data}
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

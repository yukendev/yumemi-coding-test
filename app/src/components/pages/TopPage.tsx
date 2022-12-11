import { Chart } from '../organisms/Chart';
import { Header } from '../organisms/Header';
import { PrefectureLists } from '../organisms/PrefectureLists';

export const TopPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <PrefectureLists />
      <Chart />
    </>
  );
};

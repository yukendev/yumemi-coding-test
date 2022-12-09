import { PrefectureItem } from '../molecules/PrefectureItem';
import { Header } from '../organisms/Header';
import { PrefectureLists } from '../organisms/PrefectureLists';

export const TopPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <PrefectureLists />
    </>
  );
};

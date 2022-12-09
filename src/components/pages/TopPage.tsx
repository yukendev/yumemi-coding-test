import { Checkbox } from '../atoms/Checkbox';
import { PrefectureLabel } from '../atoms/PrefectureLabel';
import { Header } from '../organisms/Header';

export const TopPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <Checkbox />
      <PrefectureLabel />
    </>
  );
};

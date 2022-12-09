import { Checkbox } from '../atoms/Checkbox';
import { PrefectureLabel } from '../atoms/PrefectureLabel';
import styles from './PrefectureItem.module.scss';

export const PrefectureItem = (): JSX.Element => {
  return (
    <li className={styles.prefectureItem}>
      <Checkbox />
      <PrefectureLabel />
    </li>
  );
};

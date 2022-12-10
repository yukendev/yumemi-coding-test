import { Checkbox } from '../atoms/Checkbox';
import { PrefectureLabel } from '../atoms/PrefectureLabel';
import styles from './PrefectureItem.module.scss';

type PrefectureItemProps = {
  prefName: string;
};

export const PrefectureItem = (props: PrefectureItemProps): JSX.Element => {
  const { prefName } = props;
  return (
    <li className={styles.prefectureItem}>
      <Checkbox />
      <PrefectureLabel prefName={prefName} />
    </li>
  );
};

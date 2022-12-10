import { Prefecture } from '@commonType';
import { Checkbox } from '../atoms/Checkbox';
import { PrefectureLabel } from '../atoms/PrefectureLabel';
import styles from './PrefectureItem.module.scss';

export const PrefectureItem = (props: Prefecture): JSX.Element => {
  const { prefCode, prefName } = props;

  const onChangeHandler = () => {
    console.log('チェックボックス');
  };

  return (
    <li className={styles.prefectureItem}>
      <Checkbox onChange={onChangeHandler} />
      <PrefectureLabel prefName={prefName} />
    </li>
  );
};

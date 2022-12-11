import { Prefecture } from '@commonType';
import { useTogglePrefecture } from 'src/store/selectedPrefecturesState';
import { Checkbox } from '../atoms/Checkbox';
import { PrefectureLabel } from '../atoms/PrefectureLabel';
import styles from './PrefectureItem.module.scss';

export const PrefectureItem = (props: Prefecture): JSX.Element => {
  const { prefName } = props;
  const { togglePrefectureSelect } = useTogglePrefecture(props);

  const onChangeHandler = () => {
    togglePrefectureSelect();
  };

  return (
    <li className={styles.prefectureItem}>
      <Checkbox onChange={onChangeHandler} />
      <PrefectureLabel prefName={prefName} />
    </li>
  );
};

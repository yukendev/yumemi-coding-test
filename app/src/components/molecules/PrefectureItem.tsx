import { Prefecture } from 'src/utils/commonType';
import { useTogglePrefecture } from 'src/store/selectedPrefecturesState';
import { Checkbox } from '../atoms/Checkbox';
import { PrefectureLabel } from '../atoms/PrefectureLabel';
import styles from './PrefectureItem.module.scss';

export const PrefectureItem = (props: Prefecture): JSX.Element => {
  const { prefCode, prefName } = props;
  const { togglePrefectureSelect } = useTogglePrefecture(props);

  const onChangeHandler = () => {
    togglePrefectureSelect();
  };

  return (
    <li className={styles.prefectureItem}>
      <Checkbox prefCode={prefCode} onChange={onChangeHandler} />
      <PrefectureLabel prefCode={prefCode} prefName={prefName} />
    </li>
  );
};

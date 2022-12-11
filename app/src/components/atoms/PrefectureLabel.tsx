import { Prefecture } from '@commonType';
import styles from './PrefectureLabel.module.scss';

export const PrefectureLabel = (props: Prefecture): JSX.Element => {
  const { prefCode, prefName } = props;

  return (
    <label htmlFor={prefCode.toString()} className={styles.prefectureLabel}>
      {prefName}
    </label>
  );
};

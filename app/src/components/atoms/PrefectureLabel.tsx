import { memo } from 'react';
import { Prefecture } from '@commonType';
import styles from './PrefectureLabel.module.scss';

export const PrefectureLabel = memo((props: Prefecture): JSX.Element => {
  const { prefCode, prefName } = props;

  return (
    <label htmlFor={prefCode.toString()} className={styles.prefectureLabel}>
      {prefName}
    </label>
  );
});

PrefectureLabel.displayName = 'PrefectureLabel';

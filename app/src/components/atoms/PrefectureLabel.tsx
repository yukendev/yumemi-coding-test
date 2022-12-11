import styles from './PrefectureLabel.module.scss';

type PrefectureLabelProps = {
  prefName: string;
};

export const PrefectureLabel = (props: PrefectureLabelProps): JSX.Element => {
  const { prefName } = props;

  return <label className={styles.prefectureLabel}>{prefName}</label>;
};

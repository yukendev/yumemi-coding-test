import { PrefectureItem } from '../molecules/PrefectureItem';

import styles from './PrefectureLists.module.scss';

export const PrefectureLists = (): JSX.Element => {
  const prefectureItems: JSX.Element[] = [];

  for (let i = 0; i < 48; i++) {
    prefectureItems.push(<PrefectureItem />);
  }
  return <ul className={styles.prefectureLists}>{prefectureItems}</ul>;
};

import { PrefectureItem } from '../molecules/PrefectureItem';

import styles from './PrefectureLists.module.scss';
import { useFetchPrefLists } from '../../api/hook/useFetchPrefLists';
import { LoadingSpinner } from './LoadingSpinner';

export const PrefectureLists = (): JSX.Element => {
  const { prefectures } = useFetchPrefLists();

  // ローディング中
  if (prefectures == null) {
    return <LoadingSpinner />;
  }

  return (
    <ul className={styles.prefectureLists}>
      {prefectures.map((pref) => (
        <PrefectureItem key={pref.prefCode} prefName={pref.prefName} />
      ))}
    </ul>
  );
};

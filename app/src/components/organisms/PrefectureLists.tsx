import { PrefectureItem } from '../molecules/PrefectureItem';

import styles from './PrefectureLists.module.scss';
import { useFetchPrefLists } from '../../api/hook/useFetchPrefLists';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorAlert } from './ErrorAlert';
import { PrefectureListTitle } from '../molecules/PrefectureListTitle';

export const PrefectureLists = (): JSX.Element => {
  const { prefectures, error } = useFetchPrefLists();

  // 都道府県取得時にエラーが発生した場合
  if (error != null) {
    return <ErrorAlert message={error} />;
  }

  // ローディング中
  if (prefectures == null) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <PrefectureListTitle />
      <ul className={styles.prefectureLists}>
        {prefectures.map((pref) => (
          <PrefectureItem key={pref.prefCode} prefCode={pref.prefCode} prefName={pref.prefName} />
        ))}
      </ul>
    </>
  );
};

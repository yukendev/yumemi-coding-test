import { Prefecture } from 'src/utils/commonType';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const selectedPrefecturesState = atom<Prefecture[]>({
  key: 'selectedPrefecturesState',
  default: [],
});

export const useSelectedPrefecturesState = () => {
  return useRecoilValue(selectedPrefecturesState);
};

export const useTogglePrefecture = (targetPref: Prefecture) => {
  const selectedPrefs = useSelectedPrefecturesState();
  const setState = useSetRecoilState(selectedPrefecturesState);

  const selectPref = () => {
    // 対象の都道府県を追加
    const newState = [...selectedPrefs];
    newState.push(targetPref);
    setState(newState);
  };

  const unSelectPref = () => {
    // 対象の都道府県を削除
    const newState = selectedPrefs.filter((pref) => pref.prefCode !== targetPref.prefCode);
    setState(newState);
  };

  const togglePrefectureSelect = () => {
    const selectedPrefsCodes = selectedPrefs.map((pref) => pref.prefCode);
    if (selectedPrefsCodes.includes(targetPref.prefCode)) {
      // すでに選択されている場合
      unSelectPref();
    } else {
      // まだ選択されていない場合
      selectPref();
    }
  };

  return { togglePrefectureSelect };
};

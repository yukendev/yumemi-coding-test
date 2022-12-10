import { SelectedPrefectures } from '@commonType';
import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const selectedPrefecturesState = atom<SelectedPrefectures>({
  key: 'selectedPrefecturesState',
  default: { selectedPrefectures: undefined },
});

export const useSelectedPrefecturesState = () => {
  return useRecoilValue(selectedPrefecturesState);
};

export const useTodaysDinnerMutators = () => {
  const setState = useSetRecoilState(selectedPrefecturesState);

  const setSelectedPrefectures = useCallback(
    (selectedPrefectures: SelectedPrefectures) => setState(selectedPrefectures),
    [setState],
  );

  return { setSelectedPrefectures };
};

type PrefectureLabelProps = {
  prefName: string;
};

export const PrefectureLabel = (props: PrefectureLabelProps): JSX.Element => {
  const { prefName } = props;

  return <label>{prefName}</label>;
};

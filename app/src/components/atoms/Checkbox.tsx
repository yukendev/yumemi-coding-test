type CheckboxProps = {
  onChange: () => void;
};

export const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { onChange } = props;
  return <input type='checkbox' onChange={onChange} />;
};

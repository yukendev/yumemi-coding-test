import styles from './Checkbox.module.scss';

type CheckboxProps = {
  prefCode: number;
  onChange: () => void;
};

export const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { prefCode, onChange } = props;
  return (
    <input
      id={prefCode.toString()}
      className={styles.checkbox}
      type='checkbox'
      onChange={onChange}
    />
  );
};

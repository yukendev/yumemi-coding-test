import styles from './ErrorAlert.module.scss';

type ErrorAlertPeops = {
  message: string;
};

export const ErrorAlert = (props: ErrorAlertPeops): JSX.Element => {
  const { message } = props;
  return (
    <div className={styles.errorContainer}>
      <span className={styles.errorAlert}>{message}</span>
    </div>
  );
};

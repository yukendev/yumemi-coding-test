import styles from './UnSelectedAlert.module.scss';

export const UnSelectedAlert = (): JSX.Element => {
  return (
    <div className={styles.unselectedAlertContainer}>
      <span className={styles.unselectedAlert}>都道府県を選択してください</span>
    </div>
  );
};

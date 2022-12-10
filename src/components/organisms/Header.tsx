import { HeaderTitle } from '../atoms/HeaderTitle';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <HeaderTitle />
    </header>
  );
};

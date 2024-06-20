import Link from 'next/link';
import styles from './MenuPage.module.css';

const MenuPage = () => {
  return (
    <div className={styles.menu-container}>
      <h1 className={styles.menu-title}>Menu Page</h1>
      <div className={styles.menu-options}>
        <Link href="/menu">
          <a className={styles.menu-option}>Option 1</a>
        </Link>
        <Link href="/menu">
          <a className={styles.menu-option}>Option 2</a>
        </Link>
        <Link href="/menu">
          <a className={styles.menu-option}>Option 3</a>
        </Link>
      </div>
    </div>
  );
};

export default MenuPage;
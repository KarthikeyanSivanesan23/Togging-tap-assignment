import { useRouter } from 'next/router';
import styles from '../styles/MainContent.module.css';

const MainContent = () => {
  const router = useRouter();

  const handleMenuClick = () => {
    router.push('/menu'); // Redirect to the MenuPage component
  };

  return (
    <main className={styles.mainContent}>
      <button className={`${styles.menuButton} ${styles.topRight}`} onClick={handleMenuClick}>Menu</button>
      <h1 className={styles.mainTitle}>Build AI Calling Agent that can do</h1>
      <h2 className={styles.customHeading}>Sales Call</h2>
      
      <button className={styles.primaryButton}>Build your own voice agent 'It's free!'</button>
      <button className={styles.secondaryButton}>Hear it in action</button>
    </main>
  );
};

export default MainContent;
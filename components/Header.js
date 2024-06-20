// components/Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        Join our community. <a href="#">Explore</a>
      </div>
      <div className={styles.navBar}>
        <div className={styles.logo}>Toingg</div>
        <div className={styles.menuIcon}>☰</div>
      </div>
    </header>
  );
};

export default Header;
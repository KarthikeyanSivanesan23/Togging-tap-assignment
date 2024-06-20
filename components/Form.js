// components/Form.js
import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <h3 className={styles.h3Style}>Try now</h3>
      <p className={styles.pStyle}>Get a call from Toingg</p>
      <form className={styles.localFormStyle}>
        <input type="text" placeholder="Name" className={styles.localInputStyle} />
        <input type="text" placeholder="+91" className={styles.localInputStyle} />
        <select className={styles.localSelectStyle}>
          <option>Choose your language</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit" className={styles.localButtonStyle}>📞</button>
      </form>
    </div>
  );
};

export default Form;

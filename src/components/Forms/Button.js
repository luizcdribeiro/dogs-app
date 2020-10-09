import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;

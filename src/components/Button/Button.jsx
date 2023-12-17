import React from 'react';
import css from '../Header/Header.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={css.button}>
      {children}
    </button>
  );
};

export default Button;

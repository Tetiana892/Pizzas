import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';

import css from './App.module.css';

const App = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.content}></div>
    </div>
  );
};

export default App;

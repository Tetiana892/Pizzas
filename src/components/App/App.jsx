import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../../pages/Home/Home';

import css from './App.module.css';

const App = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.content}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

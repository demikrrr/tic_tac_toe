import React from 'react';
import { Field } from './components/field/field';
import { Information } from './components/Information/information';
import styles from './game.module.css';

export const GameLayout = () => {
  return (
    <>
      <div className={styles['game']}>
        <h1>tic tac toe</h1>
        <Information />
        <Field />
        <button>Начать заново</button>
      </div>
    </>
  );
};

import React from 'react';
import { Field } from './components/field/field';
import styles from './game.module.css';

export const GameLayout = () => {
  return (
    <>
      <div className={styles['game']}>
        <h1>tic tac toe</h1>
        <div>Information</div>
        <Field />
        <button>Начать заново</button>
      </div>
    </>
  );
};

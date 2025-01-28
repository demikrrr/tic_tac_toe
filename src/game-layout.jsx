import React from 'react';
import { Field } from './components/field/field';
import { Information } from './components/Information/information';
import styles from './game.module.css';

export const GameLayout = ({status, currentPlayer}) => {
  return (
    <>
      <div className={styles['game']}>
        <h1>tic tac toe</h1>
        <Information status={status} currentPlayer={currentPlayer}/>
        <Field />
        <button>Начать заново</button>
      </div>
    </>
  );
};

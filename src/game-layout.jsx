import React from 'react';
import { Field } from './components/field/field';
import { Information } from './components/Information/information';
import styles from './game.module.css';

export const GameLayout = ({field,handleCellClick, status, currentPlayer}) => {
  return (
    <>
      <div className={styles['game']}>
        <h1>tic tac toe</h1>
        <Information status={status} currentPlayer={currentPlayer}/>
        <Field field={field} handleCellClick={handleCellClick}/>
        <button>Начать заново</button>
      </div>
    </>
  );
};

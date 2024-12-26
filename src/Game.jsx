// import { useState } from 'react'
import styles from './game.module.css';
import { Field } from './components/field/field.jsx';

export const Game = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles['game']}>
        <h1>Tic tac toe</h1>
        <div>Information</div>
        <div>{Field}</div>

        <button>Начать заново</button>
      </div>
    </>
  );
};

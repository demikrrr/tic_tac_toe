// import { useState } from 'react'
import styles from './app.module.css';

export const Game = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={styles['tic-tac-toe']}>
        <div>O</div> <div></div> <div>X</div> <div>X</div> <div>O</div> <div>X</div>
        <div>O</div> <div></div> <div></div>
      </div>
    </>
  );
};

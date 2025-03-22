import React from 'react';
import { Field } from './components/field/field';
import { Information } from './components/Information/information';
import styles from './game.module.css';
import PropTypes from 'prop-types';
import { PLAYER, STATUS } from './constants';

export const GameLayout = ({
  field,
  handleCellClick,
  status,
  currentPlayer,
  restartGame,
}) => {
  return (
    <>
      <div className={styles['game']}>
        <h1>tic tac toe</h1>
        <Information status={status} currentPlayer={currentPlayer} />
        <Field field={field} handleCellClick={handleCellClick} />
        <button onClick={restartGame}>Начать заново</button>
      </div>
    </>
  );
};

GameLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.cross, PLAYER.nobody, PLAYER.nought])),
  handleCellClick: PropTypes.func,
  restartGame: PropTypes.func,
  status: PropTypes.oneOf([STATUS.draw, STATUS.move, STATUS.win]),
  currentPlayer: PropTypes.oneOf([PLAYER.cross, PLAYER.nobody, PLAYER.nought]),
};

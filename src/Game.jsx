import React from 'react';
import { useState } from 'react';
import { GameLayout } from './game-layout.jsx';
import { createEmptyField, STATUS, PLAYER } from './constants.js';
// import { handleCellClick } from './functions.js';

export const Game = () => {
  const [status, setStatus] = useState(STATUS.move);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.cross);
  const [field, setField] = useState(createEmptyField);

  const handleCellClick = (index) => {
    if (status === STATUS.WIN || field[index] !== PLAYER.nobody) {
      return;
    }

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);
    setCurrentPlayer(currentPlayer === PLAYER.cross ? PLAYER.nought : PLAYER.cross);
  };

  return (
    <GameLayout
      handleCellClick={handleCellClick}
      field={field}
      status={status}
      currentPlayer={currentPlayer}
    />
  );
};

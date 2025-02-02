import React from 'react';
import { useState } from 'react';
import { GameLayout } from './game-layout.jsx';
import { createEmptyField, STATUS, PLAYER } from './constants.js';
import { handleCellClick } from './functions.js';

export const Game = () => {
  const [status, setStatus] = useState(STATUS.move);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.cross);
  const [field, setField] = useState(createEmptyField);

  return (
    <GameLayout
      handleCellClick={handleCellClick}
      field={field}
      status={status}
      currentPlayer={currentPlayer}
    />
  );
};

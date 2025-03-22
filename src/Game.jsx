import React from 'react';
import { useState } from 'react';
import { GameLayout } from './game-layout.jsx';
import { STATUS, PLAYER, WIN_PATTERNS } from './constants.js';
import { restartGame, createEmptyField, handleCellClick } from './functions.js';

export const Game = () => {
  const [status, setStatus] = useState(STATUS.move);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.cross);
  const [field, setField] = useState(createEmptyField);

  const state = { status, setStatus, currentPlayer, setCurrentPlayer, field, setField };

  return (
    <GameLayout
      handleCellClick={(index) => handleCellClick(state, index)}
      field={field}
      status={status}
      currentPlayer={currentPlayer}
      restartGame={() => restartGame(state)}
    />
  );
};

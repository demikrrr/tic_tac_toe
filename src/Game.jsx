import React from 'react';
import { useState } from 'react';
import { GameLayout } from './game-layout.jsx';
import { createEmptyField, STATUS, PLAYER, WIN_PATTERNS } from './constants.js';
// import { handleCellClick } from './functions.js';

export const Game = () => {
  const [status, setStatus] = useState(STATUS.move);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.cross);
  const [field, setField] = useState(createEmptyField);

  const handleCellClick = (index) => {
    if (
      status === STATUS.win ||
      status === STATUS.draw ||
      field[index] !== PLAYER.nobody
    ) {
      return;
    }

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    if (checkWin(newField, currentPlayer)) {
      setStatus(STATUS.win);
    } else if (
      (newfield) => newfield.some((currentValue) => currentValue === PLAYER.nobody)
    ) {
      setCurrentPlayer(currentPlayer === PLAYER.cross ? PLAYER.nought : PLAYER.cross);
    }
  };

  const checkWin = (field, currentPlayer) =>
    WIN_PATTERNS.some((winPattern) =>
      winPattern.every((index) => field[index] === currentPlayer),
    );

  return (
    <GameLayout
      handleCellClick={handleCellClick}
      field={field}
      status={status}
      currentPlayer={currentPlayer}
    />
  );
};

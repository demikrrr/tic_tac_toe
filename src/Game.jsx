import React from 'react';
import { useState } from 'react';
import { GameLayout } from './game-layout.jsx';
import { STATUS, PLAYER } from './constants.js';

export const Game = () => {
  const [status, setStatus] = useState(STATUS.move);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.cross);

  return <GameLayout status={status} currentPlayer={currentPlayer}/>;
};

import { STATUS, PLAYER, WIN_PATTERNS } from './constants';

export const restartGame = ({ setStatus, setCurrentPlayer, setField }) => {
  setStatus(STATUS.move);
  setCurrentPlayer(PLAYER.cross);
  setField(createEmptyField);
};

export const createEmptyField = new Array(9).fill(PLAYER.nobody);

export const handleCellClick = (
  { status, setStatus, currentPlayer, setCurrentPlayer, field, setField },
  index,
) => {
  if (status === STATUS.win || status === STATUS.draw || field[index] !== PLAYER.nobody) {
    return;
  }

  const newField = [...field];
  newField[index] = currentPlayer;
  setField(newField);

  if (checkWin(newField, currentPlayer)) {
    setStatus(STATUS.win);
  } else if (newField.some((currentValue) => currentValue === PLAYER.nobody)) {
    setCurrentPlayer(currentPlayer === PLAYER.cross ? PLAYER.nought : PLAYER.cross);
  } else {
    setStatus(STATUS.draw);
  }
};

const checkWin = (field, currentPlayer) =>
  WIN_PATTERNS.some((winPattern) =>
    winPattern.every((index) => field[index] === currentPlayer),
  );

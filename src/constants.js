export const STATUS = {
  move: 0,
  win: 1,
  draw: 2,
};

export const PLAYER = {
  cross: 0,
  nought: 1,
  nobody: 2,
};

export const ACTION = {
  [STATUS.move]: 'Ходит',
  [STATUS.win]: 'Победил',
};

export const PLAYER_NAME = {
  [PLAYER.cross]: '╳',
  [PLAYER.nought]: '◯',
  [PLAYER.nobody]: '',
};

export const createEmptyField = new Array(9).fill(PLAYER.nobody);

export const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

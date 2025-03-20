export const STATUS = {
  move: 0,
  win: 1,
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

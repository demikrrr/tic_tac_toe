import { FieldLayout } from './field-layout';
import { PLAYER, PLAYER_NAME } from '../../constants';

export const Field = ({ handleCellClick }) => {
  const field = new Array(9).fill(PLAYER_NAME[PLAYER.nought]);

  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

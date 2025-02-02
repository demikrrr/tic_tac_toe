import { FieldLayout } from './field-layout';
import { PLAYER, PLAYER_NAME } from '../../constants';

export const Field = ({field, handleCellClick }) => {
  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

import { FieldLayout } from './field-layout';
import PropTypes from 'prop-types';
import { PLAYER } from '../../constants';

export const Field = ({ field, handleCellClick }) => {
  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.cross, PLAYER.nobody, PLAYER.nought])),
  handleCellClick: PropTypes.func,
};

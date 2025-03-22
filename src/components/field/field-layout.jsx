import styles from './field.module.css';
import { PLAYER, PLAYER_NAME } from '../../constants';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleCellClick }) => {
  return (
    <>
      <div className={styles.field}>
        {field.map((currentValue, index) => (
          <button
            key={index}
            className={styles.cell}
            onClick={() => handleCellClick(index)}
          >
            {PLAYER_NAME[currentValue]}
          </button>
        ))}
      </div>
    </>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.cross, PLAYER.nobody, PLAYER.nought])),
  handleCellClick: PropTypes.func,
};

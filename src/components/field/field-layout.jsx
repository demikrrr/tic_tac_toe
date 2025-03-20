import styles from './field.module.css';
import {PLAYER_NAME} from '../../constants'

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

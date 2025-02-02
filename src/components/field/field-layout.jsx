import styles from './field.module.css';

export const FieldLayout = ({ field, handleCellClick }) => {
  return (
    <>
      <div className={styles.field}>
        {field.map((cellValue, index) => (
          <button
            key={index}
            className={styles.cell}
            onClick={() => handleCellClick(index)}
          >
            {cellValue}
          </button>
        ))}
      </div>
    </>
  );
};

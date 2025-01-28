import styles from './field.module.css';

export const FieldLayout = ({ field, handleCellClick }) => {
  return (
    <>
      <div className={styles.field}>
        {field.map((index) => (
          <button key={index} className={styles.cell} onClick={handleCellClick}></button>
        ))}
      </div>
    </>
  );
};

import styles from './field.module.css';
import { field } from '../../constants';

export const FieldLayout = () => {
  return (
    <>
      <div className={styles.field}>
        {field.map((index) => (
          <button key={index} className={styles.cell}></button>
        ))}
      </div>
    </>
  );
};

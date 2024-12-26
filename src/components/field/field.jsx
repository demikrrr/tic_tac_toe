import styles from './field.module.css';

export const player = { cross: 'X', zero: '0', nothing: null };

export const field = [];
for (let i = 0; i < 9; i++) {
  field.push(player.nothing);
}

export const Field = () => {
  return (
    <>
      <div className={styles.field}>
        {field.map((index) => (
          <button key={index}></button>
        ))}
      </div>
    </>
  );
};

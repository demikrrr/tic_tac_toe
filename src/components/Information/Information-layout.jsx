import styles from './information.module.css';

export const InformationLayout = ({ information }) => {
  return (
    <>
      <div className={styles.information}>{information}</div>
    </>
  );
};

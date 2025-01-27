import styles from './information.module.css';
// import { field } from '../../constants';

export const InformationLayout = ({ information }) => {
  return (
    <>
      <div className={styles.information}>{information}</div>
    </>
  );
};

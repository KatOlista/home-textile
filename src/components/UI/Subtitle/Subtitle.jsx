import styles from './Subtitle.module.scss';

export const Subtitle = ({ text }) => {

  return (
    <h2 className={styles.subtitle}>
      {text}
    </h2>
  )
};

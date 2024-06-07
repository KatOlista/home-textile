import styles from './Button.module.scss';

export const Button = ({ content, src }) => {

  return (
    <button className={styles.button}>
      {content}

      {src && (<img src={src} alt="" />)}
    </button>
  )
};

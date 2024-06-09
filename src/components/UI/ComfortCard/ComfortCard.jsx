import styles from './ComfortCard.module.scss';

export const ComfortCard = ({ benefit }) => {
  return (
    <div className={styles.card} style={{ background: `${benefit.background}` }}>
      <p className={styles.card__icon}>
        {benefit.icon}
      </p>

      <h3 className={styles.card__title}>
        {benefit.title}
      </h3>

      <p className={styles.card__text}>
        {benefit.text}
      </p>
    </div>
  )
};

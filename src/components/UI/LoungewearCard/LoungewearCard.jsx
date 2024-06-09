import styles from './LoungewearCard.module.scss';

export const LoungewearCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img
          src={item.mainImage.asset.url}
          alt={item.title}
        />
      </div>

      <p className={styles.card__title}>{item.title}</p>
    </div>
  )
};

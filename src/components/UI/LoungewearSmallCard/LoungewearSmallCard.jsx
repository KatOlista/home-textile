import styles from './LoungewearSmallCard.module.scss';

export const LoungewearSmallCard  = ({ item }) => {
  return (
    <div className={styles.card}>
      <img
        src={item.mainImage.asset.url}
        alt={item.title}
      />
    </div>
  )
};

import styles from './BrandCard.module.scss';

export const BrandCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img
        src={item.mainImage.asset.url}
        alt={item.title}
      />
    </div>
  )
};

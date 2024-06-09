import styles from './BrandCard.module.scss';

export const BrandCard = ({ brand }) => {
  return (
    <div className={styles.card}>
      <img
        src={brand.mainImage.asset.url}
        alt={brand.title}
      />
    </div>
  )
};

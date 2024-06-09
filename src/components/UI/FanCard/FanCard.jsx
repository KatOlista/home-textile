import styles from './FanCard.module.scss';

export const FanCard = ({ comment }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <div className={styles.card__author}>
          <div className={styles.card__photo} />

          <div className={styles.card__info}>
            <span className={styles.card__stars}>
              <img src={comment.mainImage.asset.url} alt="" />
            </span>

            <span className={styles.card__name}>{comment.author.name}</span>
          </div>
        </div>

        <p className={styles.card__comment}>{comment.body[0].children[0].text}</p>
      </div>
    </div>
  )
};

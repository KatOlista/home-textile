import { Button } from '../Button/Button';
import styles from './Stars.module.scss';

import arrow from '../../../assets/imgs/additional/arrow.png';
import stars from '../../../assets/imgs/additional/stars.png';

export const Stars = () => {
  return (
    <>
      <div className={styles.stars__button}>
        <Button content={`Customize Your Outfit`} src={arrow} />
      </div>

      <div className={styles.stars__stars}>
        <img
          src={stars}
          alt="stars"
        />

        <span className={styles.stars__online}>
          One of 500+ 5 Star Reviews Online
        </span>
      </div>
    </>
  )
}

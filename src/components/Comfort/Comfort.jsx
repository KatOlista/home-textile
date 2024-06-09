import { Stars, Subtitle } from '../UI';
import { indicator } from '../../utils/constants';

import styles from './Comfort.module.scss';

import CartIcon from '../../assets/icons/cart.svg?react';
import LorryIcon from '../../assets/icons/lorry.svg?react';
import SunmoonIcon from '../../assets/icons/sun-moon.svg?react';
import { ComfortSlider } from '../ComfortSlider/ComfortSlider';

const BENEFITS = [
  {
    id: 1,
    background: '#f0eeef',
    icon: <CartIcon className={styles.cart} />,
    title: 'You save.',
    text: 'Browse our comfort sets and save 15% when you bundle.',
  },

  {
    id: 2,
    background: '#f9f0e6',
    icon: <LorryIcon className={styles.lorry}/>,
    title: 'We ship.',
    text: 'We ship your items within 1-2 days of receiving your order.',
  },

  {
    id: 3,
    background: '#f0eeef',
    icon: <SunmoonIcon className={styles.sunmoon}/>,
    title: 'You enjoy!',
    text: 'Wear hernest around the house, out on the town, or in bed.',
  },
];

export const Comfort = () => {
  return (
    <section className={styles.comfort}>
      <div className={styles.comfort__subtitle}>
        <Subtitle text='Comfort made easy.' />
      </div>

      {!indicator
        ? (
            <div className={styles.comfort__slider}>
              <ComfortSlider benefits={BENEFITS} />
            </div>
        ) : (
          <div></div>
      )}

      <Stars />
    </section>
  )
};

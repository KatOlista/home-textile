import { Button, Stars, Subtitle } from '../UI';
import { indicator } from '../../utils/constants';

import styles from './Footer.module.scss';

import arrow from '../../assets/imgs/additional/arrow.png';

import leftPicture from '../../assets/imgs/additional/left.png';
import centralPicture from '../../assets/imgs/additional/center.png';
import rigthPicture from '../../assets/imgs/products/product-picture8.png';
import paymentPicture from '../../assets/imgs/additional/payment.png';

import GrayLorryIcon from '../../assets/icons/gray-lorry.svg?react';
import GrayShieldIcon from '../../assets/icons/gray-shield.svg?react';
import GrayCartIcon from '../../assets/icons/gray-cart.svg?react';

const additionalBenefits = [
  {id: 1, icon: <GrayLorryIcon className={styles.lorry} />, text: 'FREE Shipping on Orders over $200'},
  {id: 2, icon: <GrayShieldIcon className={styles.shield} />, text: 'Over 500+ 5 Star Reviews Online'},
  {id: 3, icon: <GrayCartIcon className={styles.cart} />, text: 'Made ethically and responsibly.'},
];

export const Footer = () => {
  const content = indicator
    ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.'
    : 'Click below to browse our collection!';

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__subtitle}>
        <Subtitle text='Find something you love.' />
      </div>

      <p className={styles.footer__info}>{content}</p>

      <div className={styles.footer__imgs}>
        <div className={styles.footer__empty} />

        <div className={styles.footer__secondary}>
          <img
            src={leftPicture}
            alt="product example"
            className={styles.footer__left}
          />

          <img
            src={rigthPicture}
            alt="product example"
            className={styles.footer__right}
          />
        </div>

        <img
          className={styles.footer__prime}
          src={centralPicture}
          alt="product example"
        />

        <div className={styles.footer__empty} />
      </div>

      {!indicator
        ? (
          <div className={styles.footer__stars}>
            <Stars />
          </div>
        ) : (
          <>
            <div className={styles.footer__stars}>
              <Button content={`Customize Your Outfit`} src={arrow} />

              <img
                src={paymentPicture}
                alt="payment methods"
                className={styles.footer__payment}
              />
            </div>

            <ul className={styles.footer__list}>
              {additionalBenefits.map(benefit => (
                <li key={benefit.id} className={styles.footer__li}>
                  <span className={styles.footer__icon}>{benefit.icon}</span>

                  <p className={styles.footer__text}>{benefit.text}</p>
                </li>
              ))}
            </ul>
          </>
        )}
    </footer>
  )
};

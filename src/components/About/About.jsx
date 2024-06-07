import { Button } from '../UI';

import styles from './About.module.scss';

import logo from '../../assets/imgs/brands/byteex-logo.png';
import arrow from '../../assets/imgs/additional/arrow.png';
import author from '../../assets/imgs/additional/author.png';
import stars from '../../assets/imgs/additional/stars.png';
import productPicture1 from '../../assets/imgs/products/product-picture-1.png';
import productPicture2 from '../../assets/imgs/products/product-picture-2.png';
import productPicture3 from '../../assets/imgs/products/product-picture-3.png';

import SunMoonIcon from '../../assets/icons/sun-moon.svg?react';
import CartIcon from '../../assets/icons/cart.svg?react';
import WavesIcon from '../../assets/icons/waves.svg?react';
import { bigScreenBreakpoint, userDeviceWidth } from '../../utils/constants';

const BENEFITS = [
  {id: 1, icon: <SunMoonIcon className={styles.sunmoon} />, text: 'Beautiful, comfortable loungewear for day or night.'},
  {id: 2, icon: <CartIcon className={styles.cart} />, text: 'No wasteful extras, like tags or plastic packaging.'},
  {id: 3, icon: <WavesIcon className={styles.waves} />, text: 'Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.'},
];

export const About = () => {

  const quote = userDeviceWidth >= bigScreenBreakpoint
    ? 'Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.'
    : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.';

  return (
    <section className={styles.about}>
      <img src={logo} alt="byteex logo" className={styles.about__logo} />

      <h1 className={styles.about__title}>
        Don’t apologize for being comfortable.
      </h1>

      <div className={styles.about__content}>
        <div className={styles.about__imgs}>
          <div className={styles.about__empty} />

          <div className={styles.about__secondary}>
            <img
              src={productPicture1}
              alt="photo"
            />

            <img
              src={productPicture3}
              alt="photo"
            />
          </div>

          <img
            className={styles.about__prime}
            src={productPicture2}
            alt="photo"
          />

          <div className={styles.about__empty} />
        </div>

        <div  className={styles.about__info}>
          <ul className={styles.about__benefits}>
            {BENEFITS.map(benefit => (
              <li key={benefit.id} className={styles.about__benefit}>
                <span>{benefit.icon}</span>

                <p>{benefit.text}</p>
              </li>
            ))
            }
          </ul>

          <div className={styles.about__button}>
            <Button content={`Customize Your Outfit`} src={arrow} />
          </div>
        </div>
      </div>

      <div className={styles.about__feedback}>
        <div className={styles.about__author}>
          <img
            src={author}
            alt="autor photo"
            className={styles.about__photo}
          />

          <div className={styles.about__sign}>
            <div className={styles.about__review}>
              <img
                src={stars}
                alt="stars"
              />

              <span className={styles.about__online}>
                One of 500+ 5 Star Reviews Online
              </span>
            </div>

            <span className={styles.about__name}>Amy P.</span>
          </div>
        </div>

        <p className={styles.about__quote}>
          {quote}
        </p>
      </div>

    </section>
  )
};

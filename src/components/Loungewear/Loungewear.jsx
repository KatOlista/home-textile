import { useEffect, useState } from 'react';

import { BrandCard, Stars, Subtitle } from '../UI';
import { client } from '../../client';
import { LoungewearSlider, BrandSlider } from '..';
import { indicator } from '../../utils/constants';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/scss';
import styles from './Loungewear.module.scss';

import SunMoonIcon from '../../assets/icons/sun-moon.svg?react';
import CartIcon from '../../assets/icons/cart.svg?react';
import WavesIcon from '../../assets/icons/waves.svg?react';
import LeafIcon from '../../assets/icons/leaf.svg?react';
import CloudIcon from '../../assets/icons/cloud.svg?react';

export const Loungewear = () => {
  const [loungewears, setLoungewears] = useState([]);
  const [brands, setBrands] = useState([]);

  const bigScreenIcons = {
    cloudOrCart: <CartIcon className={styles.cart} />,
    sunmoonOrLeaf: <LeafIcon className={styles.leaf} />,
    leafOrSunmoon: <SunMoonIcon className={styles.sunmoon} />,
  };

  const smallScreensIcons = {
    cloudOrCart: <CloudIcon className={styles.cloud} />,
    sunmoonOrLeaf: <SunMoonIcon className={styles.sunmoon} />,
    leafOrSunmoon: <LeafIcon className={styles.leaf} />
  };

  const content = indicator
    ? bigScreenIcons
    : smallScreensIcons;

  const BENEFITS = [
    {
      id: 1,
      icon: content.cloudOrCart,
      title: 'Ethically sourced.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ',
  },
    {
      id: 2,
      icon: content.sunmoonOrLeaf,
      title: 'Responsibly made.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. '
  },
    {
      id: 3,
      icon: content.leafOrSunmoon,
      title: 'Made for living in.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. '
  },
    {
      id: 4,
      icon: <WavesIcon className={styles.waves} />,
      title: 'Unimaginably comfortable.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. '
  },
  ];

  useEffect(() => {
    client
      .fetch(`*[_type == "robe"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
      }`)
      .then((data) => setLoungewears(data))
      .catch(console.error);

    client
      .fetch(`*[_type == "brand"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
      }`)
      .then((data) => setBrands(data))
      .catch(console.error);
  }, []);

  return (
    <section className={styles.loungewear}>
      <p className={styles.loungewear__seen}>as seen in</p>

      {!indicator
        ? (
            <div className={styles.loungewear__slider}>
              {brands.length && (
                <BrandSlider brands={brands} />
              )}
            </div>
          ) : (
            <div className={styles.loungewear__brands}>
              {brands.map(brand => (
                <BrandCard key={brand.slug.current} brand={brand} />
              ))}
            </div>
        )}

      <div className={styles.loungewear__subtitle}>
        <Subtitle text='Loungewear you can be proud of.' />
      </div>

      <div className={styles.loungewear__content}>
        <div className={styles.loungewear__imgs}>
          {!!loungewears.length && (
            <LoungewearSlider loungewears={loungewears} />
          )}
        </div>

        <div className={styles.loungewear__info}>
          <ul className={styles.loungewear__benefits}>
            {BENEFITS.map(benefit => (
              <li key={benefit.id} className={styles.loungewear__benefit}>
                <div className={styles.loungewear__name}>
                  <span>{benefit.icon}</span>

                  <h3>{benefit.title}</h3>
                </div>

                <p className={styles.loungewear__text}>{benefit.text}</p>
              </li>
            ))
            }
          </ul>

          {!indicator && (
            <Stars />
          )}
        </div>
      </div>
    </section>
  )
};

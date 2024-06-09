import { Subtitle } from '../UI';
import styles from './Impact.module.scss';

import Co2Icon from '../../assets/icons/co2.svg?react';
import WaterDropIcon from '../../assets/icons/water-drop.svg?react';
import EnergyIcon from '../../assets/icons/energy.svg?react';
import { indicator } from '../../utils/constants';

const impacts = [
  {
    id: 1,
    icon: <Co2Icon className={styles.co2} />,
    data: '3,927 kg',
    text: 'of CO2 saved',
  },
  {
    id: 2,
    icon: <WaterDropIcon className={styles['water-drop']} />,
    data: '2,546,167 days',
    text: 'of drinking water saved',
  },
  {
    id: 3,
    icon: <EnergyIcon className={styles.energy} />,
    data: '7,321 kWh',
    text: 'of energy saved',
  },
];

export const Impact = () => {
  return (
    <section className={styles.impact}>
      <div className={styles.impact__subtitle}>
        <Subtitle text='Our Total Green Impact' />
      </div>

      <ul className={styles.impact__list}>
        <li className={styles.impact__li}>
          <span className={styles.impact__icon}>
            {impacts[0].icon}
          </span>

          <p className={styles.impact__number}>
            {impacts[0].data}
          </p>

          <span className={styles.impact__text}>
            {impacts[0].text}
          </span>
        </li>

        <li className={`${styles.impact__li} ${styles['impact__middle-li']}`}>
          <span className={styles.impact__icon}>
            {impacts[1].icon}
          </span>

          <p className={styles.impact__number}>
            {impacts[1].data}
          </p>

          <span className={styles.impact__text}>
            {impacts[1].text}
          </span>
        </li>

        {indicator && (
          <li className={styles.impact__li}>
            <span className={styles.impact__icon}>
              {impacts[2].icon}
            </span>

            <p className={styles.impact__number}>
              {impacts[2].data}
            </p>

            <span className={styles.impact__text}>
              {impacts[2].text}
            </span>
          </li>
        )}
      </ul>
    </section>
  )
};

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import styles from './ComfortSlider.module.scss';

export const ComfortSlider = ({ benefits }) => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#676869',
        '--swiper-pagination-color': '#676869',
      }}
      loop
      modules={[ Navigation, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      navigation
      slidesPerView={1}
      className={styles.slider}
    >
      {benefits.map(benefit => (
        <SwiperSlide key={benefit.id}>
          <div className={styles.slider__card} style={{ background: `${benefit.background}` }}>
            <p className={styles.slider__icon}>
              {benefit.icon}
            </p>

            <h3 className={styles.slider__title}>
              {benefit.title}
            </h3>

            <p className={styles.slider__text}>
              {benefit.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

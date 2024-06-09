import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BrandCard } from '../UI';
import { indicator } from '../../utils/constants';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import styles from './BrandSlider.module.scss';

export const BrandSlider = ({ brands }) => {
  const brandSlidesPerView = indicator
  ? 5
  : 3;

  return (
    <Swiper
      loop
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        bulletClass: `${styles.brand__bullet}`,
        bulletActiveClass: `${styles.brand__active}`,
      }}
      spaceBetween={'7%'}
      slidesPerView={brandSlidesPerView}
      className={styles.brand}
    >
      {brands.map(brand => (
        <SwiperSlide key={brand.slug.current}>
          <BrandCard
            brand={brand}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

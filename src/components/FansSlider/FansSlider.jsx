import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FanCard } from '../UI';
import { indicator } from "../../utils/constants";

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import styles from './FansSlider.module.scss';

export const FansSlider = ({ comments }) => {
  const brandSlidesPerView = indicator
  ? 3
  : 1;

  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#676869',
        '--swiper-pagination-color': '#676869',
      }}
      loop
      navigation
      modules={[Pagination, Autoplay, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        bulletClass: `${styles.slider__bullet}`,
        bulletActiveClass: `${styles.slider__active}`,
      }}
      spaceBetween={10}
      slidesPerView={brandSlidesPerView}
      swiperClass={styles.slider}
    >
      {comments.map(comment => (
        <SwiperSlide key={comment.slug.current}>
          <FanCard
            comment={comment}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

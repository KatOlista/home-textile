import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ComfortCard } from '../UI';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';

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
    >
      {benefits.map(benefit => (
        <SwiperSlide key={benefit.id}>
          <ComfortCard benefit={benefit} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

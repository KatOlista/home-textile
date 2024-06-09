import { useState } from 'react';
import { Navigation, Autoplay, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { LoungewearCard, LoungewearSmallCard } from '../UI';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/scss';
import styles from './LoungewearSlider.module.scss';

export const LoungewearSlider = ({ loungewears }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const loungewearSlidesPerView = 1;

  return (
    <div className={styles.slider}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#676869',
          '--swiper-pagination-color': '#676869',
        }}
        loop
        modules={[FreeMode, Navigation, Autoplay, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation
        slidesPerView={loungewearSlidesPerView}
        className={styles.wear}
      >
        {loungewears.map(wear => (
          <SwiperSlide key={wear.slug.current}>
            <LoungewearCard
              item={wear}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.slider__bullets}>
        <div className={styles.slider__wrapper}>
          <Swiper
            onClick={setThumbsSwiper}
            spaceBetween={8}
            // onSwiper={setThumbsSwiper}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            // loop
            slidesPerView={loungewears.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {loungewears.map(wear => (
              <SwiperSlide key={wear.slug.current}>
                <LoungewearSmallCard
                  item={wear}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
};

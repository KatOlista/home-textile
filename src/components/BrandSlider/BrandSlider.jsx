import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BrandCard } from '../UI';

import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss';
import styles from './BrandSlider.module.scss';
import { bigScreenBreakpoint, userDeviceWidth } from '../../utils/constants';

// import ecoStylist from '../../assets/imgs/brands/eco-stylist.png';
// import canadianLiving from '../../assets/imgs/brands/canadian-living.png';
// import jullianHarris from '../../assets/imgs/brands/jullian-harris.png';
// import theEcoHub from '../../assets/imgs/brands/the-eco-hub.png';
// import trendhunter from '../../assets/imgs/brands/trendhunter.png';

// const BRANDS = [
//   {id: 1, src: ecoStylist, alt: 'eco-stylist logo'},
//   {id: 2, src: canadianLiving, alt: 'canadian-living logo'},
//   {id: 3, src: jullianHarris, alt: 'jullian-harris logo'},
//   {id: 4, src: theEcoHub, alt: 'the-eco-hub logo'},
//   {id: 5, src: trendhunter, alt: 'trendhunter logo'},
// ];

export const BrandSlider = ({ brands }) => {
  const brandSlidesPerView = userDeviceWidth >= bigScreenBreakpoint
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
            item={brand}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

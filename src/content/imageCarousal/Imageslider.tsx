"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './Styled.css';
import ImageSlide from './ImageSlide'; // Adjust the path as per your project structure

const ImageSlider: React.FC = () => {
  const breakpoints = {
    900: { slidesPerView: 6 },
    600: { slidesPerView: 5 },
    300: { slidesPerView: 4 },
  };

  const slideData: { imageUrl: string; altText: string }[] = [
    { imageUrl: 'assets/svg/carousol/AECOMLogo.svg', altText: 'AECOM Logo' },
    { imageUrl: 'assets/svg/carousol/ArupLogo.svg', altText: 'Arup Logo' },
    { imageUrl: 'assets/svg/carousol/JacobsLogo.svg', altText: 'Jacobs Logo' },
    { imageUrl: 'assets/svg/carousol/WSPLogo.svg', altText: 'WSP Logo' },
    { imageUrl: 'assets/svg/carousol/MottLogo.svg', altText: 'Mott MacDonald Logo' },
    { imageUrl: 'assets/svg/carousol/ArcadisLogo.svg', altText: 'Arcadis Logo' },
    { imageUrl: 'assets/svg/carousol/StantecLogo.svg', altText: 'Stantec Logo' },
    { imageUrl: 'assets/svg/carousol/ParsonsLogo.svg', altText: 'Parsons Logo' },
    { imageUrl: 'assets/svg/carousol/HDRLogo.svg', altText: 'HDR Inc. Logo' },
    { imageUrl: 'assets/svg/carousol/BechtelLogo.svg', altText: 'Bechtel Logo' },
  ];

  return (
    <Swiper
      className="uniqueSwiper relative"
      direction="horizontal"
      loop={true}
      speed={2000}
      autoplay={{ delay: 500, pauseOnMouseEnter: true, disableOnInteraction: false }}
      keyboard={{ enabled: true }}
      modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
      breakpoints={breakpoints}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <ImageSlide imageUrl={slide.imageUrl} altText={slide.altText} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;

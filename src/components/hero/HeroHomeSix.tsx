'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HeroHomeSix.module.css';

const HeroCarousel: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="heroSwiper"
    >
      <SwiperSlide className="slide" style={{ backgroundImage: 'url(/assets/img/hero_img_1.jpg)' }}>
        <div className="slideContent">
          <h2>Slide 1 Title</h2>
          <p>Slide 1 Description</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: 'url(/assets/img/hero_img_1.jpg)' }}>
        <div className="slideContent">
          <h2>Slide 2 Title</h2>
          <p>Slide 2 Description</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: 'url(/assets/img/hero_img_1.jpg)' }}>
        <div className="slideContent">
          <h2>Slide 3 Title</h2>
          <p>Slide 3 Description</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;

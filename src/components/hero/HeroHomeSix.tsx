'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './HeroHomeSix.module.css';

const HeroCarousel: React.FC = () => {
  return (
  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 300px)', // Calculate height with a gap of 300px from all sides
        padding: '0 300px', // Add padding of 300px from all sides
        boxSizing: 'border-box', // Include padding in the total width/height
        borderRadius:'20px',
      }}
    >
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
        style={{ width: '100%', height: '100%' }}
      >
      <SwiperSlide className="slide" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1677653128215-43b4e3732d17?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className="slideContent">
          <h2>Slide 1 Title</h2>
          <p>Slide 1 Description</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664302274909-2971dc5375d1?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGFkZHJlc3N8ZW58MHwwfHx8MTcxODY1MzEyNHwx&ixlib=rb-4.0.3)' }}>
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
    </div>
  );
};

export default HeroCarousel;

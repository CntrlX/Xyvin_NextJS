'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const HeroCarousel: React.FC = () => {
  return (
  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(60vh - 300px)', // Calculate height with a gap of 300px from all sides
        padding: '0 100px', 
        boxSizing: 'border-box', 
        borderRadius:'200px',
        minWidth:'398px',
        background:'#fff',
        marginTop:'180px',
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ width: '100%', height: '100%' }}
      >
      <SwiperSlide className="slide"  style={{
            backgroundImage:
              'url(https://plus.unsplash.com/premium_photo-1677653128215-43b4e3732d17?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover', // Ensure the background image covers the entire slide
            backgroundPosition: 'center', // Center the background image
            minHeight: '300px', // Set the minimum height of the slide
            borderRadius: '20px', // Border radius of 20px
          }}
        >
        <div className="slideContent">
          <h2>Slide 1 Title</h2>
          <p>Slide 1 Description</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide"  style={{
            backgroundImage:
              'url(https://plus.unsplash.com/premium_photo-1677653128215-43b4e3732d17?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '300px', 
            borderRadius: '20px',
          }}
         >
        <div className="slideContent">
          <h2>Slide 2 Title</h2>
          <p>Slide 2 Description</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide"  style={{
            backgroundImage:
              'url(https://plus.unsplash.com/premium_photo-1677653128215-43b4e3732d17?q=80&w=1382&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '300px',
            borderRadius: '20px', 
          }}
        >
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

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
        background: '#000',
        padding: '50px 0',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: '#fff' }}>Achievements</h2>


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
        background:'#3333',
        marginTop:'100px',
        marginBottom:'20px',
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
              'url(/assets/img/award_1.svg)',
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
              'url(/assets/img/award_2.svg)',
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
              'url(/assets/img/award_3.svg)',
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
    </div>
  );
};

export default HeroCarousel;

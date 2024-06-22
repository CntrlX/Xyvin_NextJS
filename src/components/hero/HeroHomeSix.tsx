'use client';

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
        borderRadius: '200px',
        minWidth: '398px',
        background: '#fff',
        marginTop: '180px',
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
        <SwiperSlide
          className="slide"
          style={{
            backgroundImage: 'url(/assets/img/carousel_img/black5.jpg)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '400px', 
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
          
          }}
        >
          <div className="slideContent" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2em', margin: '10px 0', color:'#fff' }}>Innovate, create, and elevate.</h2>
            <p style={{ fontSize: '1em', margin: '10px 0', color:'#CAC9CA' }}>
              Unleash your potential with our mantra: Innovate, create, and elevate. Transform
              your ideas into reality and reach new heights with us!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slide"
          style={{
            backgroundImage: 'url(/assets/img/carousel_img/black2.jpg)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '400px', 
            borderRadius: '20px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <div className="slideContent" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2em', margin: '10px 0', color:'#fff' }}>Empowering innovation through visionary solutions</h2>
            <p style={{ fontSize: '1em', margin: '10px 0', color:'#989698' }}>
              Our goal is to offer businesses groundbreaking technological solutions that
              enhance productivity and foster growth.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slide"
          style={{
            backgroundImage: 'url(/assets/img/carousel_img/black6.webp)',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '400px', 
            borderRadius: '20px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          <div className="slideContent" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2em', margin: '10px 0', color:'#fff' }}>Top-notch SEO services and growth excellence</h2>
            <p style={{ fontSize: '1em', margin: '10px 0' , color:'#989698'}}>
              Our commitment is to devise effective strategies and foster business growth
              through data-driven insights and precise targeting.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;

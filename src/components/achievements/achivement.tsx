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
        background: '#01112F',
        padding: '50px 0',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: '#fff', fontSize: '24px' }}>Achievements</h2>
      <p style={{ color: '#CAC9CA', fontSize: '16px', margin: '10px 0' }}>
        Celebrating our outstanding accomplishments and prestigious awards.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(60vh - 300px)',
          padding: '0 20px',
          boxSizing: 'border-box',
          background: '#01112F',
          marginTop: '20px',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
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
          className="swiperContainer"
        >
          <SwiperSlide
            className="slide"
            style={{
              backgroundImage: 'url(/assets/img/award_1.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '300px',
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <div className="slideContent" style={{ textAlign: 'center', padding: '20px' }}>
              <h2>Award 1</h2>
              <p>The great award of best startup</p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="slide"
            style={{
              backgroundImage: 'url(/assets/img/award_2.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '300px',
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <div className="slideContent" style={{ textAlign: 'center', padding: '20px' }}>
              <h2>Award 2</h2>
              <p>Slide 2 Description</p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="slide"
            style={{
              backgroundImage: 'url(/assets/img/award_3.svg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '300px',
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            <div className="slideContent" style={{ textAlign: 'center', padding: '20px' }}>
              <h2>Award 3</h2>
              <p>Slide 3 Description</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <style jsx>{`
        .swiperContainer {
          width: 100%;
          height: 100%;
        }

        .slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .slideContent {
          text-align: center;
        }

        h2 {
          font-size: 2em;
          margin: 10px 0;
        }

        p {
          font-size: 1em;
          margin: 10px 0;
          color: #cac9ca;
        }

        @media (max-width: 1200px) {
          .slideContent {
            padding: 15px;
          }

          h2 {
            font-size: 1.8em;
          }

          p {
            font-size: 0.9em;
          }
        }

        @media (max-width: 768px) {
          .slideContent {
            padding: 10px;
          }

          h2 {
            font-size: 1.6em;
          }

          p {
            font-size: 0.8em;
          }
        }

        @media (max-width: 480px) {
          .slideContent {
            padding: 5px;
          }

          h2 {
            font-size: 1.4em;
          }

          p {
            font-size: 0.7em;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;

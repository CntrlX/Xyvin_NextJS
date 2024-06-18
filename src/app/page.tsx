

import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import LeftSideBar from '@/components/sticky/leftSticky/leftSticky'
import BottomSticky from '@/components/sticky/bottomSticky/bottomSticky'

import HeroHomeSix from "@/components/hero/HeroHomeSix"

export const metadata = {
  title: "Xyvin Tech",  
};


const index = () => {
  return (
    <Wrapper>      
      <HeaderOne />
      <div id="scrollsmoother-container">
        <HeroHomeOne />
        <HeroHomeSix/>
        <LeftSideBar/>
        <MarqueeAreaHomeOne />
        <AboutHomeOne />
        <ServiceHomeOne />
        <PortfolioHomeOne />
        <AwardsHomeOne />
        <Testimonial />
        <FunFactHomeOne />
        <VideoHomeOne />
        <BlogHomeOne />
        <SubscribeHomeOne />
        <BrandHomeOne style_2={false}  />
        <BottomSticky/>
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default index;
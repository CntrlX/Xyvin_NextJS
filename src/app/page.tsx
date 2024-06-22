import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
// import HeroHomeFour from '@/components/hero/HeroHomeFour';
// import AboutHomeOne from '@/components/about/AboutHomeOne';
// import ServiceHomeOne from '@/components/service/ServiceHomeOne';
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
import LeftSideBar from '@/components/sticky/leftSticky/leftSticky';
import BottomSticky from '@/components/sticky/bottomSticky/bottomSticky';
import HeroHomeSix from "@/components/hero/HeroHomeSix";
import Service from "@/components/services/service";
import Achievements from "@/components/achievements/achivement";
import Form from "@/components/form/form";
import Accordian from "@/components/accordian/accordian";


export const metadata = {
  title: "Xyvin Tech",  
};


const data = [
  {
    question: 'What is Next.js?',
    answer: 'Next.js is a React framework that enables server-side rendering and generating static websites for React-based web applications.'
  },
  {
    question: 'How does Next.js differ from React?',
    answer: 'Next.js is a framework built on top of React, adding features like server-side rendering and static site generation.'
  },
  {
    question: 'What are the benefits of using Next.js?',
    answer: 'Some benefits include improved performance, SEO optimization, and easier deployment and scaling of web applications.'
  },
  // Add more questions and answers as needed
];

const index = () => {
  return (
    <Wrapper>      
      <HeaderOne />
      <div id="scrollsmoother-container">

        {/* <HeroHomeOne /> */}
        <HeroHomeSix/>

        <LeftSideBar/>
        <MarqueeAreaHomeOne />
        {/* <AboutHomeOne /> */}
         <Service/>
        {/* <ServiceHomeOne /> */}
        <PortfolioHomeOne />
        <AwardsHomeOne />
        <Testimonial />
        <FunFactHomeOne />
        <VideoHomeOne />
        <BlogHomeOne />
        <SubscribeHomeOne />
        <BrandHomeOne style_2={false}  />
         <Achievements/>
        <Form/>
        <Accordian data={data}/>
        <BottomSticky/>

        <FooterOne />
      </div>
        <BottomSticky/>
    </Wrapper>
  );
};

export default index;
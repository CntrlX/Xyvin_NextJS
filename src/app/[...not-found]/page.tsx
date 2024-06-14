'use client'


import React from 'react'; 
import Wrapper from '@/layouts/Wrapper'; 
import Error from '@/components/error';
import LeftSideBar from '@/components/sticky/leftSticky/leftSticky'

const index = () => {
  return (
    <Wrapper> 
      <Error /> 
      <LeftSideBar />
    </Wrapper>
  );
};

export default index;
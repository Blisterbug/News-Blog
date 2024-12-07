import React from 'react';
import SmallCard from './SmallCard';
import CenterCard from './CenterCard';

const Hero = () => {
  return (
    <div className='max-w-full'>
      <div className='flex justify-between items-stretch gap-6 p-6'>
        
        {/* Left Section - top stories */}
        <div className='grid grid-rows-2 gap-6 p-4'>
          <SmallCard queryParameter="top"/> 
          <SmallCard queryParameter="top"/> 
        </div>

        {/* Center section - trending */}
        <div className='grid grid-cols-1 gap-6 p-4'>
          <CenterCard queryParameter="today"/>
        </div>

        {/* Right section - Popular */}
        <div className='grid grid-rows-2 gap-6 p-4'>
          <SmallCard queryParameter="popular"/> 
          <SmallCard queryParameter="popular"/> 
        </div>
        
      </div>
    </div>
  );
}

export default Hero;

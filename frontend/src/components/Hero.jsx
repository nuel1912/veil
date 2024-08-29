import React from 'react'
import { assets } from '../assets/assets'

export const line = 'w-8 md:w-11 h-[2px] bg-[#2c2c2c]'

const Hero = () => {

  return (
    <div className='flex flex-col sm:flex-row border border-[#1B1A1A]'>
      {/* Hero Left-side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#2c2c2c]'>
          <div className='flex items-center gap-2'>
            <p className={line}></p>
            <p className='font-medium text-sm md:text-base'>
              OUR BEST SELLER
            </p>
          </div>
          <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            Latest Arrivals
          </h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>
              SHOP NOW
            </p>
            <p className={line}></p>
          </div>
        </div>
      </div>

      {/* Hero Rigth-side */}
      <img src={assets.hero_img} alt='Hero-image' className='w-full sm:w-1/2' />
    </div>
  )
}

export default Hero

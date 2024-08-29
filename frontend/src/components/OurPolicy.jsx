import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-[#2c2c2c]'>
      <div>
        <img src={assets.exchange_icon} alt='Exchange-icon' className='w-12 m-auto mb-5' />
        <p className='font-bold'>Easy Exchange Policy</p>
        <p className='text-[#505050]'>We offer stressless exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt='Quality-icon' className='w-12 m-auto mb-5' />
        <p className='font-bold'>10 Days Return Policy</p>
        <p className='text-[#505050]'>We provide a 10-day return policy</p>
      </div>
      <div>
        <img src={assets.support_img} alt='Support-icon' className='w-12 m-auto mb-5' />
        <p className='font-bold'>Best Customer Support</p>
        <p className='text-[#505050]'>24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy

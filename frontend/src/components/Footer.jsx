import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className='my-auto'>
          <img src={assets.logo} alt='Logo' className='mb-4 w-[120px]' />
          <p className='w-full md:2/3 text=[#505050]'>
            Your Fashion, Unveiled
          </p>
        </div>

        <div>
          <p className='text-xl font-semibold mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-[#2c2c2c]'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-semibold mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-[#2c2c2c]'>
            <li>+234 817 938 7719</li>
            <li>contact@veilstyle.com</li>
          </ul>
        </div>
      </div>
      
      <div>
        <hr className='w-full border-none h-[1px] bg-[#717171] mx-auto' />
        <p className='py-5 text-sm text-center'>
          &copy; 2024 Veil. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer

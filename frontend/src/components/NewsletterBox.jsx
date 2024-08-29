import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-semibold text-[#2c2c2c]'>Subscribe Now & Get 15% Off</p>
      <p className='w-2/3 text-[#505050] mt-3 mx-auto'>
        Stay in the loop with Veil. Subscribe to our newsletter and be the first to know about our latest collections, exclusive offers, and style tips. Sign up today and never miss a beat!
      </p>
      <form onClick={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-[#505050] pl-3'>
        <input type='email' placeholder='Please enter your email...' required className='w-full bg-transparent sm:flex-1 outline-none' />
        <button type='submit' className='bg-[#2c2c2c] text-[#faf9f6] text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox

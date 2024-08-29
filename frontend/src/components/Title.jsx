import React from 'react'
import { line } from './Hero'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-[#2c2c2c]'>{text1} <span className='text-[#2c2c2c] font-semibold'>{text2}</span> </p>
      <p className={line}></p>
    </div>
  )
}

export default Title

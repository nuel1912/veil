import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const navItems = [
    {
      name: 'HOME',
      path: '/'
    },
    {
      name: 'COLLECTION',
      path: '/collection'
    },
    {
      name: 'ABOUT',
      path: '/about'
    },
    {
      name: 'CONTACT',
      path: '/contact'
    },
  ]

  const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <img src={assets.logo} className='w-[100px]' alt='Logo' />
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-[#2c2c2c] font-medium'>
        {navItems.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path} 
            className='flex flex-col items-center gap-1'
          >
            <p>{name}</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-[#2c2c2c] hidden' />
          </NavLink>
        ))}
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} alt='Search-icon' className='w-5 cursor-pointer' />
        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#f8e1e1] text-[#6B675D] brounded'>
              <p className='cursor-pointer hover:text-[#1B1A1A]'>My Profile</p>
              <p className='cursor-pointer hover:text-[#1B1A1A]'>Orders</p>
              <p className='cursor-pointer hover:text-[#1B1A1A]'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt='Cart-icon' className='w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#2c2c2c] text-[#faf9f6] aspect-square rounded-full text-[8px]'>
            10
          </p>
        </Link>
        <img src={assets.menu_icon} alt='Menu-icon' className='w-5 cursor-pointer sm:hidden' onClick={() => setVisible(true)} />
      </div>

      {/* Sidebar Menu for small screen... */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#faf9f6] transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-[#2c2c2c]'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img src={assets.dropdown_icon} alt='Dropdown-icon' className='h-4 rotate-180' />
              <p>Back</p>
            </div>
            {
              navItems.map(( {name, path} ) => (
                <NavLink
                  onClick={() => setVisible(false)}
                  key={name}
                  to={path}
                  className='py-2 pl-6 border'
                >
                  {name}
                </NavLink>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Navbar

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { grid } from './LatestCollection';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0,5));
  },[])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1='BEST' text2='SELLER' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-[#faf9f6['>
          Our best sellers are timeless favorites, loved for their elegance and style. Discover the pieces that have captured the hearts of our customers and elevate your wardrobe with these must-have essentials.
        </p>
      </div>

      <div className={grid}>
        {
          bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller;

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

export const grid = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0,10));
  },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1='Latest' text2='Collections' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-[#2c2c2c]'>
          Explore our latest collection—where elegance and modern style converge. Each piece is crafted with luxurious fabrics and attention to detail, perfect for making a statement.
        </p>
      </div>

      {/* Rendering Products */}
      <div className={grid}>
        {
          latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

const { products } = useContext(ShopContext);
 const [ LatestProducts , setLatestProducts ] = useState([]);

 useEffect( () => {
      setLatestProducts(products.slice(0,10));
 },[] )

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
                 < Title text1={'LATEST'} text2={'COLLECTIONS'} />
                 <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ' >
                 Exciting news! Our latest collection has just dropped, featuring fresh styles and unique designs that are perfect for every occasion. From cozy loungewear to chic statement pieces, there’s something for everyone. Discover vibrant colors, sustainable fabrics, and stunning details that will elevate your wardrobe. Don't miss out—shop now and find your new favorites!
                 </p>
      </div>
        { /* Rendering Products */ }
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                 {
                    LatestProducts.map((item , index) => (
                         <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    ))
                 }                               
            </div> 

    </div>
  )
}

export default LatestCollection

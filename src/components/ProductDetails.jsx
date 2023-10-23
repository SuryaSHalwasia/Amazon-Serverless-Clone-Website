import React from 'react'
import ProductBadge from './ProductBadge'
import ProductRatings from './ProductRatings'

const ProductDetails = (product, ratings) => {
  return (
    <div className='mb-1'>
      <div className='text-xl xl:text-2xl font-medium mb-1'>{product.product.title}</div>
        <div className='text-sm xl:text-base mb-1'>by <span className='text-blue-500'>{product.product.brand}</span></div>
        { product.ratings && 
        
        <div className='text-sm xl:text-base mb-1'><ProductRatings avgRating={product.product.avgRating} 
              ratings={product.product.ratings}/></div>
        }
        <div className='text-xs xl:text-sm font-bold mb-1'>{product.product.attribute}</div>
        <div><ProductBadge badge = {product.product.badge} /></div>
    </div>
  )
}

export default ProductDetails
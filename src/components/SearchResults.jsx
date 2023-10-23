import React, { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { callAPI } from '../utils/CallAPI'
import ProductDetails from './ProductDetails'
import { US_CURRENCY } from '../utils/constant'
const SearchResults = () => {
  const [SearchParams] = useSearchParams()
  const [products, setProducts] = useState(null)

  const getSearchResults = () => { 
    const searchTerm = SearchParams.get("searchTerm")
    const category = SearchParams.get("category")
    callAPI(`data/search.json`).then((SearchResults)=>{
      const CategoryResults = SearchResults[category]
      if (searchTerm){
        const results = CategoryResults.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setProducts(results)
      }else{
        setProducts(CategoryResults)
      }

    })
  }
  useEffect(()=>{
    getSearchResults()
  }, [SearchParams])
  return (
    <div className='min-w-[1200px] max-w-[1300px] m-auto pt-4'> {
      products && products.map((product,key)=>{
        return (
          <Link key={key} to={`/products/${product.id}`}>
          <div className='h-[250px] grid grid-cols-12 rounded mt-1 mb-2'>
              <div className='col-span-2 p-4 bg-gray-200'>
                <img className='m-auto' src={product.image_small} alt=''/> 
              </div>
              <div className='col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100'>
                <div className='font-medium text-black p-2 '> <ProductDetails product={product} ratings={true}/></div>
                <div className='text-xl xl:text-2xl pt-1'>{US_CURRENCY.format((product.price))}</div>
                </div>
          </div>
          </Link>
        )
      })}</div>
  )
}

export default SearchResults
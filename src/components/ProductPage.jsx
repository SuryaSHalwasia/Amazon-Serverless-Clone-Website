import React from 'react'
import {useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import {callAPI } from '../utils/CallAPI'
import ProductDetails from './ProductDetails'
import { US_CURRENCY } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
const ProductPage = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState("1")
  const dispatch = useDispatch()
  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults)=>{
      setProduct(productResults[id])
    })
  }

  const addQuantitytoProduct = () => { 
    setProduct(product.quantity = quantity)
    return product
   }
  useEffect(()=>{
    getProduct()
  }, [])

  if(!product?.title)
    return <h1>Loading Product ....</h1>
  return (product &&
    <div className='h-screen bg-amazon-bg'>
      <div className='min-w-[1000px] max-w-[1500px] m-auto p-4'>
        <div className='grid grid-cols-10 gap-2'>
          <div className='col-span-3 p-8 rounded bg-white m-auto'>
            <img src={`${product.image}`} alt='' />
          </div>
          <div className='col-span-5 bg-white p-4'>
            <div className='mb-3  divide-y-2 divide-gray-400'>
              <ProductDetails product={product} ratings={true}/>
            </div>
            <div className='text-base xl:text-lg mt-3'>{product.description}</div>
          </div>
          <div className='col-span-2 p-4 rounded bg-white'>
            <div className='text-xl xl:text-2xl font-semibold text-red-700 text-right'>{US_CURRENCY.format(product.price)}</div>
            <div className='text-base xl:text-lg font-semibold text-gray-500 text-right line-through'>{US_CURRENCY.format(product.oldPrice)}</div>
            <div className='text-sm xl:text-base font-semibold text-blue-500 mt-3'>FREE Returns</div>
            <div className='text-sm xl:text-base font-semibold text-blue-500 mt-1'>FREE Delivery</div>
            <div className='text-base xl:text-lg font-semibold text-green-700 mt-1'>In Stock</div>
            <div className='text-base xl:text-lg mt-1'>Quantity
              <select onChange={(e)=>setQuantity(e.target.value)} className='p-2 bg-white border rounded-md focus:border-indigo-600'><option>1</option>
              <option>2</option>
              <option>3</option></select>
            </div>
            <Link to ={"/checkout"}>
            <button onClick={() => dispatch(addToCart(addQuantitytoProduct()))} className='btn'>Add to Cart</button>
            </Link>
          </div>
        </div>
        </div></div>
  )
}

export default ProductPage
import React from 'react'

const ProductRatings = (props) => {
    const starNumber = props.avgRating
    const ratingNumber = props.ratings
  return (
    <div>
    <div className='flex items-center'>
        <div className='flex -space-x-2'>
        {Array.from({length:starNumber}, (_, i)=>(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" key={i} className="w-6 h-[15px] stroke-[#F1B61F]
            fill-[#F1B61F]">
                
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
       />
          </svg>
          
        ))}

{Array.from({length:5-starNumber}, (_, i)=>(
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" key={i} className="w-6 h-[15px] stroke-[#F1B61F]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          
        ))}
        </div>
        <span className='ml-2 text-blue-500'>{ratingNumber} ratings</span>
    </div>
    </div>
  )
}

export default ProductRatings
import React from 'react'

const HomePageCard = ({title,image,link}) => {
  return (
    <div className='h-[420px] bg-white z-30 m-3'>
        <div className='text-lg xl:tex-xl font-semibold ml-4 mt-4 text-center'>
            {title}</div>
        <div className='m-4'>
            <img className='h-[100%] w-[100%] object-cover' src={image} alt=''/></div>
        <div className='text-xs xl:text-sm text-blue-400 ml-4'>{link}</div>
    </div>
  )
}

export default HomePageCard
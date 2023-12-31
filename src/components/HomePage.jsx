import React from 'react'
import Carousel from './Carousel'
import HomePageCard from './HomePageCard'
import CarouselCategory from './CarouselCategory'
import CarouselProduct from './CarouselProduct'

const HomePage = () => {
  return (
    <div className='bg-amazon-bg'>
        <div className='min-w-[1000px] max-w-[1500px]  m-auto'>
        <Carousel></Carousel>
        <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
          <HomePageCard title={"We have a suprise for you"} image={"../images/home_grid_1.jpg"}
          link={"See terms and conditions"}/>
          <HomePageCard title={"Watch the Rings of Power"} image={"../images/home_grid_2.jpg"}
          link={"Start streaming now"}/>
          <HomePageCard title={"Unlimited streaming"} image={"../images/home_grid_3.jpg"}
          link={"Find out more"}/>
          <HomePageCard title={"More titles to explore"} image={"../images/home_grid_4.jpg"}
          link={"Browse Kindle Unlimited"}/>
          <HomePageCard title={"Shop pet supplies"} image={"../images/home_grid_5.jpg"}
          link={"See more"}/>
          <HomePageCard title={"Spring Sale"} image={"../images/home_grid_6.jpg"}
          link={"See the deals"}/>
          <HomePageCard title={"Echo Buds"} image={"../images/home_grid_7.jpg"}
          link={"See more"}/>
          <HomePageCard title={"Family Plan: 3 months fre"} image={"../images/home_grid_8.jpg"}
          link={"Learn more"}/>
          <div className='m-3 pt-8'><img class="xl:hidden" src={"../images/banner_image_2.jpg"} alt=''/></div>
        </div>
        <CarouselProduct/>
        <CarouselCategory/>
        <div className='h-[200px]' ><img className='h-[100%] m-auto' src ={"../images/banner_image.jpg"} alt='' /> </div>
        </div>
    </div>
  )
}

export default HomePage
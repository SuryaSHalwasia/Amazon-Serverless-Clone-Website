import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import Autoplay from '../../node_modules/swiper/modules/autoplay.mjs'
import { Navigation } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"


const Carousel = () => {
    
  return (
    
    <div className='h-[600px] bg-white'>
        <Swiper 
            modules={[Navigation, Autoplay]}
            loop={true} autoplay={true} spaceBetween={0} infinite={true}
            autoplaySpeed={{delay: 5000}} navigation={true} 
             className='h-[50%]' >
            <SwiperSlide>
                
                <img src="../images/carousel_1.jpg" alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/carousel_2.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide className='bg-black'>
                <video controls muted="muted">
                    <source src={"../images/carousel_vid.mp4"} type='video/mp4'/>
                </video>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/carousel_4.jpg"} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/carousel_5.jpg"} alt=''/>
            </SwiperSlide>
        </Swiper>
        <div className='h-[50%] bg-gradient-to-b from-stone-900'></div>
        </div>
  )
}

export default Carousel
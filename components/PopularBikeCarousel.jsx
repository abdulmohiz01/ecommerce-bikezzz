'use client'
//swiper
import { Swiper, SwiperSlide } from "swiper/react"

//importing required modules
import { Pagination } from 'swiper/modules'

//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//importing components
import Bike from "./Bike"

const PopularBikeCarousel = ({ bikes }) => {
    // console.log(bikes)
    return (
        <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 968: { slidesPerView: 3 }, 1440: { slidesPerView: 4 } }} pagination={{ clickable: true }} modules={[Pagination]} className="popular-bike-slider mb-8" >
            {bikes.map((bike) => {
                //  console.log(bike)
                return <SwiperSlide key={bike._id}>
                    <Bike bike={bike} />
                </SwiperSlide>
            })}
        </Swiper>
    )
}

export default PopularBikeCarousel
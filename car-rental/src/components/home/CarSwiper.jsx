import React, { useState, useEffect } from 'react'
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([ Navigation, Pagination, Scrollbar, Autoplay])

export default function CarSwiper() {
  const [pitutes, setpitutes] = useState([])

  useEffect(() => {
    axios.get(`swiper`).then(
      response => {
        setpitutes(response.data)
      },
      reason => {
        console.log(reason)
      }
    )
  }, [])

  return (
    <div>
      <Swiper
        // install Swiper modules
        loop={true}
        autoplay
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
        style={{ height: '200px',width:"310px" }}
      >
        {
          pitutes.map((p) =>
          (
            <SwiperSlide key={p.id}><img src={p.img} alt={p.carname} style={{ height: "100%", width: '100%' }} /></SwiperSlide>
          )
          )
        }
      </Swiper>
    </div>
  )
}

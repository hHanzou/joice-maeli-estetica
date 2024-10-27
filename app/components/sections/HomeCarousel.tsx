"use client";

// Carousel.tsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const HomeCarousel: React.FC = () => {
  const images = [
    'https://picsum.photos/800/600',
    'https://picsum.photos/800/600',
    'https://picsum.photos/800/600',
    'https://picsum.photos/800/600',
    'https://picsum.photos/800/600',
  ]

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      style={{ maxWidth: '800px', margin: 'auto' }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index + 1}`} style={{ width: '100%', borderRadius: '10px' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeCarousel

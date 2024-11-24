"use client";

// Carousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const HomeCarousel: React.FC = () => {
  const images = [
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
    "https://picsum.photos/800/600",
  ];

  return (
    <div>
      <p className="font-extrabold w-96 font-dancing-script text-6xl pb-4 pt-2">
        Procedimentos
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        width={300}
        className="max-w-screen-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;

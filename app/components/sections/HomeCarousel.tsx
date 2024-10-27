// components/sections/HomeCarousel.js
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide>
        <Image
          src="/images/joicelogo.jpg"
          alt="Slide 1"
          width={500}
          height={500}
          layout="responsive"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/aboutmephoto.jpg"
          alt="Slide 2"
          width={500}
          height={500}
          layout="responsive"
        />
      </SwiperSlide>
    </Swiper>
  );
};

import React from 'react';
import './ServieSlider.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import image1 from '../../../../asset/wedding2.jpg'
import image2 from '../../../../asset/portrait-2.jpg'
import image3 from '../../../../asset/pexels-vinicius-wiesehofer-1130626.jpg'
import image4 from '../../../../asset/pexels-italo-melo-2379004.jpg'
import image5 from '../../../../asset/pexels-flávio-augusto-1832959.jpg'
const ServiceSlider = () => {
    return (

        <Swiper
            effect={"coverflow"}
            // grabCursor={true}
            centeredSlides={true}
            // slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper  py-12"
        >
            <SwiperSlide className='imageSlider '>
                <img src={image1} className='sliderImage' />
            </SwiperSlide>
            <SwiperSlide className='imageSlider'>
                <img src={image2} className='sliderImage' />
            </SwiperSlide>
            <SwiperSlide className='imageSlider'>
                <img src={image3} className='sliderImage' />
            </SwiperSlide>
            <SwiperSlide className='imageSlider'>
                <img src={image4} className='sliderImage' />
            </SwiperSlide>
            <SwiperSlide className='imageSlider'>
                <img src={image5} className='sliderImage' />
            </SwiperSlide>

        </Swiper>

    );
};

export default ServiceSlider;
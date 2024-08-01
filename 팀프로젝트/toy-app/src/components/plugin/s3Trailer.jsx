import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/s3Swiper.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function S3trailer() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="s3Swiper obj"
            >
                <SwiperSlide>
                    <li>
                        <a href="https://www.youtube.com/watch?v=ay2j2svxaqA" target="_blank">
                            <img src={process.env.PUBLIC_URL + "/images/img3/trailer01.jpg"} alt="썸네일" />
                        </a>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li>
                        <a href="https://www.youtube.com/watch?v=p5kOgNXjpJo" target="_blank">
                            <img src={process.env.PUBLIC_URL + "/images/img3/trailer02.jpg"} alt="썸네일" />
                        </a>
                    </li>
                </SwiperSlide>
                <SwiperSlide>
                    <li>
                        <a href="https://www.youtube.com/watch?v=aGYxNuodVOU" target="_blank">
                            <img src={process.env.PUBLIC_URL + "/images/img3/trailer03.jpg"} alt="썸네일" />
                        </a>
                    </li>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

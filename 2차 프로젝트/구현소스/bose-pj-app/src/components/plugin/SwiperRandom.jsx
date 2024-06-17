// 비디오 모듈  스와이퍼 플러그인 컴포넌트

import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// 제이쿼리 불러오기
import $ from "jquery";

// Import Swiper styles 모듈용 기본 css파일로딩
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export function SwiperRandom() {

  return (
    <>
      <Swiper
        // slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Pagination, Navigation,]}
        className="mySwiper"
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{
          200: {
              slidesPerView: 2,
          },
          500: {
              slidesPerView: 3,
          },
          1000: {
              slidesPerView: 4,
          },
          1200: {
              slidesPerView: 5,
          },
        }}
      >
          <SwiperSlide key={i}>
            <section className="sw-inbox">
            </section>
          </SwiperSlide>
      </Swiper>
    </>
  );
} /////////// SwiperRandom 컴포넌트 ///////////

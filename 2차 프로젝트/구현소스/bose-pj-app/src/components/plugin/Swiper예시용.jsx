// 랜덤 모듈 스와이퍼 플러그인 컴포넌트
import React, { useState, useRef, useEffect, useLayoutEffect,useCallback  } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// 제이쿼리 불러오기
import $ from "jquery";
// Import Swiper styles 모듈용 기본 css파일로딩
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 네비게이션 - 양쪽이동버튼)
import { Navigation ,Pagination} from "swiper/modules";

export function SwiperRd({ catName }) {
  return (
    <>
      <Swiper
        // slidesPerView={4}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        // loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation,Pagination]}
        className="mySwiper2"
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{
          200: {
              slidesPerView: 1,
          },
          500: {
              slidesPerView: 2,
          },
          1000: {
              slidesPerView: 3,
          },
          1200: {
              slidesPerView: 4,
          },
        }}
      >
        {/* ///////////////////////////////////// */}
          {products.flatMap((v, i) => {
                <SwiperSlide >
                </SwiperSlide>
          })}
        {/* ///////////////////////////////////// */}
      </Swiper>
    </>

  );
} /////////// SwiperVid 컴포넌트 ///////////

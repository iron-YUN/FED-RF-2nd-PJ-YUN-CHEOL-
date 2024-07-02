// 랜덤 모듈 스와이퍼 플러그인 컴포넌트
import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";

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
import { Navigation, Pagination } from "swiper/modules";
import { products } from "../data/items_main_data";
import { products2 } from "../data/items_main_data";



export function SwiperDtail({ src, type, idx,sel,pname }) {
  console.log("나는 스와이퍼?",src, type, idx,sel,pname );
  // console.log("뭥미",products2[type][idx].cimg[sel]);
  const selc = products2[type][idx].cimg[sel];
  console.log("뭥미",selc);

  const slides = Array.from({ length: selc }, (_, i) => (
    <SwiperSlide key={i}>
      <div className="dt-img">
      <img
        src={`${process.env.PUBLIC_URL}/${src}/${idx}/${sel}/${i}.webp`}
        alt={`${pname}`}
      />
      </div>
    </SwiperSlide>
  ));

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
        modules={[Navigation, Pagination]}
        className="mySwiper3"
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
        }}
      >
        {/* ///////////////////////////////////// */}
    
        {slides}
  
        {/* ///////////////////////////////////// */}
      </Swiper>
    </>
  );
} /////////// SwiperDtail 컴포넌트 ///////////

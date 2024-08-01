import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { s2tailData } from "../data/sub4/sub2_tail_data";

const vData = s2tailData;
function S2tail() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      navigation={true}
      modules={[ Navigation]}
      className="sub2-tail"
    >
      {vData.map((v, i) => (
        <SwiperSlide key={i}>
          <div className="trailer">
            <video src={process.env.PUBLIC_URL + v.vsrc} controls poster={process.env.PUBLIC_URL + v.isrc}></video>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default S2tail;

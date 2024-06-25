import React from "react";
import { snsData } from "../data/sns_data";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./css/swiper_sns.scss";

function SwiperSns() {
  const videoRefs = useRef([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && !entry.target.paused) {
          entry.target.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSlideChange = () => {
    // 현재 재생 중인 동영상을 멈추기
    if (activeVideoIndex !== null && videoRefs.current[activeVideoIndex]) {
      videoRefs.current[activeVideoIndex].pause();
      setActiveVideoIndex(null);
    }
  };
  //////////////// 코드 무시 구역 ////////////////////////////
  useEffect(() => {
    const resizeObserverErrorHandler = () => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          console.log("ResizeObserver loop error ignored");
        }, 0);
      });
    };
    window.addEventListener("error", resizeObserverErrorHandler);
    return () => {
      window.removeEventListener("error", resizeObserverErrorHandler);
    };
  }, []); //////////////// 코드 무시 구역 ////////////////////////////

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

  ///////////// 리턴 ////////
  return (
    <div className="sns-box">
      <div className="sns-tit">
        <h1>Sound is Power</h1>
        <h3>
          Looks good. Sounds amazing. Your life, your soundtrack, your Bose.
        </h3>
      </div>
      <section className="sns-gallery-box">
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          // loop={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper-sns"
        //   breakpoints={{
        //     1200: { slidesPerView: 1 },
        //   }}
          onSlideChange={handleSlideChange}
        >
          {snsData.map((item, index) => (
            <SwiperSlide key={index}>
              <ul className="sns-gallery">
                {item.map((media, idx) => (
                    // ul>li 중 첫번째 li 만 그리드클래스 따로 적용하기
                  <li
                    key={idx}
                    className={idx === 0 ? "grid-item-2x2" : "grid-item-1x1"}
                  >
                    {/* 첫번째 li 비디오 출력 / 나머지는 이미지 출력 */}
                    {idx === 0 ? (
                      <video
                        className="sns-video"
                        // 동영상 제어하기 : 오류 조정중
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={process.env.PUBLIC_URL+media.src}
                        controls
                      ></video>
                    ) : (
                        <div className="sns-txt-box">
                            <p className="sns-txt">
                                <span>
                                {media.txt}
                                </span>
                                </p>
                          <img className="sns-img" src={process.env.PUBLIC_URL+media.src} alt="gallery" />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
    </div>
  );
}

export default SwiperSns;

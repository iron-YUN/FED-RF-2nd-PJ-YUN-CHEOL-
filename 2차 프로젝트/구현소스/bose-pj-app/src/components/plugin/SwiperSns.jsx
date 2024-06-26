import React from "react";
import { useState, useRef, useEffect } from "react";
import $ from "jquery";
// 데이터
import { snsData } from "../data/sns_data";
// 스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SNS css
import "./css/swiper_sns.scss";

function SwiperSns() {
  // 아몰랑 이게뭐람
  const videoRefs = useRef([]);
  // const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const swObj = useRef(null);

  useEffect(() => {
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.5,
    // };//// options /////
    // const handleIntersection = (entries) => {
    //   entries.forEach((entry) => {
    //     if (!entry.isIntersecting && !entry.target.paused) {
    //       entry.target.pause();
    //     }//// if ////
    //   });//// forEach ////
    // };/////////// handleIntersection /////////////
    // const observer = new IntersectionObserver(handleIntersection, options);
    // console.log("요기");
    // videoRefs.current.forEach((video) => {
    //   if (video) observer.observe(video);
    // });///// forEach ///////
    // return () => {
    //   observer.disconnect();
    // };
  }, []); //////////////// useEffect //////////////////

  // const handleSlideChange = () => {
  //   console.log(activeVideoIndex);
  //   // 현재 재생 중인 동영상을 멈추기
  //   if (activeVideoIndex !== null && videoRefs.current[activeVideoIndex]) {
  //     videoRefs.current[activeVideoIndex].pause();
  //     setActiveVideoIndex(null);
  //   }//// if /////
  // };/////////////////// handleSlideChange ////////////////////
  //////////////// 코드 무시 구역 ////////////////////////////
  useEffect(() => {
    // const resizeObserverErrorHandler = () => {
    //   requestAnimationFrame(() => {
    //     setTimeout(() => {
    //       console.log("ResizeObserver loop error ignored");
    //     }, 0);
    //   });
    // };
    // window.addEventListener("error", resizeObserverErrorHandler);
    // return () => {
    //   window.removeEventListener("error", resizeObserverErrorHandler);
    // };

    // 윈도우 원본 이벤트 중 error 이벤트가 있음!!!
    window.addEventListener(
      "error",
      (e) => {
        // 여기서 메시지 찍으면 null나옴
        // console.log("윈도우만의 에러발생!", e.mesaage);
        // if (e.mesaage === "ResizeObserver loop completed with undelivered notifications.") {
        // 그래서 위의 if문에서 메시지 걸러주는게 의미 없음!

        // 아래코드는 모두 메시지 꺼버리는 코드임!
        const aDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const a = document.getElementById("webpack-dev-server-client-overlay");
        if (aDiv) aDiv.setAttribute("style", "display: none");
        if (a) a.setAttribute("style", "display: none");
      }
      // } // 메시지 걸러내는 if문 주석처리함
    );

    let mytg = document.querySelector(".mySwiper-sns");
    let winH = window.innerHeight / 2;
    let vidSts = true;

    const scSwp = (e) => {
      // 웹표준 에러 음소거 준비
      $(document).ready(function() {
        // 첫 번째 슬라이드의 첫 번째 비디오 요소를 선택하여 muted 설정
        $(".mySwiper-sns li:first-child video").prop("muted", true);
        
        // 설정
      let pos = mytg.getBoundingClientRect().top;
      // console.log(pos);
      if (pos < winH && vidSts) {
        swObj.current.querySelector("li:first-child video").play();
        vidSts = false;
        // console.log("한번만 실행", vidSts);
      } else if (pos > winH && !vidSts) {
        swObj.current.querySelector("li:first-child video").pause();
        vidSts = true;
        // console.log("한번만 실행", vidSts);
      }
    });
    };






    window.addEventListener("scroll", scSwp);

    return () => {
      window.removeEventListener("scroll", scSwp);
    };
  }, []); //////////////// 코드 무시 구역 ////////////////////////////
  ///////////////////// 제가 안했어요 gpt 가 했어요 이건 /////////////
  ///////////////////////////// 살려줘요 ////////////////////////////

  ///////////// 리턴 ////////
  return (
    <div className="sns-box" style={{ minWidth: "400px" }}>
      <div className="sns-tit">
        <h1>Sound is Power</h1>
        <h3>
          Looks good. Sounds amazing. Your life, your soundtrack, your Bose.
        </h3>
      </div>
      <section className="sns-gallery-box">
        <Swiper
          ref={swObj}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // loop={true}

          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper-sns"
          //   breakpoints={{
          //     1200: { slidesPerView: 1 },
          //   }}
          // onSlideChange={handleSlideChange}
          onSlideChange={(swp) => {
            // console.log(swp.previousIndex);
            // let swipeDirection = swp.previousIndex;
            // let num = swp.realIndex;
            // console.log(num);
            // if(swp.swipeDirection === "next") num--;
            // else if(swp.swipeDirection === "prev") num++;
            // console.log(swp.swipeDirection,num);

            // if(swp.realIndex !== num){
            let tg = swp.slides[swp.previousIndex];
            tg = tg.querySelector("video");
            // console.log(tg);
            tg.pause();

            let tg2 = swp.slides[swp.realIndex];
            tg2 = tg2.querySelector("video");
            tg2.play();
            // }
          }}
        >
          {/* sns 자료 뿌려보자고~~~ */}
          {snsData.map((item, index) => (
            <SwiperSlide key={index}>
              <ul className="sns-gallery">
                {item.map((media, idx) => (
                  // ul>li 중 첫번째 li 만 그리드클래스 따로 적용하기 빠샤~
                  <li
                    key={idx}
                    className={idx === 0 ? "grid-item-2x2" : "grid-item-1x1"}
                  >
                    {/* 첫번째 li 에 비디오 출력 /
                     나머지는 이미지 출력 빠빠샤~! */}
                    {idx === 0 ? (
                      <video
                        className="sns-video"
                        // 동영상 제어하기 : 오류 조정중
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={process.env.PUBLIC_URL + media.src}
                        controls
                      ></video>
                    ) : (
                      <div className="sns-txt-box">
                        <p className="sns-txt">
                          <span>{media.txt}</span>
                        </p>
                        <img
                          className="sns-img"
                          src={process.env.PUBLIC_URL + media.src}
                          alt="gallery"
                        />
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

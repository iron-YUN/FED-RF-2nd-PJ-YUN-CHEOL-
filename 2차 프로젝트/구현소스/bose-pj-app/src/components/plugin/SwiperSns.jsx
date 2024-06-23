import React from "react";
import { snsData } from "../data/sns_data";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import "./css/swiper_sns.scss";

function SwiperSns() {
    // 상태값 설정
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef(null);
    // 데이터 확인
    const sD = snsData;
    console.log(sD);

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: "0px",
            // IntersectionObserver가 작동할 기준 
            // 화면 비율 (0.5는 절반 이상 보이면 작동)
          threshold: 0.5, 
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              entry.target.play(); // 화면에 보이면 동영상 재생
            } else {
              setIsVisible(false);
              entry.target.pause(); // 화면에서 벗어나면 동영상 일시정지
            }
          });
        }, options);
    
        // 각 동영상 요소에 Observer 적용
        document.querySelectorAll(".video-item").forEach((video) => {
          observer.observe(video);
        });
    
        return () => {
          observer.disconnect();
        };
      }, []);
 
    return (
        <div className="sns-box">
          <h1>Sound is Power</h1>
          <h3>Looks good. Sounds amazing. Your life, your soundtrack, your Bose.</h3>
          <section className="sns-gallery">
            {/* ul map으로 여러 개 만들기 */}
            {sD.map((item, index) => (
              <ul key={index}>
                {item.map((media, idx) => (
                  <li key={idx} className={idx === 0 && index === 0 ? "grid-item-2x2" : "grid-item-1x1"}>
                    {/* 첫 번째 li에는 비디오 태그를 넣고 나머지는 이미지 태그를 넣는다 */}
                    {idx === 0 ? (
                      <video className="sns-video" ref={videoRef} src={media.src} controls autoPlay muted>
                      </video>
                    ) : (
                      <img className="sns-img" src={media.src} alt="gallery" />
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </section>
        </div>
      );
}///////////////////////////////////////

export default SwiperSns;

/* 
  return (
        <div className="sns-box">
          <h1>Sound is Power</h1>
          <h3>Looks good. Sounds amazing. Your life, your soundtrack, your Bose.</h3>
          <section className="sns-gallery">
           {///////}
            {sD.map((v, i) => (
                <ul key={i}>
                    {
                      v.map((p, j) =>
                    <li key={j}>
                   
                    </li>)  
                    }
    
                </ul>
            ))}
              </section>
            </div>
          );
*/
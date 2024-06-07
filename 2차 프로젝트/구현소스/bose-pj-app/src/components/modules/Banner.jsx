// 배너 컴포넌트
import React from "react";
// 배너 데이터
import { banData } from "../data/banner";

// 배너 css
import "../../css/banner.scss";

// 배너 슬라이드 기능함수
import SlideFn from "../func/go_slide";

function Banner({ catName }) {
  // catName 배너 데이터 카테고리이름

  // 슬라이드기능 생성자함수 인스턴스 생성하기
  const sldFn = new SlideFn();

  // 선택데ㅣ터
  const selData = banData[catName];

  // 코드리턴
  return (
    <div className="banner">
      {/* 이동슬라이드 */}
      <ul className="slider">
        {selData.map((v, i) => (
          <li key={i}>
            <img src={v.src} alt={v.tit1 == "" ? "banner image" : v.tit1} />
            <section className="bantit">
              <h2>{v.tit1}</h2>
              <p>{v.tit2}</p>
              {v.btn != "" && <button>{v.btn}</button>}
            </section>
          </li>
        ))}
      </ul>

      {
        // 배너데이커가 1개면 양쪽이동버튼 출력안함
        // 배열.length 로 배열개수가 1이상일떼만 출력
        selData.length > 1 && (
          <>
            {/* 양쪽이동버튼 */}
            <button className="abtn lb" onClick={sldFn.goSlide}>＜</button>
            <button className="abtn rb" onClick={sldFn.goSlide}>＞</button>
            {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기 
            map 메서드의 반복기능만 이용하여 태그생성
            순번은 첫번째 블릿 li만 클래스 on 넣기*/}
            <ol className="indic">
            {selData.map((v,i)=>
            <li key={i} className={i==0?"on":""}></li>
            )}
            </ol>
          </>
        )
      }
    </div>
  );
}

export default Banner;

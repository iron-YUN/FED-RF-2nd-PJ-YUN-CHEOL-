// 배너 컴포넌트
import React from "react";
// 배너 데이터
import { banData } from "../data/banner";

// 배너 css
// import "../../css/banner.scss";

function Banner({ catName }) {
  // catName 배너 데이터 카테고리이름
  // 선택데이터
  const selData = banData[catName];
// console.log(selData);
  // 코드리턴
  return (
    <div className="banner">
      <ul className="slider">
        {selData.map((v, i) => (
          <li key={i}>
            <img src={v.src} alt={v.tit1 == "" ? "banner image" : v.tit1} />
            <section className="bantit">
              <h2>{v.tit1}</h2>
              <p>{v.tit2}</p>
              {/* {v.btn != "" && <button>{v.btn}</button>} */}
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Banner;

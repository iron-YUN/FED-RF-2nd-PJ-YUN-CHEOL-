import React, { useEffect, useRef } from "react";

// 슬라이드 불러오기
import Sub1SlideFn from "../func/sub1/sub1_slide";

// CSS 불러오기
import "../../css/sub1.scss";

import $ from "jquery";

function S1ChDegin(props) {
  const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

  useEffect(() => {
    new Sub1SlideFn();
  }, []);

  ///// 코드리턴구역 //////////////
  return (
    <>
      <section id="S1container">
        <h2>Character Concept Design</h2>
        <div className="S1de-chpart">
          {/* 슬라이드 */}
          <ul className="S1-slide"></ul>
          {/* 이동버튼 */}
          <a href="##" className="s1abtn ab1">
            <img
              src={process.env.PUBLIC_URL + "/images/img1/left_btn.png"}
              alt="왼쪽이동버튼"
            />
          </a>
          <a href="##" className="s1abtn ab2">
            <img
              src={process.env.PUBLIC_URL + "/images/img1/right_btn.png"}
              alt="오른쪽이동버튼"
            />
          </a>
          {/* 블릿버튼 */}
          <ol className="S1indic"></ol>
        </div>
      </section>
    </>
  );
}

export default S1ChDegin;

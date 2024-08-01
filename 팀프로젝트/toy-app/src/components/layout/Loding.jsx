import React, { useEffect } from "react";
import "../../css/loding.scss";
import mFn from "../func/my_function";
function Loding() {

  useEffect(() => {
    // 퍼센트 증가 숫자변수
let percent = 0;
let percent2 = -15;
// 숫자출력박스 : .pNum
const pNum = mFn.qs(".pNum");
// 퍼센트바 : .bar
const bar = mFn.qs(".bar");
const buddy = mFn.qs(".fly img");
increasePercent();


// 재귀호출함수 만들기
function increasePercent() {
  // 1. pNum에 숫자출력
  pNum.innerText = ++percent+ "%";
  // 2. 퍼센트바 width값 동시에 증가하기
  bar.style.width = percent + "%";
  buddy.style.left = ++percent2 + "%";
  // 3.증가숫자가 100보다 작을때까지 계속 재귀호출
  if (percent < 100) {
    setTimeout(increasePercent, 30);
  } else {
    // 5.바색 변경하기
    bar.style.backgroundColor = "red";
    // 6.슬라이드 이동함수 호출하기
    setTimeout(() => {
      // 페이지 이동 코드 작성
      document.querySelector(".loging-pg").classList.add("off");
    }, 300);
  }///// else /////
} ////////////// increasePercent ///////////////////
  },[]);
  return (
    <div className="loging-pg">
      <div className="fly">
        <img src={process.env.PUBLIC_URL+"/images/fly.png"} alt="" />
        <div className="pbar">
          <span className="pNum">0%</span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
}

export default Loding;

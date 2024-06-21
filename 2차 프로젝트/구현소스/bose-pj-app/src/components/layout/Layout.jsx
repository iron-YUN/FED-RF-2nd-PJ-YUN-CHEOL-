// 전체 레이아웃 컴포넌트 ///

import FooterArea from "./Footer";
import MainArea from "./MainArea";
import TopArea from "./TopArea";


import { bCon } from "../modules/bCon";

import { scrolled, setPos } from "../modules/smoothScroll24";
import { useEffect } from "react";
// 내함수
import mFn from "../func/my_function";
import "./css/loding.scss";
export default function Layout() {
  useEffect(() => {
    document.addEventListener("wheel", scrolled, { passive: false });

    // 0. 새로고치면 스크롤바 위치캐싱후 맨위로 이동
setTimeout(() => {
  // 윈도우 스크롤 맨위로!
  window.scrollTo(0, 0);
  // 부드러운 스크롤 위치값 반영!
  setPos(0);
  // 안하면 원래 위치로 스크롤시 튐!
}, 400);
// 0. 스크롤바 트랙을 잡고 위치이동시 위치값 반영
mFn.addEvt(window, "mouseup", () => setPos(window.scrollY));
//////// mouseup /////////////

// 0. 키보드 방향키 이동시 위치값 반영
mFn.addEvt(window, "keyup", () => setPos(window.scrollY));
//////// mouseup /////////////
  }, []);

  useEffect(() => {
    // console.log("요기요~!!!");
  });

  return (
    <bCon.Provider value={{ setPos }}>
      {/* <div className="loding-cl">
        <div className="loding"></div>
      </div> */}
      {/* 1.상단영역 */}
      <TopArea />
      {/* 2.메인영역 */}
      <MainArea />
      {/* 3.하단영역 */}
      <FooterArea />
    </bCon.Provider>
  );
} ////////////// Layout /////////////

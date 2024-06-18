// 전체 레이아웃 컴포넌트 ///

import FooterArea from "./Footer";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

import "./loding.scss";
import { scrolled, setPos } from "../modules/smoothScroll24";
export default function Layout() {
  // document.addEventListener("wheel", scrolled, { passive: false });
  return (
    <>
      {/* <div className="alpha" style={{
        // backgroundColor:"#000"
      }}>   </div> */}
        {/* 1.상단영역 */}
        <TopArea />
        {/* 2.메인영역 */}
        <MainArea />
        {/* 3.하단영역 */}
        <FooterArea />
       
    </>
  );
} ////////////// Layout /////////////

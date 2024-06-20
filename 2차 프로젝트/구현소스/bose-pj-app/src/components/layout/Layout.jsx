// 전체 레이아웃 컴포넌트 ///

import FooterArea from "./Footer";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

import { bCon } from "../modules/bCon";

import { scrolled, setPos } from "../modules/smoothScroll24";
import { useEffect } from "react";
export default function Layout() {

  useEffect(()=>{
    
    document.addEventListener("wheel", scrolled, { passive: false });
  },[]);
  
  useEffect(()=>{
    console.log("요기요~!!!");
  });


  return (
    <bCon.Provider value={{setPos}}>
        {/* 1.상단영역 */}
        <TopArea />
        {/* 2.메인영역 */}
        <MainArea />
        {/* 3.하단영역 */}
        <FooterArea />
    </bCon.Provider>
  );
} ////////////// Layout /////////////

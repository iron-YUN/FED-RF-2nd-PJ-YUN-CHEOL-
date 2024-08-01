import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Sub1 from "./components/pages/Sub1";
import Sub2 from "./components/pages/Sub2";
import Sub3 from "./components/pages/Sub3";
import Sub4 from "./components/pages/Sub4";
import Member from './components/pages/Member';
import Login from './components/pages/Login';

export default function MainComponent(){
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    < ScrollGoTop/>
    <Routes>
      <Route path="/" element={<Layout/>}>

      <Route index element={<Main/>}/>
      <Route path="sub1" element={<Sub1/>}/>
      <Route path="sub2" element={<Sub2/>}/>
      <Route path="sub3" element={<Sub3/>}/>
      <Route path="sub4" element={<Sub4/>}/>
      <Route path="member" element={<Member />}/>
      <Route path="login" element={<Login />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

const ScrollGoTop = ()=>{

  // 라우터 경로 변경시 path값 읽어오기
  // pathname 객체 속성에 담긴다.

  
  const {pathname} = useLocation();
  
  // 화면랜더링 구역에 스크롤 상단이동 코드넣기
  useEffect(()=>{
      // 스크롤 최상단 이동
      window.scrollTo(0,0);
      // 변경된 라우터 경로값 확인
      console.log("라우터 경로",pathname);

  },[pathname]);
  // 의존성을 라우터 경로 변수로 설정한다.

  // 컴포넌트 리턴이 필요하나 
  // 소스 리턴이 아니므로 null을 쓴다.
  return null;
}; /////////// ScrollTop컴포넌트

// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<MainComponent />);

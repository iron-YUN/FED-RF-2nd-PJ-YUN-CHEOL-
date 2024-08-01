import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";

import "../src/css/index.scss";
// 상세페이지
import Shop from "./components/pages/Shop";
import Headphones from "./components/pages/Headphones";
import Earbuds from "./components/pages/Earbuds";
import Speakers from "./components/pages/Speakers";
import Hometheater from "./components/pages/Hometheater";
import Pasystems from "./components/pages/Pasystems";
// 기타페이지
import Explore from "./components/pages/Explore";
import Support from "./components/pages/Support";
import SearchPage from "./components/pages/SearchPage";
import ShopDetail from "./components/pages/ShopDetail";
import Member from "./components/pages/Member";
import Login from "./components/pages/Login";

import { scrolled, setPos } from "./components/modules/smoothScroll24";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Wish from "./components/pages/Wish";
import Mypage from "./components/pages/Mypage";

export default function MainComponent(){


  return (
    // 라우터 루트로 라우터 구성시작
     // basename 속성은 package.json 의 "homepage"속성값을
    //  읽어옴 (읽는방법 : process.env.PUBLIC_URL )
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Routes>
        {/* 중요! 레이아웃 컴포넌트를 루트로 설정!
        루트 Route 는 홀로닫지말고 반드시 다른 하위 라우트를 감싸도록한다 */}
        <Route path="/" element={<Layout/>}>
        {/* 하위 라우트 셋팅
          -> path 설정대신 index키워드를 쓰면 첫페이지로 구성됨
          -> MainArea 컴포넌트 <Outlet/> 에 출력된다 */}
          <Route index element={<Main/>} />
          {/* SHOP 전체 제품 페이지 */}
          <Route path="Shop" element={<Shop/>} />
          {/* 하위 제품별 페이지 */}
          <Route path="headphones" element={<Headphones/>} />
          <Route path="earbuds" element={<Earbuds/>} />
          <Route path="speakers" element={<Speakers/>} />
          <Route path="hometheater" element={<Hometheater/>} />
          <Route path="pasystems" element={<Pasystems/>} />
          {/* 기타페이지 */}
          <Route path="Explore" element={<Explore/>} />
          <Route path="Support" element={<Support/>} />
          <Route path="detail" element={<ShopDetail />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="member" element={<Member />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wish" element={<Wish />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="mypage" element={<Mypage />} />
        </Route>
     </Routes>
    </BrowserRouter>
  );
}

// 컴포넌트 출력
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
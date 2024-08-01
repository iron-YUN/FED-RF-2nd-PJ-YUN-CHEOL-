// 전체 레이아웃 컴포넌트 ///

import FooterArea from "./Footer";
import MainArea from "./MainArea";
import { TopArea } from "./TopArea";

import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bCon } from "../modules/bCon";

import { scrolled, setPos } from "../modules/smoothScroll24";

// 내함수
import mFn from "../func/my_function";
import "./css/loding.scss";
export default function Layout() {
  // [ 상태관리 변수 ] //////////////
  // 1. 로그인 상태관리변수
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));
  // -> 초기값으로 세션스토리지 "minfo"를 할당함

  // 2. 로그인 환영 메시지 상태변수
  const [loginMsg, setLoginMsg] = useState(null);
  // console.log(loginMsg);

  // [ 공통 함수 ] ///
  // 1. 라우팅 이동함수
  const goPage = useNavigate();

  // 2. 로그인 환영메시지 생성함수
  const makeMsg = (name) => {
    // 유저아이콘
    let usrIcon = ["❤", "🧡", "💛", "💚", "💙", "💜", "🤎", "🤍"];
    // 랜덤수 : 0~4사이의 수
    let rdm = Math.floor(Math.random() * 8);
    // 로그인 메시지 상태변수 업데이트
    // setLoginMsg(`Welcome  ${usrIcon[rdm]} ${name} `);
    setLoginMsg(`MyPage ${name} `);
  }; /////// makeMsg 함수 /////////

  // 3. 로그아웃 함수 /////////
  const logoutFn = () => {
    // 1. 로그인 상태값 null
    setLoginSts(null);
    // 2. 세션스 지우기 : minfo
    sessionStorage.removeItem("minfo");
    // 3. 로그인 메시지 초기화
    setLoginMsg(null);
    // 4. 메인 페이지로 돌아가기
    goPage("/");
  }; //////// logoutFn 함수 /////////

  // 화면 랜더링 구역 ////////
  useEffect(() => {
    // -> 로그인 상태 체크 //////
    // 만약 세션스(minfo)의 값이 null이 아니면
    // 로그인 상태변수를 업데이트 한다!
    // -> null이 아니면 조건문이 true처리됨!
    if (sessionStorage.getItem("minfo")) {
      // 세션스 변수할당
      let ss = sessionStorage.getItem("minfo");
      // 로그인 상태값
      setLoginSts(ss);
      // 로그인 메시지 업데이트 :
      // -> 세션스의 unm(이름값)을 보내준다!
      makeMsg(JSON.parse(ss).unm);
    } ///// if ///////
  }, []);

  ////////////////////////////////////////////////////////////////////

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

  // 장바구니//////////////////////////////////
  // 로컬스 카트 존재여부변수
  let cartTemp = false;
  // [ 로컬스 카트 데이터 상태변수 ] ///
  const [localsCart, setLocalsCart] = useState(
    localStorage.getItem("cart-data")
  );
  // 로컬스 카트 데이터 존재여부에 따라 상태값 변경
  if (localsCart) {
    // 데이터가 있으면 cartTemp값 true로 변경
    // 데이터 개수가 0이 아니어야함!
    let cartCnt = JSON.parse(localsCart).length;
    console.log("카트 데이터수:", cartCnt);
    if (cartCnt > 0) cartTemp = true;
  } //////////// 카트존재여부 if ////////

  // 2. 카트리스트 사용여부 : true 일때 사용
  const [cartSts, setCartSts] = useState(cartTemp);

  // 위시리스트//////////////////////////////////
  // 로컬스 카트 존재여부변수
  let wishTemp = false;
  // [ 로컬스 카트 데이터 상태변수 ] ///
  const [localsWish, setLocalsWish] = useState(
    localStorage.getItem("wish-data")
  );
  // 로컬스 카트 데이터 존재여부에 따라 상태값 변경
  if (localsWish) {
    // 데이터가 있으면 cartTemp값 true로 변경
    // 데이터 개수가 0이 아니어야함!
    let wishCnt = JSON.parse(localsWish).length;
    console.log("위시 데이터수:", wishCnt);
    if (wishCnt > 0) wishTemp = true;
  } //////////// 카트존재여부 if ////////

  // 2. 카트리스트 사용여부 : true 일때 사용
  const [wishSts, setWishSts] = useState(wishTemp);

  // 상품 선택 색깔정보 전역 상태변수
  const [selColor, setSelColor] = useState(null);

  /////////////////////////////////////////
  useEffect(() => {
    const initializeData = () => {
      if (!localStorage.getItem("cart-data")) {
        localStorage.setItem("cart-data", JSON.stringify([]));
        setLocalsCart(localStorage.getItem("cart-data"))
        if (!localStorage.getItem("wish-data")) {
          localStorage.setItem("wish-data", JSON.stringify([]));
        }
      }
    };
    initializeData();
  }, []);

  return (
    <bCon.Provider
      value={{
        setPos,
        loginSts,
        setLoginSts,
        loginMsg,
        setLoginMsg,
        goPage,
        makeMsg,
        logoutFn,
        /////////////
        setCartSts,
        setLocalsCart,
        localsCart,
        ///////////
        setWishSts,
        setLocalsWish,
        localsWish,
        selColor,
        setSelColor,
      }}
    >
      {/* <div className="loding-cl">
        <div className="loding"></div>
      </div> */}
      {/* 1.상단영역 */}
      <TopArea loginMsg={loginMsg} loginSts={loginSts} logoutFn={logoutFn} />
      {/* 2.메인영역 */}
      <MainArea loginSts={loginSts} />
      {/* 3.하단영역 */}
      <FooterArea />
    </bCon.Provider>
  );
} ////////////// Layout /////////////

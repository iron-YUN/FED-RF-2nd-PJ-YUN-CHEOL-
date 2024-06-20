// 상단영역 컴포넌트 ///
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import React, { useState, useEffect, useNavigate } from "react";

import { Link } from "react-router-dom";
import mFn from "../func/my_function";
import { isrc, menuSrc } from "../data/img_src";
import $ from "jquery";
// GNB 데이터 불러오기
import { menu } from "../data/gnb";
// 아이콘 svg 불러오기
import {
  iconMenu, // -> 이건 map 으로 바꾸면 사용
  CloseMenuIcon,
  HamburgerMenuIcon,
  LoginIcon,
  WishlistHeartIcon,
  CartIcon,
  SearchIcon,
} from "../data/icons";

// top css불러오기
import "../../css/top_area.scss";
// 부드러운 스크롤
import { scrolled, setPos } from "../modules/smoothScroll24";
// 로고 불러오기
import Logo from "../modules/Logo";

export default function TopArea() {
  // 햄버거 버튼을 X버튼으로 바꾸기위한 설정
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  
  //  메뉴박스 오른쪽칸에 들어갈 map 이미지들 변수 ////////////
  const menuSrcV = Object.values(menuSrc);
  const menuSrcK = Object.keys(menuSrc);
  // svg 메뉴 아이콘 크기 변경하기 ////////////////////
  useEffect(() => {
    const svgIcons = document.querySelectorAll(".top-area svg");
    svgIcons.forEach((v) => {
      v.setAttribute("width", "18");
      v.setAttribute("height", "18");
    }); ////////////아이콘 크기변경 함수///////////////////

    // 상단 메뉴바 아이콘버튼 변수
    const icon1 = mFn.qsa(".icon-menu li")[0]; // 햄버거버튼
    const icon5 = mFn.qsa(".icon-menu li")[4]; // 돋보기버튼
    const gnb = mFn.qs(".gnb");
    const search = mFn.qs(".search");
    const searchInput = mFn.qs(".search input");

    // li 요소와 img 요소를 배열로 재수집
    const menuLiArray = Array.from($(".menu-box li a"));
    const rightImg = $(".right img");

    // 광클금지 설정 - 잘안됨 //////////////////////
    // let prot = false;
    // if (prot) return; // 돌아가!(함수나감!)
    // prot = true; // 잠금! (뒤의호출막기)
    // setTimeout(() => {
    //   prot = false; // 0.6초후 해제!
    // }, 6000); //////////////////////////////

    // 메뉴창 닫기 위한 설정 /////////////////////////////
    const escClose = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        closeMenu();
      } ///////// if //////
    }; /////////escClose///////////////
    window.addEventListener("keydown", escClose);

    // 메뉴버튼에 메뉴페이지 기능추가 + 최상단으로 이동 //////////////
    menuLiArray.forEach((v) => {
      mFn.addEvt(v, "click", topMenuOpen);
    });
    // 햄버거 버튼에 메뉴페이지 기능추가
    mFn.addEvt(icon1, "click", menuOpen);

    function topMenuOpen() {
      // 메뉴 클릭시에만 상단스크롤 이동하기위해
      // 함수안에 함수를 호출
      menuOpen();
      window.scrollTo(0, 0);
    } /////// topMenuOpen ///////
    // 메뉴창 나오기 이벤트
    function menuOpen() {
      gnb.classList.add("active");
      search.classList.add("active");
      searchInput.classList.add("active");
      mFn.qs("body").classList.add("hidden");
      if (isMenuOpen) {
        closeMenu();
      }
    } ////////////////menuOpen/////////////////////

    // 메뉴 닫기 함수
    function closeMenu() {
      console.log("상태값!!", isMenuOpen);
      // 메뉴창이 열려있을 때 동작해야 하는 로직을 여기에 작성
      gnb.classList.remove("active");
      search.classList.remove("active");
      searchInput.classList.remove("active");
      mFn.qs("body").classList.remove("hidden");
      setIsMenuOpen(!isMenuOpen);
    } ///////////////////////////////////////////////

    // 검색창 나오기 ->> 메뉴바와 별도로!!!!! 기능추가
    mFn.addEvt(icon5, "click", function () {
      search.classList.toggle("active");
      searchInput.classList.toggle("active");
    }); ////////// 검색창 클릭 이벤트 ////////

    $(menuLiArray).on("mouseover", function (e) {
      // 이벤트 타겟이 하위 요소라도 가장 가까운 li 부모 요소 찾기
      let menuLi = e.currentTarget;
      let idx = menuLiArray.indexOf(menuLi);
      console.log("순번:", idx);
      $(rightImg).eq(idx).css({ zIndex: 1 }).siblings().css({ zIndex: 0 });
    }); //////////////////// 오버시 //////////////////////////////////

    aaaa = () => {
      window.scrollTo(0, 0);
      console.log("호출!");
      closeMenu();
      // 햄버거 메뉴를 원래모양으로 변경하기
      // 위해  false로 만들고 닫기에서 true로 전환함!
      setIsMenuOpen(false);
    };



    

  }); /////////////// useEffect 도큐먼트 출력후 실행///////////////
  let aaaa;
  // html 햄버거버튼 바꾸기
  const toggleMenu = () => {
    console.log(isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  }; ////////////////////

  //////////////////////// 검색관련 함수들 ///////////////////////////

  // 이동함수 ////
  const goNav = useNavigate();
  // 1.검색창 보이기 함수
  const showSearch = (e) => {
    console.log(isMenuOpen);
    // 기본기능막기
    // e.preventDefault();
    // 2.입력창
    $("#schinGnb").focus();
  }; ///////// showSearch 함수 /////////
  // 2.검색창에 앤터키 누르면 검색함수 호출
  const enterKey = (e) => {
    // e.keyCode 는 숫자, e.key는 문자로 리턴함
    if (e.key == "Enter") {
      // 입력창의 입력값 읽어오기 : val()사용
      let txt = $(e.target).val().trim();
      console.log(txt);
      // 빈값이 아니면 검색함수 호출(검색어전달)
      if (txt != "") {
        // 검색 보내기
        goSearch(txt);
      } //// if ////
    } ///// if ////
  }; /////// enterKey ////////

  // 3.검색페이지로 검색어와 함께 이동하기 함수
  const goSearch = (txt) => {
    console.log("나는 검색하러 간다규!!~!~");
    // 라우터 이동함수로 이동하기
    // 네비게이트메서드(라우터주소,{state:{보낼값}})
    goNav("search", { state: { keyword : txt } });
  }; ////////// goSearch /////
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 메뉴박스 */}
        <div className="icon-menu-box">
          <Link to={"/"} onClick={() => aaaa()}>
            <Logo logoStyle="top" />
          </Link>
          <div className="icon-box">
            <ul className="icon-menu">
              <li onClick={() => toggleMenu()}>
                {isMenuOpen ? <CloseMenuIcon /> : <HamburgerMenuIcon />}
              </li>
              <li>
                <LoginIcon />
              </li>
              <li>
                <WishlistHeartIcon />
              </li>
              <li>
                <CartIcon />
              </li>
              {/* <li onClick={()=>showSearch()}> */}
              <li onClick={showSearch} 
              className="search-li">
                <SearchIcon />
              </li>

              {
                /////////////////////////////////////////////////////
                // iconMenu.map((v, i) => (
                // <li key={i} onClick={() => (
                //   i === 0
                //   ? toggleMenu()
                //   : null )}>
                //   {isMenuOpen && i === 0 ? <CloseMenuIcon /> : v}
                // </li>
                // ))
                ////////////////////////////////////////////////
              }
            </ul>
            <div className="search">
              <input
                type="text"
                name="schinGnb"
                placeholder="Filter by keyword"
                id="schinGnb"
                onKeyUp={enterKey}
                // onKeyUp={()=>enterKey()}
              />
            </div>
          </div>
        </div>
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <div className="left">
            <ul className="menu-box">
              {/* 2. GNB메뉴 데이터 배열로 만들기 */}
              {menu.map((v, i) => (
                <li key={i}>
                  {
                    // 하위메뉴가 있으면 일반 a요소에 출력
                    // 없으면 Link 라우팅출력 >>> 필요없음
                    // v.sub ? (<a href="#">{v.txt}</a>)
                    //    : (<Link to={v.link}>{v.txt}</Link>)
                    <Link to={v.link}>{v.txt}</Link>
                  }
                  {
                    // 서브메뉴 데이터가 있으면 하위 그리기
                    v.sub && (
                      <div className="smenu">
                        <ol>
                          {v.sub.map((v, i) => (
                            <li key={i}>
                              <Link to={v.link}>{v.txt}</Link>
                              
                            </li>
                          ))}
                        </ol>
                      </div>
                    )
                  }
                </li>
              ))}
            </ul>
          </div>
          {/* 메뉴박스 오른쪽칸 이미지들 */}
          <div className="right">
            {menuSrcV.map((v, i) => (
              <img key={i} src={v} alt={menuSrcK[i]} />
            ))}
          </div>
        </nav>
      </header>
    </>
  );
} ////////////// TopArea /////////////

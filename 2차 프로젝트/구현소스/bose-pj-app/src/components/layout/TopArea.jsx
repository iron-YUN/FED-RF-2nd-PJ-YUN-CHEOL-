// 상단영역 컴포넌트 ///
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { bCon } from "../modules/bCon";
import { Link } from "react-router-dom";
import mFn from "../func/my_function";
import $ from "jquery";
// 데이터 불러오기
import { isrc, menuSrc } from "../data/img_src";
// GNB 데이터 불러오기
import { menu } from "../data/gnb";
// 아이콘 svg 불러오기
import {
  iconMenu, // -> 이건 map 으로 바꾸면 사용
  CloseMenuIcon,
  HamburgerMenuIcon,
  LoginIcon,
  LogoutIcon,
  WishlistHeartIcon,
  CartIcon,
  SearchIcon,
  ThinPlusIcon,
} from "../data/icons";

// top css불러오기
import "../../css/top_area.scss";
// 부드러운 스크롤
import { scrolled, setPos } from "../modules/smoothScroll24";
// 로고 불러오기
import Logo from "../modules/Logo";
import SnsLink from "../modules/SnsLink";

// export default function TopArea() {
export const TopArea = memo(({ loginMsg, loginSts, logoutFn, goPage }) => {
  // 전역 컨텍스트 사용하기
  const myCon = useContext(bCon);
  // 햄버거 버튼을 X버튼으로 바꾸기위한 설정
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  // 이동함수 ////
  const goNav = useNavigate();
  //  메뉴박스 오른쪽칸에 들어갈 map 이미지들 변수 ////////////
  const menuSrcV = Object.values(menuSrc);
  const menuSrcK = Object.keys(menuSrc);
  // svg 메뉴 아이콘 크기 변경하기 ////////////////////
  let icon1;
  let icon1a;
  let gnb;
  let search;
  let searchInput;
  let menuLiArray;
  let rightImg;
  let closeMenu;

  useEffect(() => {
    const svgIcons = document.querySelectorAll(".top-area svg");
    svgIcons.forEach((v) => {
      v.setAttribute("width", "18");
      v.setAttribute("height", "18");
    }); ////////////아이콘 크기변경 함수///////////////////

    // 상단 메뉴바 아이콘버튼 변수
    icon1 = mFn.qsa(".icon-menu li")[0]; // 햄버거버튼
    icon1a = mFn.qsEl(icon1,"span");
    gnb = mFn.qs(".gnb");
    search = mFn.qs(".search");
    searchInput = mFn.qs(".search input");

    // li 요소와 img 요소를 배열로 재수집
    menuLiArray = Array.from($(".menu-box li a"));
    rightImg = $(".right img");

    // 메뉴창 닫기 위한 설정 /////////////////////////////
    const escClose = (event) => {
      if (event.key === "Escape" ) {
        closeMenu();
        setIsMenuOpen(false);
      } ///////// if //////
    }; /////////escClose///////////////
    window.addEventListener("keydown", escClose);

    // 메뉴버튼에 메뉴페이지 기능추가 + 최상단으로 이동 //////////////
    menuLiArray.forEach((v) => {
      mFn.addEvt(v, "click", topMenuOpen);
    });
    // 햄버거 버튼에 메뉴페이지 기능추가
    mFn.addEvt(icon1a, "click", menuOpen);
    function topMenuOpen() {
      // 메뉴 클릭시에만 상단스크롤 이동하기위해
      // 함수안에 함수를 호출
      menuOpen();
      window.scrollTo(0, 0);
    } /////// topMenuOpen ///////

    // 메뉴창 나오기 이벤트
    function menuOpen() {
      gnb.classList.add("active");
      mFn.qs("body").classList.add("hidden");
      if (isMenuOpen==true) {
        closeMenu();
        setIsMenuOpen(false);
      }
    } ////////////////menuOpen/////////////////////

    // 메뉴 닫기 함수
    closeMenu = () => {
      // 메뉴창이 열려있을 때 동작해야 하는 로직을 여기에 작성
      gnb.classList.remove("active");
      mFn.qs("body").classList.remove("hidden");
      // setIsMenuOpen(true);
    }; ///////////////////////////////////////////////

    $(menuLiArray).on("mouseover", function (e) {
      // 이벤트 타겟이 하위 요소라도 가장 가까운 li 부모 요소 찾기
      let menuLi = e.currentTarget;
      let idx = menuLiArray.indexOf(menuLi);
      // console.log("순번:", idx);
      $(rightImg).eq(idx).css({ zIndex: 1 }).siblings().css({ zIndex: 0 });
    }); //////////////////// 오버시 //////////////////////////////////
  }); /////////////// useEffect 도큐먼트 출력후 실행///////////////
  // 초기화셋팅함수
  const initSet = () => {
    window.scrollTo(0, 0);
    myCon.setPos(0);
    closeMenu();
    setIsMenuOpen(false);
  }; ////////////////

  // html 햄버거버튼 바꾸기
  const toggleMenu = () => {
      if(isMenuOpen==true){
        setIsMenuOpen(false);
      }
      else if(isMenuOpen==false){
        setIsMenuOpen(true);
      }
        
    // setIsMenuOpen(!isMenuOpen);
  }; ////////////////////

  const searchBtnFn = (e) => {
    e.stopPropagation();
    $("#schinGnb").focus();
    if (search.classList.contains("active")) {
      search.classList.remove("active");
      searchInput.classList.remove("active");
    } else {
      search.classList.add("active");
      searchInput.classList.add("active");
    }

  };

  //////////////////////// 검색관련 함수들 ///////////////////////////

  // 2.검색창에 앤터키 누르면 검색함수 호출
  const enterKey = (e) => {
    // e.keyCode 는 숫자, e.key는 문자로 리턴함
    if (e.key == "Enter") {
      // 입력창의 입력값 읽어오기 : val()사용
      let txt = $(e.target).val().trim();
      // 빈값이 아니면 검색함수 호출(검색어전달)
      if (txt != "") {
        // 입력창 비우기
        $(e.target).val("");
        // 검색 보내기
        goSearch(txt);
        // 메뉴창 닫기
        if (isMenuOpen) {
          $(".icon-menu li").first().trigger("click");
        }
      } //// if ////
      initSet();
    } ///// if ////
  }; /////// enterKey ////////

  // 3.검색페이지로 검색어와 함께 이동하기 함수
  const goSearch = (txt) => {
    // console.log("나는 검색하러 간다규!!~!~");
    // 라우터 이동함수로 이동하기
    // 네비게이트메서드(라우터주소,{state:{보낼값}})
    goNav("search", { state: { keyword: txt } });
    window.scrollTo(0, 0);
  }; ////////// goSearch /////
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 메뉴박스 */}
        <div className="icon-menu-box">
          <div className="icon-box">
            <Link to={"/"} onClick={initSet}>
              <Logo logoStyle="top" />
            </Link>
            <ul className="icon-menu">
              <li >
                <span onClick={(e) => {
                  // e.preventDefault();
                  toggleMenu();
                }
                  } title="Menu open & close">
                {isMenuOpen==true ? <CloseMenuIcon /> : <HamburgerMenuIcon />}
                </span>
              </li>
              {loginSts === null && (
                <>
                  <li>
                    <Link to="/login" onClick={initSet} title="Log in">
                      <LoginIcon />
                    </Link>
                  </li>
                </>
              )}
              {loginSts !== null && (
                <>
                  <li>
                    <a
                      onClick={(e) => {
                        // 기본이동 막기
                        e.preventDefault();
                        // 로그아웃처리함수 호출
                        logoutFn();
                        initSet();
                      }}
                      title="Log out"
                    >
                      <LogoutIcon />
                    </a>
                  </li>
                </>
              )}

              <li>
                <Link to="/wish" onClick={initSet} title="Wish list">
                  <WishlistHeartIcon />
                </Link>
              </li>
              <li>
                <Link to="/cart" onClick={initSet} title="Cart list">
                  <CartIcon />
                </Link>
              </li>
              <li onClick={searchBtnFn} className="search-li" title="Search">
                <SearchIcon />
              </li>
            </ul>
          </div>
          <div className="search">
            <input
              type="text"
              name="schinGnb"
              placeholder="Filter by keyword"
              id="schinGnb"
              onKeyUp={enterKey}
            />
          </div>
          <div className="logmsg">
            <span>
            <Link to="/mypage" onClick={initSet} title="my page">
              {loginMsg}
            </Link>
            </span>
          </div>
        </div>
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <div className="left">
            <ul className="menu-box">
              {loginSts === null && (
                <>
                  <div className="logmsg2">
                    <span className="log">
                      <Link to="/login" onClick={initSet} title="Log in">
                        Log in
                      </Link>
                      &nbsp; / &nbsp;
                      <Link to="/member" onClick={initSet} title="Join us">
                        Join us
                      </Link>
                    </span>
                  </div>
                </>
              )}
              {loginSts !== null && (
                <>
                  <div className="logmsg2">
                    <span>
                      <Link to="/mypage" onClick={initSet} title="my page">
                      {loginMsg}
                      </Link>
                      </span>
                    <span className="log">
                      / &nbsp;
                      <a
                        href="#"
                        onClick={(e) => {
                          // 기본이동 막기
                          e.preventDefault();
                          // 로그아웃처리함수 호출
                          logoutFn();
                          initSet();
                        }}
                        title="Log out"
                      >
                        Log out
                      </a>
                    </span>
                  </div>
                </>
              )}
              {/* 2. GNB메뉴 데이터 배열로 만들기 */}
              {menu.map((v, i) => (
                <li key={i}>
                  {
                    // 하위메뉴가 있으면 일반 a요소에 출력
                    // 없으면 Link 라우팅출력 >>> 필요없음
                    // v.sub ? (<a href="#">{v.txt}</a>)
                    //    : (<Link to={v.link}>{v.txt}</Link>)
                    <Link to={v.link} onClick={initSet}>
                      {v.txt}
                    </Link>
                  }
                  {
                    // 서브메뉴 데이터가 있으면 하위 그리기
                    v.sub && (
                      <div className="smenu">
                        <ol>
                          {v.sub.map((v, i) => (
                            <li key={i}>
                              <Link to={v.link} onClick={initSet}>
                                {v.txt}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )
                  }
                </li>
              ))}
              <li className="sns-link-box">
                <SnsLink />
              </li>
            </ul>
          </div>
          {/* 메뉴박스 오른쪽칸 이미지들 */}
          <div className="right">
            {menuSrcV.map((v, i) => (
              <img key={i} src={process.env.PUBLIC_URL + v} alt={menuSrcK[i]} />
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}); ////////////// TopArea /////////////

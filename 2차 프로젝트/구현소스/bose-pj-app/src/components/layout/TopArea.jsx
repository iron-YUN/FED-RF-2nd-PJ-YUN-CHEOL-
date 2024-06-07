// 상단영역 컴포넌트 ///
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mFn from "../func/my_function";
import { isrc, menuSrc } from "../data/img_src";
// GNB 데이터 불러오기
import { menu } from "../data/gnb";

// top css불러오기
import "../../css/top_area.scss";

// 아이콘 svg 불러오기
import { HamburgerMenuIcon, CloseMenuIcon, iconMenu } from "../data/icons";

// 로고 불러오기
import Logo from "../modules/Logo";

export default function TopArea() {
  // 햄버거 버튼을 X버튼으로 바꾸기위한 설정
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuSrcV = Object.values(menuSrc);
  const menuSrcK = Object.keys(menuSrc);
  useEffect(() => {
    const svgIcons = document.querySelectorAll(".top-area svg");

    svgIcons.forEach((v) => {
      v.setAttribute("width", "18");
      v.setAttribute("height", "18");
    }); ////////////아이콘 크기변경 함수///////////////

    const icon1 = mFn.qsa(".icon-menu li")[0];
    const icon5 = mFn.qsa(".icon-menu li")[4];
    const gnb = mFn.qs(".gnb");
    const search = mFn.qs(".search");
    const searchInput = mFn.qs(".search input");

    // 메뉴창 나오기
    mFn.addEvt(icon1, "click", function () {
      if (isMenuOpen) {
        gnb.classList.remove("active");
        // 서치버튼이 메뉴열기버튼 기능과 연결되어 잘작동하지않아
        // 메뉴를 열고닫을때도 관리되도록 장치함
        // 이벤트 버블링
        search.classList.remove("active");
        searchInput.classList.remove("active");
        // 메뉴버튼 동작시 스크롤 제한여부
        mFn.qs("body").classList.remove("hidden");
      } /// if //
      else {
        gnb.classList.add("active");
        // 서치버튼이 메뉴열기버튼 기능과 연결되어 잘작동하지않아
        // 메뉴를 열고닫을때도 관리되도록 장치함
        // 이벤트 버블링
        search.classList.add("active");
        searchInput.classList.add("active");
        // 메뉴버튼 동작시 스크롤 제한여부
        mFn.qs("body").classList.add("hidden");
      } //// else ///
    }); //////////////// 메뉴 햄버거 버튼 클릭이벤트 ////////////////
    // 검색창 나오기
    mFn.addEvt(icon5, "click", function () {
      search.classList.toggle("active");
      searchInput.classList.toggle("active");
    }); ////////// 검색창 클릭 이벤트 ////////
  }); /////////////// useEffect 도큐번트 출력후 실행///////////////

  // 햄버거버튼 바꾸기
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 메뉴박스 */}
        <div className="icon-menu-box">
          <Link to={"/"}>
            <Logo logoStyle="top" />
          </Link>
          <div className="icon-box">
            <ul className="icon-menu">
              {iconMenu.map((v, i) => (
                // <li key={i} onClick={i === 0 ? toggleMenu : null}>
                //   {i === 0 && isMenuOpen ? <CloseMenuIcon /> : v}
                // </li>
                // 기존 x 버튼 작동시 다른버튼이 작동하지 않음 위아래 같음
                <li key={i} onClick={() => (i === 0 ? toggleMenu() : null)}>
                  {isMenuOpen && i === 0 ? <CloseMenuIcon /> : v}
                </li>
              ))}
            </ul>
            <div className="search">
              <input type="text" />
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
                    // 없으면 Link 라우팅출력
                    v.sub ? (
                      <a href="#">{v.txt}</a>
                    ) : (
                      <Link to={v.link}>{v.txt}</Link>
                    )
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
          <div className="right">
            {menuSrcV.map((v, i) => (
              <img className="menu-img" key={i} src={v} alt={menuSrcK[i]} />
            ))}
          </div>
        </nav>
      </header>
    </>
  );
} ////////////// TopArea /////////////

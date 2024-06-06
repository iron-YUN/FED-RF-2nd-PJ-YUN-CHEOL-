// 상단영역 컴포넌트 ///
import React, { useState, useEffect } from "react";
import mFn from "../func/my_function";

// GNB 데이터 불러오기
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

// top css불러오기
import "../../css/top_area.scss";

// 아이콘 svg 불러오기
import { HamburgerMenuIcon, CloseMenuIcon, iconMenu } from "../data/icons";

// 로고 불러오기
import Logo from "../modules/Logo";

export default function TopArea() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const svgIcons = document.querySelectorAll(".top-area svg");

    svgIcons.forEach((icon) => {
      icon.setAttribute("width", "18");
      icon.setAttribute("height", "18");
    });
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
        search.classList.remove("active");
        searchInput.classList.remove("active");
      mFn.qs("body").classList.remove("hidden");
      } else {
        gnb.classList.add("active");
        // 서치버튼이 메뉴열기버튼 기능과 연결되어 잘작동하지않아
        // 메뉴를 열고닫을때도 관리되도록 장치함
        search.classList.add("active");
        searchInput.classList.add("active");
      mFn.qs("body").classList.add("hidden");
      }

    });
    // 검색창 나오기
    mFn.addEvt(icon5, "click", function () {
      search.classList.toggle("active");
      searchInput.classList.toggle("active");
    });
  }); //////////////////////////////

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
          <Logo logoStyle="top" />
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
            <img src="./images/menu.webp" alt="" />
          </div>
        </nav>
      </header>
    </>
  );
} ////////////// TopArea /////////////

// 아이콘메뉴 설명파트 이해하기

/* 
두 코드의 차이는 조건부 이벤트 핸들러의 사용 방식입니다.

첫 번째 코드에서는 조건부 이벤트 핸들러가 toggleMenu 함수의 참조를 사용합니다. 따라서 클릭 이벤트가 발생했을 때, 해당 이벤트 핸들러가 호출됩니다. 이 때 toggleMenu 함수가 호출되어 햄버거 메뉴를 열거나 닫습니다.
            <ul className="icon-menu">
              {iconMenu.map((v, i) => (
                <li key={i} onClick={i === 0 ? toggleMenu : null}>
                  {i === 0 && isMenuOpen ? <CloseMenuIcon /> : v}
                </li>
              ))}
            </ul>

두 번째 코드에서는 조건부 이벤트 핸들러가 익명 함수를 사용하여 이벤트 핸들러를 호출합니다. 이 경우 클릭 이벤트가 발생했을 때, 익명 함수가 실행됩니다. 그런 다음 익명 함수 내에서 조건을 확인하고 toggleMenu 함수를 호출하거나 호출하지 않습니다.
            <ul className="icon-menu">
              {iconMenu.map((v, i) => (
                <li key={i} onClick={() => i === 0 ? toggleMenu() : null}>
                  {isMenuOpen && i === 0 ? <CloseMenuIcon /> : v}
                </li>
              ))}
            </ul>

두 코드 모두 첫 번째 아이콘을 클릭할 때만 toggleMenu 함수를 호출하여 햄버거 메뉴의 열고 닫음을 처리합니다. 다른 아이콘들은 기본적으로 클릭 이벤트가 발생할 때마다 아이콘의 기본 동작을 수행합니다.

*/

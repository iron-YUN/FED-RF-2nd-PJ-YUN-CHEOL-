import { Link, useNavigate } from "react-router-dom";
// 데이터 불러오기
import { topItems } from "../data/top_foot_data";
import { dCon } from "../modules/dCon";
import { useContext } from "react";
const tData = topItems;

export default function TopArea() {
  // 컨텍스트 사용하기
  const myCon = useContext(dCon);
  // 이동 함수 ///
  const goNav = useNavigate();

  // tsContent += `<img src="./IMG/poster/0${i}_ts.jpg" alt="ts${i}" class="ts-img">`;

  // 코드 리턴구역 ////
  return (
    <>
      <header id="top-area" className="">
        <div className="page-bx col-12">
           <div className="logobx-area mlogo">
            <Link to="/" >
              <img
                src={process.env.PUBLIC_URL + "/images/PIXAR_LOGO black.png"}
                alt="메인로고"
              />
            </Link>
          </div>
          <div id="GNB" className="">
            <ul className="menu-list">
              {tData.map((v, i) => (
                <li key={i}>
                  <Link to={v.link} className="icon1">
                    {v.text}
                  </Link>
                  <Link to={v.link} className="icon2">
                    <img src={process.env.PUBLIC_URL + v.src} alt={v.text} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            <div className="member smenu">
          {
            /* 회원가입, 로그인 버튼은
                            로그인 상태가 null일때 나옴 */
                        myCon.loginSts === null && (
                            <>
                                <li>
                                    <Link to="/member">JOIN US</Link>
                                </li>
                                <li>
                                    <Link to="/login">LOGIN</Link>
                                </li>
                            </>
                        )
                    }
                    {
                        /* 로그인 상태이면 로그아웃 버튼 보임 */
                        myCon.loginSts !== null && (
                            <>
                                <li className="logmsg" style={{fontSize:"15px", color:"Blue",}}>
                                    {/* 로그인 확인 */}
                                     {myCon.loginMsg}
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            // 기본이동 막기
                                            e.preventDefault();
                                            // 로그아웃 처리함수 호출
                                            myCon.logoutFn();
                                        }}
                                    >
                                        LOGOUT
                                    </a>
                                </li>
                            </>
                        )
                    }
          </div>
         
        </div>
      </header>
    </>
  );
} /////// TopArea /////

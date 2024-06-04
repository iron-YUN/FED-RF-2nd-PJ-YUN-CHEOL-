// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

export default function TopArea() {
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb">
          <ul>
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
        </nav>
      </header>
    </>
  );
} ////////////// TopArea /////////////

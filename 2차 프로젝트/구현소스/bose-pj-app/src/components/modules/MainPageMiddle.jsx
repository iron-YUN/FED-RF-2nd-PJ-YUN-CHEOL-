import React, { useContext } from "react";

// 데이터 불러오기
import { middleBan } from "../data/main_page_middle";
// css
import "./css/main_page_middle.scss";
import { Link } from "react-router-dom";
import { bCon } from "./bCon";

function MainPageMiddle() {
  const myCon = useContext(bCon);
  const initSet = () => {
    window.scrollTo(0, 0);
    myCon.setPos(0);
  }; ////////////////
  const getRdItem = (arr) => {
    // 예) 순번1:Headphones -> 품목개수6개 중 랜덤순번품목의 순번을 rdIdx 에 담는다
    const rdIdx = Math.floor(Math.random() * arr.length);
    return arr[rdIdx];
    // 위에서 rdIdx 에 담은 순번을 Headphones[랜덤수] 로 리턴해 getRdItem 에 담는다.
  }; ////////////// 랜덤1 함수 getRdItem ////////////
  const rdItem = getRdItem(middleBan);
  // console.log(rdItem);
  return (
    <div className="rec-buy-now-box">
      <section className="rec-buy-now">
        <div className="rec-100-1 rec-100">
          <div
            className="box-pad"
            style={{
              background: `url(${rdItem[0].src})${rdItem[0].back}`,
            }}
          >
            <h1>{rdItem[0].tit1}</h1>
            <h3>{rdItem[0].tit2}</h3>
            <Link to={"/shop"} onClick={initSet}>
              <span>BUY NOW</span>
            </Link>
          </div>
        </div>
        <div className="rec-100-2 rec-100 ">
          <div className="rec-50-1 ">
            <div
              className="box-pad"
              style={{ background: `url(${rdItem[1].src})${rdItem[1].back}` }}
            >
              <h1>{rdItem[1].tit1}</h1>
              <h3>{rdItem[1].tit2}</h3>
              <Link to={"/shop"} onClick={initSet}>
                <span>BUY NOW</span>
              </Link>
            </div>
          </div>
          <div className="rec-50-2 ">
            <div
              className="box-pad"
              style={{ background: `url(${rdItem[2].src})${rdItem[2].back}` }}
            >
              <h1>{rdItem[2].tit1}</h1>
              <h3>{rdItem[2].tit2}</h3>
              <Link to={"/shop"} onClick={initSet}>
                <span>BUY NOW</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPageMiddle;

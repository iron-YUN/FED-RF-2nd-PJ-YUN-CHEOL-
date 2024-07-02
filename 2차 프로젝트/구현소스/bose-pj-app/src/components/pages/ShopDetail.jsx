// DC PJ 캐릭터 상세페이지
// -> 캐릭터 리스트로 부터 라우팅 이동하여 보이는 페이지

import React, { useEffect } from "react";

// 라우터로 전달한 state값을 읽기위한 객체
import { Link, useLocation } from "react-router-dom";

// 데이터 불러오기
import { products } from "../data/items_main_data";
import { productsDta } from "../data/items_detail_data2";

// CSS불러오기
import "../../css/shop_detail.scss";


function ShopDetail() {
  // 라우터 호출시 전달한 값을 받는다!
  const loc = useLocation();
  const pname = loc.state.pname;
  const idx =loc.state.idx;
  const type =loc.state.type;
  const src =loc.state.src;
  const color =loc.state.color;
  console.log("나는 무슨색",color);
  console.log("나뭐야",productsDta[type]);

  // 화면랜더링 실행구역 ////
  // 매번실행해야 이미 생성된 컴포넌트의
  // 랜더링 실행구역이 업데이트시에도 작동한다!
  useEffect(()=>{
    window.scrollTo(0,0);
  });

  // 코드리턴구역 //////////////////
  return (
    <div id="shop-detail">
      {/* 1.제목 */}
          <h1> 
            <Link to="/SHOP" >
            SHOP 
            </Link>
            {' '}
            <Link to={`/${type}`}>
            {type}
            </Link>
          </h1>

      {/* 2.상세정보박스 */}
      <div className="detail-box">
        {/* 2-1. 왼쪽박스 */}
        <div className="left">
          <img 
          src={`${process.env.PUBLIC_URL + src}${
            idx
          }/${color[0]}/0.webp`}
          alt={pname}
          />
        </div>
        {/* 2-2.오른쪽박스 */}
        <div className="right">
        <h2>{pname}</h2>
        </div>
      </div>
      {/* 3. */}
      
    </div>
  );
}

export default ShopDetail;

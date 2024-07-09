// DC PJ 캐릭터 상세페이지
// -> 캐릭터 리스트로 부터 라우팅 이동하여 보이는 페이지

import React, { useEffect, useState } from "react";

// 라우터로 전달한 state값을 읽기위한 객체
import { Link, useLocation } from "react-router-dom";

// 데이터 불러오기
import { products2 } from "../data/items_main_data";
import { productsDta } from "../data/items_detail_data";
import { colorList } from "../data/color_data";
import { SwiperDtail } from "../plugin/SwiperDtail";
import { WishlistHeartIcon } from "../data/icons";
// CSS불러오기
import "../../css/shop_detail.scss";
import Check from "../modules/Check";
import Detail from "../modules/Detail";
import MainPageRd from "../modules/MainPageRd";
function ShopDetail() {
  
  // 라우터 호출시 전달한 값을 받는다!
  const loc = useLocation();
  console.log("전체파라미터:",loc);
  const pname = loc.state.pname;
  const idx = loc.state.idx;
  const type = loc.state.type;
  const src = loc.state.src;
  const color = loc.state.color;
  const cimg = loc.state.cimg;
  const sel = loc.state.sel;
  console.log("나는 무슨색", sel);
  // console.log("나는 무슨색",color2);
  // console.log("나뭐야",productsDta[type][idx]);
  // console.log("나뭐야",products2[type][idx]);
  console.log("나뭐야", products2[type][idx].price);
  const pdata = products2[type][idx];
  const pdata2 = productsDta[type][idx];
  const price = pdata.price;
  const iText = pdata2.infoText;
  const iIcon = pdata2.infoIcon;
  const box = pdata2.Box;
  const Spec = pdata2.Specifications;
  
  // 현재색상 상태변수를 넘어온 값으로 초기셋팅함!
  const [nowColor,setNowColor] = useState(sel);
  // 화면랜더링 실행구역 ////
  // 매번실행해야 이미 생성된 컴포넌트의
  // 랜더링 실행구역이 업데이트시에도 작동한다!
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // 코드리턴구역 //////////////////
  return (
    <div id="shop-detail">
      {/* 1.제목 */}
      <h1>
        <Link to="/SHOP">SHOP</Link> <Link to={`/${type}`}>{type}</Link>
      </h1>

      {/* 2.상세정보박스 */}
      <div className="detail-box">
        {/* 2-1. 왼쪽박스 */}
        <div className="left">
          <div className="dt-img-box">
            <SwiperDtail
              src={src}
              type={type}
              idx={idx}
              sel={nowColor}
              pname={pname}
            />
          </div>
          <p className="dt-text">{iText}</p>
          <div className="dt-icon">
            {iIcon.map((v, i) => (
              <span key={i}>{v}</span>
            ))}
          </div>
        </div>
        {/* 2-2.오른쪽박스 */}
        <div className="right">
          <section className="dt-sticky">
            {/* 제품명 */}
            <h2 className="ptit">{pname}</h2>
            {/* 가격 */}
            <p className="price">${price}</p>
            {/* 색상 */}
            <div className="color-select">
              {color.map((v, i) => (
                <div key={i} className={`color-box ${v == sel ? "on" : ""}`}>
                  <div className="color-circle-wrap"
                  onClick={()=>{
                    console.log("나클릭!",v);
                    // 현재색상 상태변수업데이트
                    setNowColor(v);
                  }}
                  >
                    <div
                      className="color-circle"
                      style={{ backgroundColor: colorList[v] }}
                    ></div>
                  </div>
                  <p className="color-tit"> {v}</p>
                </div>
              ))}
            </div>
            {/* 선택버튼 */}
            <div className="buy-botton">
              <div className="add-cart">
                <span>ADD TO CART</span>
              </div>
              <div className="add-wish">
                <span><WishlistHeartIcon strokeWidth="1" width="24" height="24"/></span>
              </div>
            </div>
            <div className="direct">
              <h3>Benefits of buying direct from Bose</h3>
              <div className="direct-flex">
                <Check />
                <p>90-day risk-free trial</p>
              </div>
              <div className="direct-flex">
              <Check />
                <p>Price match promise</p>
              </div>
              <div className="direct-flex">
              <Check />
                <p>Complimentary shipping & returns</p>
              </div>
              <div className="direct-flex">
              <Check />
                <p>
                  Pay later with{" "}
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo/shop.png`}
                    alt="klarna"
                  />{" "}
                  or <strong>Afterpay</strong>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="detail-box2">
      <Detail
              src={src}
              type={type}
              idx={idx}
              sel={nowColor}
              pname={pname}
            />
      </div>
      {/* 3.랜덤 */}
      <MainPageRd />
    </div>
  );
}

export default ShopDetail;


import React, { useContext, useEffect, useRef, useState } from "react";
// 제이쿼리 불러오기
import $, { now } from "jquery";
// 라우터로 전달한 state값을 읽기위한 객체
import { Link, useLocation, useNavigate } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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
import { bCon,cCon } from "../modules/bCon";
import { SwiperRd } from "../plugin/SwiperRd";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";

function ShopDetail() {
  // const [selectedColor, setSelectedColor] = useState(null);
  ////////////////////////////////////////
  const goNav = useNavigate();
  const myCon = useContext(bCon); // 장바구니로 사용
  console.log("난나니뇨",myCon.selColor);
  // 라우터 호출시 전달한 값을 받는다!
  const loc = useLocation();
  const { pname, idx, type, src } = loc.state;
  const color = products2[type][idx].color
  console.log(products2[type][idx].color)
  // console.log("바꿀게",sel);

  ////////////////////////////////////////
  const pdata = products2[type][idx];
  const pdata2 = productsDta[type][idx];
  const price = pdata.price;
  const iText = pdata2.infoText;
  const iIcon = pdata2.infoIcon;
  const box = pdata2.Box;
  const Spec = pdata2.Specifications;

////////////////////////////////////////
  const initSet = () => {
    window.scrollTo(0, 0);
    myCon.setPos(0);
    goNav("/cart");
  }; ////////////////

  // 위시아이콘 표시
  useEffect(() => {
    window.scrollTo(0, 0);
    if(myCon.selColor===null){
      $(".color-circle-wrap").first().trigger("click");
    }
  }, []);////////////////////

    /////////// 제품 색상 변경 함수 //////////
    const changeColor = (e) => {
      // 원조대상
      let org = $(e.currentTarget);
      // 대상 바꾸기선택
      let tg = org.parents(".color-box");
      // 현재 자신에게 클래스"on"넣기
      tg.addClass("on").siblings().removeClass("on");
    }; ///////////// colorFn ///////

    
    
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
              sel={myCon.selColor}
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
                <div key={i} className={`color-box ${v == myCon.selColor ? "on" : ""}`}>
                  <div
                    className="color-circle-wrap"
                    onClick={(e) => {
                      console.log("나클릭!", v);
                      // 현재색상 상태변수업데이트
                      myCon.setSelColor(v);
                      changeColor(e);
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
              <button
                className="add-cart"
                onClick={() => {
                  if(myCon.selColor===null){
                    alert("Please select a color");
                  }
                  else{
                    // [ 로컬스 카트 데이터 넣기 ]
                    // 1. 로컬스 없으면 만들어라!
                    if (!localStorage.getItem("cart-data")) {
                      localStorage.setItem("cart-data", "[]");
                    } //// if /////
  
                    // 2. 로컬스 읽어와서 파싱하기
                    let locals = localStorage.getItem("cart-data");
                    locals = JSON.parse(locals);
  
                    // 3. 중복검사
                    // (1) 인클루드 비교
                    let newLocals = locals.map(
                      (v) => `${v.idx}-${v.color}-${v.type}`
                    );
                    // 현재 선택된 항목을 문자열로 변환
                    let currentItem = `${idx}-${myCon.selColor}-${type}`;
                    // 중복 검사
                    let retSts = newLocals.includes(currentItem);
  
                    // (2) some 비교
                    // 가독성: some 메서드는 콜백 함수를 사용하여 조건을 명확히 표현할 수 있습니다. 이는 코드의 가독성을 높이고 유지보수성을 향상시킵니다.
                    // 유연성: some 메서드는 복잡한 조건을 쉽게 처리할 수 있으며, 객체의 속성을 직접 비교할 수 있습니다.
                    // let newLocals = locals.map(v => ({
                    //   idx: v.idx,
                    //   color: v.color,
                    //   type: v.type
                    // }));
  
                    // 현재 선택된 항목
                    // let currentItem = {
                    //   idx: idx,
                    //   color: nowColor,
                    //   type: type
                    // };
  
                    // 중복 검사
                    // let retSts = newLocals.some(v =>
                    //   v.idx === currentItem.idx &&
                    //   v.color === currentItem.color &&
                    //   v.type === currentItem.type
                    // );
                    
                    /////////////////////////////////
                    if (retSts) {
                      // 메시지 보이기
                      alert("This item is already in your cart!");
                      // 함수 나가기
                      return;
                    }
                    const userConfirmed = window.confirm("Would you like to go to your shopping cart?");
                    
                    if (userConfirmed) {
                      // 사용자가 확인 버튼을 눌렀을 때
                      initSet();
                      // goNav("/cart");
                    } else {
                      // 사용자가 취소 버튼을 눌렀을 때
                      console.log("사용자가 취소를 눌렀습니다.");
                    } 
                    //////////////////////////////
  
                    // 4.로컬스에 객체 데이터 추가하기
                    locals.push({
                      type: type,
                      idx: idx,
                      color: myCon.selColor,
                      pname: pname,
                      price:price,
                      src: src,
                      cnt: "1",
                    });
  
                    // 로컬스에 문자화하여 입력하기
                    localStorage.setItem("cart-data", JSON.stringify(locals));
  
                    // 로컬스 카트데이터 상태값 변경!
                    myCon.setLocalsCart(localStorage.getItem("cart-data"));
                    // 카트리스트 생성 상태값 변경!
                    myCon.setCartSts(true);
                  }
                }}
              >
                <span>ADD TO CART</span>
              </button>
              <div className="add-wish"
               onClick={() => {
                  if(myCon.selColor===null){
                    alert("Please select a color");
                  }
                  else{

                    // [ 로컬스 카트 데이터 넣기 ]
                    // 1. 로컬스 없으면 만들어라!
                    if (!localStorage.getItem("wish-data")) {
                      localStorage.setItem("wish-data", "[]");
                     
                    } //// if /////
   
                    // 2. 로컬스 읽어와서 파싱하기
                    let locals = localStorage.getItem("wish-data");
                    locals = JSON.parse(locals);
   
                    // 3. 중복검사
   
                    // (1) 인클루드 비교
                    let newLocals = locals.map(
                      (v) => `${v.idx}-${v.color}-${v.type}`
                    );
                    // 현재 선택된 항목을 문자열로 변환
                    let currentItem = `${idx}-${myCon.selColor}-${type}`;
                    // 중복 검사
                    let retSts = newLocals.includes(currentItem);
                    if (retSts) {
                      alert("This item is already in your wish list!");
                      return;
                    } ///// if //////
                    else if(!retSts){
                     alert("The item has been added to your wish list!");
                    }
                    locals.push({
                      type: type,
                      idx: idx,
                      color: myCon.selColor,
                      pname: pname,
                      price:price,
                      src: src,
                      cnt: "1",
                    });
                    localStorage.setItem("wish-data", JSON.stringify(locals));
                    myCon.setLocalsWish(localStorage.getItem("wish-data"));
                    myCon.setWishSts(true);
                  }
               }}
              >
                <span className="wish">
                  <WishlistHeartIcon strokeWidth="1" width="24" height="24" />
                </span>
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
            <div className="buy-botton">
              <button
                className="go-cart"
                onClick={
                  initSet
                }
                
              >
                <span>MOVE TO CART</span>
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="detail-box2">
        <Detail src={src} type={type} idx={idx} sel={myCon.selColor} pname={pname} />
      </div>
      <WhyBuyFromBose />
      <MainPageRd />
    </div>
  );
}

export default ShopDetail;


// 보내는값 구조
// MAinArea > Main > MainPageRd > SwiperRd
// MAinArea > ShopDetail > MainPageRd > SwiperRd
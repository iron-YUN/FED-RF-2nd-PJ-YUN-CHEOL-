import React, { useContext, useEffect, useState } from "react";
import { bCon, cCon } from "../modules/bCon";
// 제이쿼리
import $ from "jquery";
import { Link } from "react-router-dom";
import "../../css/cart_detail.scss";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";
import { card } from "../data/card_data";
// 아이콘
import { HiMinus, HiPlus } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import MainPageRd from "../modules/MainPageRd";
function Cart({ loginSts }) {
  const myCon = useContext(bCon);
  console.log("난몰랑22",loginSts);
  // 로컬스 데이터 가져오기
  // const selData = JSON.parse(myCon.localsCart);
  const [selData, setSelData] = useState(JSON.parse(myCon.localsCart));
  ///////////////////////////////////////////////////////////////////
  selData.map((v,i)=>
    // 이거왜 두번실행되는거지
    console.log(v.cnt)
  );
  // 강제 리랜더링을 위한 상태변수
  const [force, setForce] = useState(false);
    // 더하기 버튼
    const [force1, setForce1] = useState(false);
    const [force2, setForce2] = useState(false);
  //////////////////////////////////////////////////
  useEffect(() => {
    const localCartData = JSON.parse(localStorage.getItem('cart-data'));
    if (localCartData) {
      setSelData(localCartData);
      myCon.localsCart = JSON.stringify(localCartData); // Context에 업데이트
    }
  }, []);

  const updateCartData = (index, increment) => {
    if (index >= 0 && index < selData.length) {
      const updatedCnt = Math.max(1, parseInt(selData[index].cnt, 10) + increment);
      const updatedData = [...selData];
      updatedData[index].cnt = String(updatedCnt);

      // 상태 업데이트
      setSelData(updatedData);
      setForce(!force);
      // 로컬 스토리지에 업데이트된 데이터 저장
      localStorage.setItem('cart-data', JSON.stringify(updatedData));
      myCon.localsCart = JSON.stringify(updatedData); // Context에 업데이트
    }
  };
  //////////////////////////////////////////////////
///////////////////////////////////////////////
  function addComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }/////////////////
  ////////////////////////////////////////////////////

  // input 데이터 에 따른 display
  const [promoCode, setPromoCode] = useState('');

  const inputChange = (event) => {
    setPromoCode(event.target.value);
  };
  const showBtn = () => {
    window.open('https://groups.id.me/en/groups/new', '_blank', 'noopener,noreferrer');
  };

  //  console.log("로컬스:", selData);
  // 전체 데이터 개수
  const dataCnt = selData.length;
  // console.log("데이터수:", dataCnt);
  // 총합계함수 /////////////
  const totalFn = () => {
    let result = 0;
    $(".sum-num2").each((idx, ele) => {
      // console.log("값:", $(ele).val());
      result += Number($(ele).val());
    });
    return result;
  }; ////////// totalFn ///////////
  //////////////// 총 가격 ///////////////////////
  useEffect(() => {
    $(".total-num").text("$" + addComma(totalFn()) + ".00");
    $(".total-saving").text("$" + addComma(Math.round(totalFn() * 0.05 * 100) / 100));
  }, [dataCnt, force,selData]);
  ///////////////////////////////////////////////
  function showFn1 (){
    const box = document.querySelectorAll(".acount-info")[0]
    if(force1 !== true){
      box.style.display = "block";
    }
    else if(force1 === true){
      box.style.display = "none";
    }
  };
  function showFn2 (){
    const box = document.querySelectorAll(".acount-info")[1]
    if(force2 !== true){
      box.style.display = "block";
    }
    else if(force2 === true){
      box.style.display = "none";
    }
  };
  return (
    <>
    <div id="cart_detail">
      <h1>Your Cart</h1>
      {/* 2.상세정보박스 */}
      <div className="detail-box">
        {/************************ 2-1. 왼쪽박스 ************************/}
        <div className="left">
          {loginSts === null && (
            <div className="sign-in">
              <span>Do you have a My Bose Account?</span>
              <br />
              <span>Enjoy member benefits and faster checkout </span>
              <Link to="/login">Sign-in</Link>
            </div>
          )}
          {loginSts !== null && (
            <div className="sign-in">
          
            </div>
          )}
          <h3 className="pcnt">Products ({dataCnt})</h3>
          <div className="cart-list-box">
            {selData.map((v, i) => (
              <div key={i} className="cart-item">
                <button className="del"
                    onClick={() => {
                      // confirm()의 "확인"클릭시 true
                      if (
                        window.confirm(
                          "Are you sure you want to delete this item?"
                        )
                      ) {
                        // console.log("삭제함!!!");
                        // console.log("현재객체:",selData);
                        // console.log("지울순번:",i);
                        // // splice 자체를 찍으면 지워진 요소가 찍힘
                        // console.log("지우기:",selData.splice(i,1));

                        // 지울 배열 순번은 map()에서 i로 들어옴
                        // 지울 배열은 selData임
                        // 1.데이터 지우기 :
                        selData.splice(i, 1);
                        // 2. 데이터 문자화하기 : 변경된 원본을 문자화
                        let res = JSON.stringify(selData);
                        // 3.로컬스 "cart-data"반영하기
                        localStorage.setItem("cart-data", res);
                        // 4. 카트리스트 전역상태변수 변경
                        myCon.setLocalsCart(res);
                        // 5. 데이터개수가 0이면 카트리스트
                        // 상태변수를 false로 변경하여
                        // 카트리스트 출력을 없앤다!
                        if (selData.length == 0)
                          myCon.setCartSts(false);
                        // let aa = [];
                        // aa.splice(지울순번,지울개수)
                      } //// if /////
                    }}
                >
                  <IoCloseOutline />
                </button>
                <div className="cart-img">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      v.src +
                      v.idx +
                      "/" +
                      v.color +
                      "/0.webp"
                    }
                    alt=""
                  />
                </div>
                <div className="cart-info">
                  <div className="item-name">{v.pname}</div>
                  <div className="item-color">color: {v.color}</div>
                  <div className="item-num">
                    <div className="item-cnt">
                      <button onClick={() => {
                        updateCartData(i, -1)
                        // forceFn()
                      }

                      }>
                        <HiMinus />
                      </button>
                      <span>{v.cnt}</span>
                      <button onClick={() => updateCartData(i, 1)}>
                        <HiPlus />
                      </button>
                    </div>
                    <div className="item-price">${addComma(v.price * v.cnt)}.00</div>
                    <input
                      className="sum-num2"
                      type="hidden"
                      defaultValue={v.price * v.cnt}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/************************* 2-2.오른쪽박스 *************************/}
        <div className="right">
          <section className="dt-sticky">
            <h2 className="cart-page-header">Order Summary</h2>
            <div className="cart-total">
              <div className="row">
                <div className="col-8">
                  <h3>Subtotal</h3>
                </div>
                <div className="col-4">
                  <h3 className="total-num"></h3>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h3>2-Day Shipping</h3>
                </div>
                <div className="col-4">
                  <h3>Free</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <h3>Tax</h3>
                </div>
                <div className="col-4">
                  <h3>$--.--</h3>
                </div>
              </div>
              <div className="row tax-txt">
                <div className="col-8">
                  <span> Applicable taxes will be calculated at checkout</span>
                </div>
              </div>
              <div className="row row-space"></div>
              <div className="row row-total">
                <div className="col-8">
                  <span>Total</span>
                </div>
                <div className="col-4">
                  <span className="total-num"></span>
                </div>
              </div>
              <div className="row row-save">
                <div className="col-8">
                  <span></span>
                </div>
                <div className="col-4">
                  <span>You are saving a total </span>
                  <span className="total-saving"></span>
                </div>
              </div>
              {/* 선택버튼 */}
              <div className="buy-botton">
                <button className="add-cart">
                  <span>CHECKOUT</span>
                </button>
              </div>
            </div>
            <div className="acount">
              <div
                className="row"
                onClick={() => {
                  setForce1(!force1);
                  showFn1();
                }}
              >
                <div className="col-8 row-underline">
                  <h3>Do you have a promo code?</h3>
                </div>
                <div className="col-4">
                  <span>
                    {force1 === true && <HiMinus />}
                    {force1 !== true && <HiPlus />}
                  </span>
                </div>
              </div>
              <div className="acount-info">
                <input
                  type="text"
                  placeholder="Insert your promo code in the field. The code will only "
                  value={promoCode}
        onChange={inputChange}
                />
                <button className="apply-btn apply-btn2" style={{ display: promoCode ? 'block' : 'none' }}>
                  <span>APPLY</span>
                </button>
              </div>
            </div>
            <div className="acount">
              <div
                className="row"
                onClick={() => {
                  setForce2(!force2);
                  showFn2();
                }}
              >
                <div className="col-8 row-underline">
                  <h3>Verify ID.Me Discount</h3>
                </div>
                <div className="col-4">
                  <span>
                    {force2 === true && <HiMinus />}
                    {force2 !== true && <HiPlus />}
                  </span>
                </div>
              </div>
              <div className="acount-info">
                  <span>Responders/​Medical/​Nurses/​Students/​Educators/​Military/​Hospital Employees</span>
                <div className="buy-botton">
                  <button className="add-cart2" onClick={showBtn}>
                    <span>VERIFY WITH </span>&nbsp;&nbsp;
                    <img src={process.env.PUBLIC_URL+"/images/logo/idme.png"} alt="" />
                  </button>
                </div>
                  <span>Aviation headsets excluded. In order to benefit from your offer, your cart must reach the minimum amount of $199. For general ID.me verification questions, please visit</span>
              </div>
            </div>
            <div className="card-list">
              <div className="row">
                <span>Accepted Payment Options</span>
              </div>
              <div className="cards">
                <ul>
                  {
                    card.map((v,i)=>
                    <li key={i}>
                      {v}
                    </li>
                    )
                  }
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/**************************  **************************/}
      </div>
    </div>
    <WhyBuyFromBose/>
    <MainPageRd/>
    </>
  );
}

export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { bCon, cCon } from "../modules/bCon";
// 제이쿼리
import $ from "jquery";
import { Link } from "react-router-dom";
import "../../css/cart_detail.scss";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";

// 아이콘
import { HiMinus, HiPlus } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import MainPageRd from "../modules/MainPageRd";
function Cart({ loginSts }) {
  // 강제 리랜더링을 위한 상태변수
  const [force, setForce] = useState(false);
  // 더하기 버튼? 
  const [force1, setForce1] = useState(false);
  const [force2, setForce2] = useState(false);
  const myCon = useContext(bCon);
  // 로컬스 데이터 가져오기
  const selData = JSON.parse(myCon.localsCart);
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
  useEffect(() => {
    $(".total-num").text("$" + totalFn() + ".00");
    $(".total-saving").text("$" + Math.round(totalFn() * 0.05 * 100) / 100);
  }, [dataCnt, force]);
  
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
        {/* 2-1. 왼쪽박스 */}
        <div className="left">
          {loginSts === null && (
            <div className="sign-in">
              <span>Do you have a My Bose Account?</span>
              <br />
              <span>Enjoy member benefits and faster checkout </span>
              <Link to="/login">Sign-in</Link>
            </div>
          )}
          <h3 className="pcnt">Products ({dataCnt})</h3>
          <div className="cart-list-box">
            {selData.map((v, i) => (
              <div key={i} className="cart-item">
                <button className="del">
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
                      <button>
                        <HiMinus />
                      </button>
                      <span>{v.cnt}</span>
                      <button>
                        <HiPlus />
                      </button>
                    </div>
                    <div className="item-price">${v.price * v.cnt}.00</div>
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
        {/* 2-2.오른쪽박스 */}
        <div className="right">
          <section className="dt-sticky">
            <h2 className="cart-page-header">Order Summary</h2>
            <div className="cart-total">
              <div className="row">
                <div className="col-8">
                  <span>Subtotal</span>
                </div>
                <div className="col-4">
                  <span className="total-num"></span>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <span>2-Day Shipping</span>
                </div>
                <div className="col-4">
                  <span>Free</span>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <span>Tax</span>
                </div>
                <div className="col-4">
                  <span>$--.--</span>
                </div>
              </div>
              <div className="row tax-txt">
                <div className="col-8">
                  <span> Applicable taxes will be calculated at checkout</span>
                </div>
                <div className="col-4">
                  <span></span>
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
                />
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
                  <button className="add-cart2">
                    <span>VERIFY WITH </span>&nbsp;&nbsp;
                    <img src={process.env.PUBLIC_URL+"/images/logo/idme.png"} alt="" />
                  </button>
                </div>
                  <span>Aviation headsets excluded. In order to benefit from your offer, your cart must reach the minimum amount of $199. For general ID.me verification questions, please visit</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <WhyBuyFromBose/>
    <MainPageRd/>
    </>
  );
}

export default Cart;

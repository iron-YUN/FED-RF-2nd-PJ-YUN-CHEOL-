import React, { useContext, useEffect, useState } from "react";
import { bCon, cCon } from "../modules/bCon";
// 제이쿼리
import $ from "jquery";
import { Link } from "react-router-dom";
import "../../css/cart_detail.scss";
function Cart({ loginSts }) {
  // 강제 리랜더링을 위한 상태변수
  const [force, setForce] = useState(false);
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
      console.log("값:", $(ele).val());
      result += Number($(ele).val());
    });
    return result;
  }; ////////// totalFn ///////////
  useEffect(() => {}, [dataCnt, force]);
  return (
    <div id="cart_detail">
      <h1>Your Cart</h1>
      {/* 2.상세정보박스 */}
      <div className="detail-box">
        {/* 2-1. 왼쪽박스 */}
        <div className="left">
          {loginSts !== null && (
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
                <button className="del">×</button>
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
                      <button>-</button>
                      <span>{v.cnt}</span>
                      <button>+</button>
                    </div>
                    <div className="item-price">
                      ${v.price*v.cnt}.00
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 2-2.오른쪽박스 */}
        <div className="right">
          <section className="dt-sticky">
            {/* 선택버튼 */}
            <div className="buy-botton">
              <button className="add-cart">
                <span>CHECKOUT</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import React from "react";

function Cart(props) {
  return (
    <div id="shop-detail">
      <h1>Your Cart</h1>
      {/* 2.상세정보박스 */}
      <div className="detail-box">
        {/* 2-1. 왼쪽박스 */}
        <div className="left">
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

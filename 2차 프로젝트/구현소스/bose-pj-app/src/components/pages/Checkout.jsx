import React from "react";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";
import MainPageRd from "../modules/MainPageRd";
import "../../css/checkout.scss";
function Checkout(props) {
  return (
    <>
      <div id="checkout-detail">
        <h1>Check out</h1>
        <div className="check-out-box">
          <div>
            <input type="text" placeholder="Insert your name" />
          </div>
          <div>
            <input type="text" placeholder="Insert your phone number" />
          </div>
          <div>
            <input type="email" placeholder="Insert your email address" />
          </div>
          <div>
            <input type="text" placeholder="Insert your shipping address" />
          </div>
          <div>
            <input type="text" placeholder="Insert your city" />
          </div>
          <div>
            <input type="text" placeholder="Insert your state/province" />
          </div>
          <div>
            <input type="text" placeholder="Insert your postal code" />
          </div>
          <div>
            <input type="text" placeholder="Insert your credit card number" />
          </div>
          <div>
            <input
              type="text"
              placeholder="Insert your card's expiration date (MM/YY)"
            />
          </div>
          <div>
            <input type="text" placeholder="Insert your card's CVV" />
          </div>
          <div className="buy-botton">
            <button className="add-cart">
              <span>BUY NOW</span>
            </button>
          </div>
        </div>
      </div>
      <WhyBuyFromBose />
      <MainPageRd />
    </>
  );
}

export default Checkout;

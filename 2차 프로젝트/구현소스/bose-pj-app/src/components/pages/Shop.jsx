// 코믹스페이지 컴포넌트 ///

import Banner from "../modules/Banner";
import ShopArea from "../modules/ShopArea";
import ShopItems from "../modules/ShopItems";
import ShopTit from "../modules/ShopTit";

export default function Shop() {
  return (
    <>
      {/* 1.배너 컴포넌트 */}
      <Banner catName="SHOP" />
      <div id="shop-area">
        <ShopTit catName="SHOP" />
        <div className="shop-tit-box"><h2>Headphones</h2></div>
        <ShopItems catName="Headphones" />
        <div className="shop-tit-box"><h2>Earbuds</h2></div>
        <ShopItems catName="Earbuds" />
        <div className="shop-tit-box"><h2>Speakers</h2></div>
        <ShopItems catName="Speakers" />
        <div className="shop-tit-box"><h2>Home Theater</h2></div>
        <ShopItems catName="Home Theater" />
        <div className="shop-tit-box"><h2>PA Systems</h2></div>
        <ShopItems catName="PA Systems" />
      </div>
    </>
  );
} ////////////// Shop /////////////

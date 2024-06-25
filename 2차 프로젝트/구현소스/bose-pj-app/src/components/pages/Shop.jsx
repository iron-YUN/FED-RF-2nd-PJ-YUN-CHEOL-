// 컴포넌트 ///
import Banner from "../modules/Banner";
import ShopTit from "../modules/ShopTit";
import ShopItems from "../modules/ShopItems";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";
import MainPageRd from "../modules/MainPageRd";

export default function Shop() {
  return (
    <>
      {/* 1.배너 컴포넌트 */}
      <Banner catName="SHOP" />
      <div id="shop-area">
        {/* 제목 컴포넌트 */}
        <ShopTit catName="SHOP" />
        <div className="shop-tit-box">
          <h2>Headphones</h2>
        </div>
        {/* 각 카테고리 제품 묶음 */}
        <ShopItems catName="Headphones" />
        <div className="shop-tit-box">
          <h2>Earbuds</h2>
        </div>
        <ShopItems catName="Earbuds" />
        <div className="shop-tit-box">
          <h2>Speakers</h2>
        </div>
        <ShopItems catName="Speakers" />
        <div className="shop-tit-box">
          <h2>Home Theater</h2>
        </div>
        <ShopItems catName="Home Theater" />
        <div className="shop-tit-box">
          <h2>PA Systems</h2>
        </div>
        <ShopItems catName="PA Systems" />
        {/* 왜 보스인가 모듈 */}
        <WhyBuyFromBose />
        {/* 랜덤 추천 제품 */}
        <MainPageRd />
      </div>
    </>
  );
} ////////////// Shop /////////////

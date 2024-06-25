// 캐릭터페이지 컴포넌트 ///

import Banner from "../modules/Banner";
import MainPageRd from "../modules/MainPageRd";
import ShopArea from "../modules/ShopArea";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";

export default function Speakers() {
    return (
      <>
      {/* 1.배너 컴포넌트 */}
      <Banner catName="Speakers" />
      <ShopArea catName="Speakers"/>
      <WhyBuyFromBose />
      {/* 랜덤 추천 제품 */}
      <MainPageRd />
  </>
    );
  } ////////////// Speakers /////////////
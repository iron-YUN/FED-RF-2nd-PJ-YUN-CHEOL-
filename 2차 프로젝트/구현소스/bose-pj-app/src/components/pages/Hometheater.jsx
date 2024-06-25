// 컴포넌트 ///
import Banner from "../modules/Banner";
import ShopArea from "../modules/ShopArea";
import ShopVidBan from "../modules/ShopVidBan";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";
import MainPageRd from "../modules/MainPageRd";

export default function Hometheater() {
  return (
    <>
      {/* 1.배너 컴포넌트 */}
      <Banner catName="Home Theater" />
      <ShopArea catName="Home Theater" />
      {/* 동영상 모듈 */}
      <ShopVidBan catName="Home Theater" />
      <WhyBuyFromBose />
      {/* 랜덤 추천 제품 */}
      <MainPageRd />
    </>
  );
} ////////////// Hometheater /////////////

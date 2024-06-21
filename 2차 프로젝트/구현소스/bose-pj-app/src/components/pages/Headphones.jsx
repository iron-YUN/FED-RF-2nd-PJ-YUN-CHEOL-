// 캐릭터페이지 컴포넌트 ///

import Banner from "../modules/Banner";
import ShopArea from "../modules/ShopArea";

export default function Headphones() {
  return (
    <>
      {/* 1.배너 컴포넌트 */}
      <Banner catName="Headphones" />
      <ShopArea catName="Headphones"/>
    </>
  );
} ////////////// Headphones /////////////

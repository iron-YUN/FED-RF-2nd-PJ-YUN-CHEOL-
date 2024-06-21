// 캐릭터페이지 컴포넌트 ///

import Banner from "../modules/Banner";
import ShopItems from "../modules/ShopItems";

export default function Headphones() {
  return (
    <>
      {/* 1.배너 컴포넌트 */}
      <Banner catName="Headphones" />
      <ShopItems catName="Headphones"/>
    </>
  );
} ////////////// Headphones /////////////

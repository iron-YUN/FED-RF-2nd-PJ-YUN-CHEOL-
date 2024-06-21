// 코믹스페이지 컴포넌트 ///

import Banner from "../modules/Banner";
import ShopItems from "../modules/ShopItems";

export default function Shop() {
  return (
    <>
      {/* 1.배너 컴포넌트 */}
      <Banner catName="SHOP" />
      <ShopItems catName="Headphones"/>
      <ShopItems catName="Earbuds"/>
      <ShopItems catName="Speakers"/>
      <ShopItems catName="Home Theater"/>
      <ShopItems catName="PA Systems"/>
    </>
  );
} ////////////// Shop /////////////

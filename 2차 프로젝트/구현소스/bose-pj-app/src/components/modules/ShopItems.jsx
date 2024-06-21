import React from 'react';
import { products2 } from "../data/items_main_data";
import { WishlistHeartIcon } from "../data/icons";

function ShopItems({catName}) {
  console.log(catName);
  console.log(products2);
  console.log(products2[catName]);
  const products = products2[catName];
  return (
      <div></div>
  );
}
export default ShopItems;

// const getRdItem = (arr) => {
//   // 예) 순번1:Headphones -> 품목개수6개 중 랜덤순번품목의 순번을 rdIdx 에 담는다
//   const rdIdx = Math.floor(Math.random() * arr.length);
//   // console.log(rdIdx);
//   return arr[rdIdx];
//   // 위에서 rdIdx 에 담은 순번을 Headphones[랜덤수] 로 리턴해 getRdItem 에 담는다.
// }; ////////////// 랜덤1 함수 getRdItem ////////////

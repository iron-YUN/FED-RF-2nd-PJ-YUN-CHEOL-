import React from "react";
import ShopItems from "./ShopItems";

function ShopArea({ catName }) {
  return (
    <div id="shop-area">
      {/* 페이지 제목 */}
      <h1>Shop</h1>
      <h2>{catName}</h2>
      {/* 페이지 제품 컴포넌트 */}
      <ShopItems catName={catName} />
      {/* 기타 설명 컴포넌트 */}
    </div>
  );
}

export default ShopArea;

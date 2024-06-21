import React from "react";
import ShopItems from "./ShopItems";
import ShopTit from "./ShopTit";

function ShopArea({ catName }) {
  return (
    <div id="shop-area">
      {/* 페이지 제목 */}
      <ShopTit catName={catName}/>
      {/* 페이지 제품 컴포넌트 */}
      <ShopItems catName={catName} />
      {/* 기타 설명 컴포넌트 */}
    </div>
  );
}

export default ShopArea;

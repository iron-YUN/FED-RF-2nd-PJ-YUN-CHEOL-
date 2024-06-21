import React from "react";
import { products2 } from "../data/items_main_data";
import { WishlistHeartIcon } from "../data/icons";
import { colorList } from "../data/color_data";

import $ from "jquery";
// css
import "./css/shop_items.scss";

function ShopItems({ catName }) {
  // console.log(catName);
  // console.log(colorList);
  // console.log(products2);
  // console.log(products2[catName]);
  const getRdItem = (arr) => {
  // 예) 순번1:Headphones -> 품목개수6개 중 랜덤순번품목의 순번을 rdIdx 에 담는다
  const rdIdx = Math.floor(Math.random() * arr.length);
  // console.log(rdIdx);
  return arr[rdIdx];
  // 위에서 rdIdx 에 담은 순번을 Headphones[랜덤수] 로 리턴해 getRdItem 에 담는다.
}; ////////////// 랜덤1 함수 getRdItem ////////////

// 제품 색상바꾸기 함수
const colorFn = (e, clr) => {
  e.preventDefault();
  console.log("나를 선택했군!!",clr);
  console.log("나를 선택했군!!",e.currentTarget);
  // ./images/speakers/1/white_smoke/0.webp
  // 0. 원조대상
  let org = $(e.currentTarget);

  // 1. 대상이미지선택
  let tg = org.parents(".item-p-info").prev().find("img");

  // 2. 대상이미지 src값 읽기
  let isrc = tg.attr("src").split("/");
  console.log("전isrc:",JSON.stringify(isrc));
  // 3. 대상이미지 src값 변경
  isrc[4] = clr;
  console.log("후isrc:",isrc);
  // 4. 대상이미지경로 복원
  isrc = isrc.join("/");
  console.log("최종isrc:",isrc);
  // 5. 대상이미지 src 실제로 변경
  tg.attr("src",isrc);

  // 6. 현재 자신에게 클래스"on"넣기
  org.addClass("on").siblings().removeClass("on");
  
};///////////// colorFn ////////////////



  const products = products2[catName];
  return (
    <div className="shop-item">
      {/* 플렉스 설정 item-box */}
      {products.map((v, i) => {
        // console.log(v);
        const rdColor = getRdItem(v.color);
        // console.log(rdColor);
        // console.log(v.color);
        return (
        // 제품 각 박스
        <div className="item-cat-cont" key={i}>
          <div className="item-p-box">
            {/* 1.위시리스트 버튼 */}
            <span className="wish">
              <WishlistHeartIcon strokeWidth="1" width="30" height="30" />
            </span>
            {/* ******************************* */}
            {/* 2.제품이미지 */}
            <div className="item-p-img">
              <img
              idx={v.idx}
              src={`${v.isrc}${v.idx}/${rdColor}/0.webp`}
              alt={v.name}
              />
            </div>
            {/* ******************************* */}
            {/* 3.제품별 정보박스 */}
            <section className="item-p-info">
              {/* 3-1.제품명 */}
              <p className="item-p-name">{v.name}</p>
              {/* 3-2.제품가격 */}
              <p className="item-p-price">{v.price}</p>
              {/* 3-3.제품색상 */}
              <div className="item-p-color-box">
                {v.color.map((clr, idx) => (
                  <div
                    key={idx}
                    className={`color-circle-wrap ${
                      clr == rdColor ? "on" : ""
                    }`} onClick={(e) => colorFn(e, clr)}
                  >
                    <div
                      className="color-circle"
                      style={{ backgroundColor: colorList[clr] }}
                      title={clr}
                    />
                  </div>
                ))}
              </div>
            </section>
            {/* ******************************* */}
          </div>
        </div>
        );
      })}
    </div>
  );
}
export default ShopItems;



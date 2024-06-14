import React, { useState, useRef, useEffect } from "react";
// 아이템 데이터 불러오기
import { products } from "../data/items_main_data";
import { colorList } from "../data/color_data";
import { WishlistHeartIcon } from "../data/icons";

// 제이쿼리????
import $ from "jquery";

// css불러오기
import "../../css/trending.scss";

export default function Trending() {
  useEffect(() => {
    // 위시리스트 이벤트 등록하기
    const wish = document.querySelectorAll(".wish");
    // 컬리선택 체인지 이벤트 등록하기
  });
  // console.log(colorList);

  // 무작위 제품+컬러 함수만들기
  // 1. rdProduct : 리턴코드에서 products의 순번 카테고리를 받아서
  // 해당 카테고리 내의 순번개수만큼 랜덤돌리기를 한다
  // 2.rdColor : 위에서 결정된 제품내의 컬러리스트를 랜덤돌리기한다(위와같은방법).
  const getRdItem = (array) => {
    const rdIdx = Math.floor(Math.random() * array.length);
    // 예) 순번1:Headphones -> 품목개수6개 중 랜덤순번품목의 순번을 rdIdx 에 담는다
    // console.log(rdIdx);
    return array[rdIdx];
    // 위에서 rdIdx 에 담은 순번을 Headphones[랜덤수] 로 리턴해 getRdItem 에 담는다.
  };

  return (
    <div id="recommended">
      <h1>Recommended</h1>
      {/* 플렉스 설정 item-box */}
      <section className="item-box">
        {
          // 1.각 카테고리별로 하나의 제품 랜덤선택
          // 2.선택된 제품에서의 가지고있는 색 랜덤선택
          products.map((v, i) => {
            // 랜덤컬러 제품
            const rdProduct = getRdItem(v);
            // console.log(rdProduct); // 랜덤오브젝트 확인하기
            // 랜덤컬러 순번
            const rdColor = getRdItem(rdProduct.color);
            // console.log(rdColor); // 랜덤 컬러 확인하기
            return (
              // 제품 각 박스
              <div key={i} className="cat-cont ">
                <div className="p-box">
                  {/* 1.위시리스트 버튼 */}
                  <span className="wish">
                    <WishlistHeartIcon strokeWidth="1" width="30" height="30" />
                  </span>
                  {/* 2.제품이미지 */}
                  <div className="p-img">
                    <img
                      idx={rdProduct.idx}
                      src={`${rdProduct.isrc}${rdProduct.idx}/${rdColor}/0.webp`}
                      alt={rdProduct.name}
                    />
                  </div>
                  {/* 3.제품별 정보박스 */}
                  <section className="p-info">
                    {/* 3-1.제품명 */}
                    <p className="p-name">{rdProduct.name}</p>
                    {/* 3-2.제품가격 */}
                    <p className="p-price">{rdProduct.price}</p>
                    {/* 3-3.제품색상 */}
                    <div className="p-color-box">
                      {rdProduct.color.map((color, idx) => (
                        <div
                          key={idx}
                          className={`color-circle-wrap ${
                            color == rdColor ? "on" : ""
                          }`}
                        >
                          <div
                            className="color-circle"
                            style={{ backgroundColor: colorList[color] }}
                            title={color}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            );
          })
        }
      </section>
    </div>
  );
}

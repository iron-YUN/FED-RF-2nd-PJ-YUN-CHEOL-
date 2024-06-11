import React, { useState, useEffect } from "react";
// 아이템 데이터 불러오기
import { products } from "../data/items_main_data";
import { colorList } from "../data/color_data";
import { WishlistHeartIcon } from "../data/icons";
// css불러오기
import "../../css/trending.scss";

export default function Trending() {
  useEffect(() => {
    const wish = document.querySelectorAll(".wish");
  });
  console.log(colorList);

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
      <section className="trending-container item-box">
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
              <div key={i} className="cat-cont">
                <div className="p-box">
                  <span className="wish">
                    <WishlistHeartIcon strokeWidth="1" width="30" height="30" />
                  </span>
                  <div className="p-img">
                    <img
                      idx={rdProduct.idx}
                      src={`${rdProduct.isrc}${rdProduct.idx}/${rdColor}/0.webp`}
                      alt={rdProduct.name}
                    />
                  </div>
                  <section className="p-info">
                    <p className="p-name">{rdProduct.name}</p>
                    <p className="p-price">{rdProduct.price}</p>
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

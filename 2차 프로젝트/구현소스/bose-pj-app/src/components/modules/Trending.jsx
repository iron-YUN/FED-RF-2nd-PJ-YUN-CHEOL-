import React from "react";
// 아이템 데이터 불러오기
import {products } from "../data/items_main_data";
import { colorList } from "../data/color_data";

// css불러오기
import "../../css/trending.scss";

export default function Trending() {
    const getRandomColor = () => {
      const colorKeys = Object.keys(colorList);
      const randomIndex = Math.floor(Math.random() * colorKeys.length);
      return colorList[colorKeys[randomIndex]];
    };
  
    return (
      <div className="trending-container">
        {products.map((category, index) => (
          <div key={index} className="category-container">
            {category.map((product, idx) => {

              return (
                <div key={idx} className="product-box">
                  <img
                    src={`${product.isrc}${product.idx}/${
                      Object.keys(product.color[0])[0]
                    }/0.webp`}
                    alt={product.name}
                  />
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price}</p>

                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
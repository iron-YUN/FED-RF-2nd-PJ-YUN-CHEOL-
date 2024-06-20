import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
// 아이템 데이터 불러오기
import { products } from "../data/items_main_data";
import { colorList } from "../data/color_data";
import { WishlistHeartIcon } from "../data/icons";

// 제이쿼리????
import $ from "jquery";

// css불러오기
import "./css/trending.scss";
import { SwiperRd } from "../plugin/SwiperRd";

export default function Trending() {
  return (
    <div id="recommended">
      <h1>Recommended</h1>
      <section className="item-box">
        <SwiperRd/>
      </section>
    </div>
  );
}

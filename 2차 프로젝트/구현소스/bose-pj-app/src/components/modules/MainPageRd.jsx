import React from "react";

// css불러오기
import "./css/main_page_rd.scss";
import { SwiperRd } from "../plugin/SwiperRd";

export default function MainPageRd() {
  return (
    <div id="recommended">
      <h1>Recommended</h1>
      <section className="item-box">
        <SwiperRd />
      </section>
    </div>
  );
}

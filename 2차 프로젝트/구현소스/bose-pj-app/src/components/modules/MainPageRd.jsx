import React, { memo } from "react";

// css불러오기
import "./css/main_page_rd.scss";
import { SwiperRd } from "../plugin/SwiperRd";

const MainPageRd = memo(() => {
  console.log("선택리스트 읽어~!");
  return (
    <div id="recommended">
      <h1>Recommended</h1>
      <section className="item-box">
        <SwiperRd />
      </section>
    </div>
  );
});

export default MainPageRd;

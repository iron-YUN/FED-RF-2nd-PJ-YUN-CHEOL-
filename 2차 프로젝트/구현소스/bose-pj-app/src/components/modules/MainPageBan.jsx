import React from "react";

// 이미지 동영상 데이터불러오기
import { mainPageBan } from "../data/main_page_banner";

function MainPageBan() {
  const mData = mainPageBan;
  return (
    <ul>
      {mData.map((v, i) => (
        <li key={i}>
          <h2 className="mb-tit">{v.tit}</h2>
          <video className="mb-video" src={v.vsrc} controls loop autoPlay muted />
          <div className="mb-img">
            <img src={v.isrc} alt={v.tit} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MainPageBan;

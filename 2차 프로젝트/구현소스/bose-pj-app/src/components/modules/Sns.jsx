// 배너 컴포넌트
import React from "react";
// sns 데이터
import {snsIconMenu } from "../data/icons";
// sns css
// import "../../css/sns.scss";

function Sns() {
console.log(selData);
  // 코드리턴
  return (
    <div className="">
      {/* 이동슬라이드 */}
      <ul className="">
        {snsIconMenu.map((v, i) => (
          <li key={i}>
            {v}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sns;
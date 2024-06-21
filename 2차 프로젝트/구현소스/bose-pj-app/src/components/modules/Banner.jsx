// 배너 컴포넌트
import React from "react";
import { Link } from "react-router-dom";
// 배너 데이터
import { banData } from "../data/banner";
// gnb 데이터
import { subMenu } from "../data/gnb";

// 배너 css
import "../../css/banner.scss";

function Banner({ catName }) {
  // catName 배너 데이터 카테고리이름

  // 선택데이터
  const selData = banData[catName];
  // console.log(selData);
  console.log(selData.src);
  // 메뉴데이터
  console.log(subMenu);

  // 코드리턴
  return (
    <div className="top-banner" style={{ background: `${selData.src} ` }}>
      <div className="ban-tit">
        <h1>{selData.tit1}</h1>
        <h2>{selData.tit2}</h2>
      </div>
      <div className="ban-smenu-box">
        {
          (catName == "Headphones"||
          catName =="Earbuds"||
          catName =="Speakers"||
          catName =="Home Theater"||
          catName =="PA Systems"||
          catName =="SHOP") &&
          subMenu.map((v,i)=>
            <div key={i} className="ban-smenu">
              <Link to={v.link} >{v.txt}</Link>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
// 아이콘 데이터
import { whyData } from "../data/icons";

// css
import "./css/why_bose.scss";

function WhyBuyFromBose() {

  return (
    <div className="why-bose-section">
    <div className="why-bose-box">
      <h1>Why buy from Bose </h1>
      <section className="why-bose-flex">
        {whyData.map((v, i) => 
          <div className="why-bose" key={i}>
            <div className="why-icon">
                <span>{v.icon}</span>
            </div>
            <div className="why-txt">
                <p>{v.txt1}</p>
                <p>{v.txt2}</p>
            </div>
          </div>
        )}
      </section>
    </div>
    </div>
  );
}

export default WhyBuyFromBose;

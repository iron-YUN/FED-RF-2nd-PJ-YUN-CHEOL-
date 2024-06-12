//DC.com 로고 컴포넌트
import React from "react";

// 이미지 경로 데이터 불러오기
import { isrc } from "../data/img_src";

export default function Logo({ logoStyle }) {
  // logoStyle : 상단 하단 로고 구분코드
  // 코드 값 : top(상단), bottom(하단)
  console.log(isrc.logoW, logoStyle);

  // 객체형 스타일 적용
  const myStyle = {
    top: {
        padding:"12px 20px",
      cursor: "pointer",
    },
    
    bottom: {
        cursor: "pointer",
    },
  };

  // 로고 이미지 스타일 객체
  const imgStyle = {
    top: { width: "110px" , 
    },
    bottom: { width: "80px" },
    video:{width: "100%"}
  };

  // 코드리턴구역
  return (
    <div className="logo-box" style={myStyle[logoStyle]}>
      <img style={imgStyle[logoStyle]} src={isrc.logoW} alt="Bose-logo" />
    </div>
  );
} ////////// logo ///////////////////

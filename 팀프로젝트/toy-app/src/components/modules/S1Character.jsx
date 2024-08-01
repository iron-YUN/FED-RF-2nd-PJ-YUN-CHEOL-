import React, { useEffect, useRef } from 'react';
import sub1Cbox from "../func/sub1/sub1_cbox.js";

//CSS 불러오기
import "../../css/sub1.scss";

export default function S1Character(props) {
  const chgridRef = useRef(null);

  useEffect(() => {
    sub1Cbox(chgridRef);
  }, []);

  return (
    <div id="S1cha-box" ref={chgridRef}></div>
  );
}

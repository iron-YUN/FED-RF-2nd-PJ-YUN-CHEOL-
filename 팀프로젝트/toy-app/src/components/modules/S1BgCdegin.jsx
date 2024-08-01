import React, { useEffect } from "react";
import sub1bgbox from "../func/sub1/sub1_bgbox.js";

//CSS 불러오기
import "../../css/sub1.scss";

export default function S1BgCdegin(props) {

  useEffect(() => {
    sub1bgbox();
  }, []);

  return <div id="S1bgc-box"></div>;
}
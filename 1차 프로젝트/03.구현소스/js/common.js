//  공통처리 JS - common.js

// 나의 함수 불러오기
import mFn from "./my_function.js";

// 공통처리 데이터 불러오기
import comData from "../data/common_data.js";

export default function setElement() {
    const topArea = mFn.qs("#top-area");
    const footerArea = mFn.qs("#footer-area");
    
    topArea.innerHTML = comData.topArea;
footerArea.innerHTML = comData.footerArea;
} ////////////// setElement 함수 ////////////


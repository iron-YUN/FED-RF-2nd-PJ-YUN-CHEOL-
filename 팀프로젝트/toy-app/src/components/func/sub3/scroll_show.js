import myFn from "../my_function";

export default function scrollShowFn() {
// 대상선정 
const scAct = myFn.qsa(".obj");

myFn.addEvt(window, "scroll", showIt);

function showIt() {
    scAct.forEach((ele) => addOn(ele));
} /////////// showIt 함수 /////////////

// 스크롤 등장 기준설정 : 화면의 2/3
const CRITERIA = (window.innerHeight / 3) * 2;

////  클래스 on 넣기 함수 
function addOn(ele) {
    
    let bcrVal = myFn.getBCR(ele);
    
    if (bcrVal < CRITERIA) ele.classList.add("show");
    
    else ele.classList.remove("show");
} 
} ///// scrollShoWFn ///

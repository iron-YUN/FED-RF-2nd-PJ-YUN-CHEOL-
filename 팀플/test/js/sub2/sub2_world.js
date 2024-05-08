import mFn from "../my_function.js";
import { worldTextItems } from "./sub2_data.js";

///////////////////////////////////////캐릭터뿌려주기//////////////////////////////////////////////
export default function showChar() {

    const worldItems = [
      "Al's Apartment",
      "Al's Toy Barn",
      "Woody's Roundup",
      "Zurg's Fortress",
      "Airport",
      "Colorscripts",
    ];
    ///////// 월드 리스트 뿌리기 ////////////////
    function innerWorld1() {
      let hcode = "<ul>";
      const menu = mFn.qsa(".menu")[1];
      worldItems.forEach((i) => {
        hcode += `
               <li>
               <a href="###">${i}</a>
               </li> 
           `;
      });
      hcode += "</ul>";
      menu.innerHTML = hcode;
    } ///////////////// 월드 리스트 뿌리기 함수/////////////////////////////
    innerWorld1();
    
    ////////////////////// 월드 정보 뿌리기 ///////////////
    function innerWorld2() {
      let hcode = "";
      const mainCont = mFn.qsa(".main-cont")[1];
      worldTextItems.forEach((text, i) => {
        // console.log("텍스트",text,i);
        // let text = charTextItems[1];
        // let i = 3;
        hcode += `
             <div class="ab-box ab-box2 world${i + 1}">
               <div class="world-info-box info-box">
                 <p class="sub-text2 info-text">${text}</p>
               </div>
               <div class="grid-img">
                 ${makeCode(i)}
               </div>
             </div>
             `;
      });
      mainCont.innerHTML = hcode;
    } ////////////////////// 월드 정보 뿌리기 함수 //////////////////////////////////
    innerWorld2();
    /////////////////////////////////////////////////////
    function makeCode(seq) {
      let total = 9;
      if (seq === 0 || seq === 2) {
        total = 8;
      }
      let hcode = "";
      for (let i = 0; i < total; i++) {
        hcode += `
           <a href="###">
             <img src="./img/img2/world/${seq + 1}_${i + 1}.jpg" alt="${i + 1}">
           </a>
         `;
      } /// for ///
      return hcode;
    } ////////////////makeCode/////////////////////

    function showAB() {
      const abBox = mFn.qsa(".ab-box2");
      // console.log('.ab-box1 개수',abBox)
      const menuLi = mFn.qsa(".menu2 ul li");
      // console.log('.menu1 ul li 개수',menuLi)
  
      abBox[0].classList.add("show");
      menuLi[0].classList.add("show");
  
      // 1-1. 이벤트대상 : ..menu1 ul li (버튼들) menuLi
      // 1-2. 변경대상 : .ab-box (겔러리 박스들) abBox
      menuLi.forEach((li, index) => {
        mFn.addEvt(li, "click", () => {
  
          // 1-1.모든 menuLi에서 'show' 클래스 제거z`
          // li.classList.remove("show");
          // 이건왜 이상한걸까요??????????????? 
          menuLi.forEach((menuLi)=>{
            menuLi.classList.remove("show");
          });/////// forEach //////////////
  
          // 1-2.모든 ab-box에서 'show' 클래스 제거z`
          abBox.forEach((abBox) => {
            abBox.classList.remove("show");
          });/////// forEach //////////////
  
          // 2.해당 순번에 'show' 클래스 추가
          abBox[index].classList.add("show");
          menuLi[index].classList.add("show");
        });/////// addEvt ///////
      });
    } /////////////////showAB///////////////////////////
    showAB();
}

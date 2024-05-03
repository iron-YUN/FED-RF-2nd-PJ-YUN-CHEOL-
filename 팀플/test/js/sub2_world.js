import mFn from "./my_function.js";
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
      let hcode = "";
      const menu = mFn.qsa(".menu")[1];
      worldItems.forEach((i) => {
        hcode += `
           <ul>
               <li>
               <a href="###">${i}</a>
               </li>
           </ul>
           `;
      });
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
                 <p class="main-text">${text}</p>
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
    function makeCode(seq, total = 9) {
      let hcode = "";
      for (let i = 0; i < total; i++) {
        hcode += `
           <a href="###">
             <img src="./IMG/img2/world/${seq + 1}_${i + 1}.jpg" alt="${
          i + 1
        }">
           </a>
         `;
      } /// for ///
      return hcode;
    } ////////////////makeCode/////////////////////

    function showAB() {
        const abBox = mFn.qsa(".ab-box2");
        const menuLi = mFn.qsa(".menu2 ul li");
    
        abBox[0].classList.add("show");
        menuLi[0].classList.add("show");
    
        // 1-1. 이벤트대상 : ..menu1 ul li (버튼들) menuLi
        // 1-2. 변경대상 : .ab-box (겔러리 박스들) abBox
    
        menuLi.forEach((li, index) => {
          // menuLi.classList.remove("show");
          mFn.addEvt(li, "click", () => {
            // menuLi[index].classList.add("show");
            // 모든 ab-box에서 'show' 클래스 제거
            abBox.forEach((abBox) => {
              abBox.classList.remove("show");
            });
            // 해당 순번의 ab-box에 'show' 클래스 추가
            abBox[index].classList.add("show");
            ``;
          });
        });
      } /////////////////showAB///////////////////////////
      showAB();
}

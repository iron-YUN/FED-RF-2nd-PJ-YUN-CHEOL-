import mFn from "./my_function.js";
import { charTextItems } from "./sub2_data.js";

///////////////////////////////////////캐릭터뿌려주기//////////////////////////////////////////////
export default function showChar() {

  const charItems = [
    // "DESIGN",
    "Woody",
    "Buzz Lightyear",
    "Jessie",
    "Bullseye",
    "Mrs. Potato Head",
    "Weezy",
    "The Prospector",
    "Emperor Zurg",
    "Al",
  ];
  ///////// 리스트뿌리기 함수 /////////
  function innerChar1() {
    let hcode = "";
    const menu = mFn.qsa(".menu")[0];
    charItems.forEach((i) => {
      hcode += `
          <ul>
              <li>
              <a href="###">${i}</a>
              </li>
          </ul>
          `;
    });
    menu.innerHTML = hcode;
  } ///////////////////리스트뿌리기 함수///////////////////////////
  innerChar1();

  /////// 캐릭터정보 뿌리기 /////////////
  function innerChar2() {
    let hcode = "";
    const mainCont = mFn.qsa(".main-cont")[0];
    charTextItems.forEach((text, i) => {
      // let text = charTextItems[1];
      // let i = 3;
      hcode += `
            <div class=" ab-box ab-box1 char${i + 1}">
              <div class="char-info-box info-box">
               <div class="char-img">
                <img src="./IMG/img2/char/char_${i + 1}.png" alt="${i + 1}" />
                </div>
                <p class="main-text">${text}</p>
              </div>
              <div class="grid-img">
                ${makeCode(i)}
              </div>
            </div>
            `;
    });
    mainCont.innerHTML = hcode;
  } ////////////////캐릭터정보 뿌리기 함수///////////////////////////////
  innerChar2();

  ///////////// 캐릭터 사진겔러리 뿌리기 /////////////
  function makeCode(seq, total = 9) {
    let hcode = "";
    for (let i = 0; i < total; i++) {
      hcode += `
          <a href="###">
            <img src="./IMG/img2/char/char2/${seq + 1}_${i + 1}.jpg" alt="${
        i + 1
      }">
          </a>
        `;
    } /// for ///
    return hcode;
  } ////////////////makeCode/////////////////////
  function showAB() {
    const abBox = mFn.qsa(".ab-box1");
    const menuLi = mFn.qsa(".menu1 ul li");

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

//////////////// 캐릭터 사진겔러리 뿌리기 함수 //////////

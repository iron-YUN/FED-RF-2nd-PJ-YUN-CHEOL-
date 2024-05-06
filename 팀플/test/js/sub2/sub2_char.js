import mFn from "../my_function.js";
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
    let hcode = " <ul>";
    const menu = mFn.qsa(".menu")[0];
    charItems.forEach((i) => {
      hcode += `
              <li>
              <a href="###">${i}</a>
              </li>
          `;
    });
    hcode += "</ul>";
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
                <img src="./img/img2/char/char_${i + 1}.png" alt="${i + 1}" />
                </div>
                <p class="main-text info-text">${text}</p>
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
            <img src="./img/img2/char/char2/${seq + 1}_${i + 1}.jpg" alt="${
        i + 1
      }">
          </a>
        `;
    } /// for ///
    return hcode;
  } ////////////////makeCode/////////////////////

  function showAB() {
    const abBox = mFn.qsa(".ab-box1");
    // console.log('.ab-box1 개수',abBox)
    const menuLi = mFn.qsa(".menu1 ul li");
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
        menuLi.forEach((menuLi) => {
          menuLi.classList.remove("show");
        }); /////// forEach //////////////

        // 1-2.모든 ab-box에서 'show' 클래스 제거z`
        abBox.forEach((abBox) => {
          abBox.classList.remove("show");
        }); /////// forEach //////////////

        // 2.해당 순번에 'show' 클래스 추가
        abBox[index].classList.add("show");
        menuLi[index].classList.add("show");
      }); /////// addEvt ///////
    });
  } /////////////////showAB///////////////////////////
  showAB();
}

//////////////// 캐릭터 사진겔러리 뿌리기 함수 //////////

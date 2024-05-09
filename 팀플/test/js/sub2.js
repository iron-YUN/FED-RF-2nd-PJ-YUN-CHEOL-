// 내함수 가져오기
import mFn from "./my_function.js";
import showTrailers from "./sub2/sub2_trailers.js";
import {gnbItems} from "./sub2/sub2_data.js";
import goSub from "./gosub.js";
// 공통파트 뿌려주기
import spreadCommon from "./sub_spread_common.js";
spreadCommon();
// 숨겨져있으면 오버시 나옴
// spreadCommon 보다 아래 위치해야함!!!!!!!!!!!!
goSub();

// gnb 뿌려주기 슬라이드 기능보다 앞에있어야함 -> 노란표시기능때문임
showGNB();
// 페이지 슬라이드 기능 불러오기
import scrollPage from "./sub2/sub2_slide.js";
scrollPage();

window.onload = function() {
  const modal = document.getElementById("modal1");
  modal.style.display = "none";
}
window.onload = function() {
  const modal = document.getElementById("modal2");
  modal.style.display = "none";
}
// 트레일러 뿌려주기
showTrailers();
// 캐릭터 뿌려주기
import showChar from "./sub2/sub2_char.js"
showChar();
// 월드 뿌려주기
import showWorld from "./sub2/sub2_world.js"
showWorld();
// 어워즈 & 크레딧 뿌려주기
import showAwardsCredits from "./sub2/sub2_aw_cre.js";
showAwardsCredits();
//////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////gnb 뿌려주기/////////////////////////////////////////////////////

function showGNB(){
  const gnb = mFn.qs('.gnb');
  // console.log("나와gnb",gnb);
  let hcode = "<ul>";
  Object.keys(gnbItems).forEach((key) => {
    hcode +=`
    <li>
      <a href="#${gnbItems[key]}">${key}</a>
    </li>
    `;
  });
  hcode +="<ul>";
  gnb.innerHTML = hcode;

  const gnbLi = mFn.qsaEl(gnb,"li");
  // console.log("나와라 li",gnbLi);
  gnbLi[0].classList.add('on');
}/////////////// showGNB함수 /////////////////

/////////////////////////////////////////////gnb 뿌려주기/////////////////////////////////////////////////////
//////////////////////////////////배경사진 어둡게///////////////////////////////////////////
const inBox = mFn.qsa(".ibx");
for (let i = 0; i < inBox.length; i++) {
  if (i === 0) { // 순번 0에 해당하는 경우
    inBox[i].style.backgroundColor = "none"; // 배경색
  } else if (i === 5 || i === 6) { // 순번 5와 6에 해당하는 경우
    inBox[i].style.backgroundColor = "rgb(0 0 0 / 20%)"; // 배경색
  }else if (i === 1) { // 순번 5와 6에 해당하는 경우
    inBox[i].style.backgroundColor = "rgb(0 0 0 / 40%)"; // 배경색
  }
   else { // 그 외의 경우
    inBox[i].style.backgroundColor = "rgb(0 0 0 / 60%)"; // 배경색
  }
}
//////////////////////////////////배경사진 어둡게///////////////////////////////////////////
///////////////////////////////////////로고 포스터 뿌려주기//////////////////////////////////////////////
function innerLogo() {
  const logo = mFn.qs(".logo");
  let hcode = `
  <a href="###">
  <img src="./img/img2/page_logo.png" alt="페이지로고" />
</a>
<a href="###">
  <img src="./img/img2/02_ts.jpg" alt="포스터" />
</a>
    `;
  logo.innerHTML = hcode;
}
innerLogo();
///////////////////////////////////////로고 포스터 뿌려주기//////////////////////////////////////////////
///////////////////////////////////////서머리 뿌려주기//////////////////////////////////////////////
function innerSum() {
  const sunTit = mFn.qs(".sum-text");
  let hcode = `
  <a href="###" class="summary-click">
  <h1 class="main-title">SUMMARY</h1>
</a>
<a href="###">
  <p class="sub-text1">
    Buzz, Woody, and their friends are back as Andy heads off to
    Cowboy Camp, leaving his toys to their own devices. Things shift
    into high gear when an obsessive toy collector name Al
    McWhiggin, owner of Al's Toy Barn, kidnaps Woody. At Al's
    apartment, Woody discovers that he is a highly valued
    collectible from a 1950s TV show called "Woody's Roundup." He
    meets the other prized toys from the show: Jessie the Cowgirl,
    Bullseye the Horse, and Stinky Pete the Prospector. Andy's toys
    mount a daring rescue mission, Buzz Lightyear meets his match,
    and Woody has to decide where he and his heart truly belong.
  </p>
</a>
    `;
  sunTit.innerHTML = hcode;
}
innerSum();
///////////////////////////////////////서머리 뿌려주기//////////////////////////////
///////////////////////////////////////// 포스터나오기 & 서머리나오기 ///////////////
const toyLogoA = mFn.qsa(".logo a");
const poster = mFn.qs(".logo a:last-child");
const toyLogoA2 = mFn.qsa(".sum-text a");
const SUMMARY1 = mFn.qs(".sum-text a:first-child");
const SUMMARY2 = mFn.qs(".sum-text a:last-child");

function showPoster() {
  toyLogoA.forEach((element) => {
    element.addEventListener("click", () => {
      poster.classList.toggle("show");
    });
  });
  toyLogoA2.forEach((element) => {
    element.addEventListener("click", () => {
      SUMMARY1.classList.toggle("show");
      SUMMARY2.classList.toggle("show");
    });
  });
}
showPoster();
//////////////////////////////////////////포스터나오기 & 서머리나오기///////////////////
  // 모달 관련 변수 선언
  const modal = mFn.qs("#modal1");
  const modalImg = mFn.qsa("#modalImg")[0];
  
  window.onload = function() {
    const modal = document.getElementById("modal1");
    modal.style.display = "none";
  }
  // 각 이미지 클릭 시 모달 팝업창 열기
  const gridImgs = mFn.qsa(".grid-img img");
  gridImgs.forEach((img, index) => {
    mFn.addEvt(img, "click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // 이미지를 클릭하면 모달이 닫히도록 설정
  mFn.addEvt(modalImg, "click", () => {
    modal.style.display = "none";
  });

  // 모달 닫기 버튼 이벤트 처리
  const closeBtn = mFn.qs(".close");
  mFn.addEvt(closeBtn, "click", () => {
    modal.style.display = "none";
  });

  // 모달 영역 외부 클릭 시 모달 닫기
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  // 페이지가 로드될 때 모달을 숨깁니다.


// 메인 JS - main.js
// import mFn from './my_function';

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);
//========================================================

//////////////// 메인 동영상 파트 클릭시 이미지 보이기 숨기기////////////////////
const banArea = qs("#ban-area");
const banImg = qs(".baner");
const banMv = qs(".ban-video");
const banMv2 = qs(".ban-video video");

banArea.addEventListener("click", () => {
  banImg.classList.toggle("on");
  banMv.classList.toggle("on");
});
// 배너영상 속도조절
banMv2.playbackRate = 0.9;
//////////////// 메인 동영상 파트 클릭시 이미지 보이기 숨기기////////////////////

////////////// 파트너쉽영상 버튼클릭 - 동영상 재생 & 이미지와 버튼 숨기기////////////
const partnerImg = qs(".ptmv-img");
const partnerBtn = qs(".ptmv-btn");
const ptmvVideo = qs(".ptmv-video");

partnerBtn.addEventListener("click", () => {
  partnerImg.classList.add("on");
  partnerBtn.classList.add("on");
  ptmvVideo.play();
});
////////////// 파트너쉽영상 버튼클릭 - 동영상 재생 & 이미지와 버튼 숨기기////////////

//////////////// 스토리영상 버튼클릭 - 동영상 재생 & 이미지와 버튼 숨기기//////////////
const storyImg = qs(".stmv-img");
const storyBtn = qs(".stmv-btn");
const stmvVideo = qs(".stmv-video");

storyBtn.addEventListener("click", () => {
  storyImg.classList.add("on");
  storyBtn.classList.add("on");
  stmvVideo.play();
});
//////////////// 스토리영상 버튼클릭 - 동영상 재생 & 이미지와 버튼 숨기기//////////////

////////////// 소개(intro)영상 버튼클릭 - 동영상 재생 & 이미지와 버튼 숨기기////////////
const introImg = qs(".itmv-img");
const introBtn = qs(".itmv-btn");
const itmvVideo = qs(".itmv-video");

introBtn.addEventListener("click", () => {
  introImg.classList.add("on");
  introBtn.classList.add("on");
  itmvVideo.play();
});
////////////// 소개(intro)영상 버튼클릭 - 동영상 재생 & 이미지와 버튼 숨기기////////////

/////////////// 로고화면의 로고 클릭시 메인페이지 열림 ////////////////////
const logoPg = qs(".mainlogo1");
const mlogo = qs(".mlogo-pg");
const mlogoBtn = qs(".logo-btn");
const mmmArea = qs("#mmm-area");

mlogoBtn.addEventListener("click", () => {
  // logoPg.classList.add('on');
  mlogo.classList.add("on");
  mmmArea.classList.add("on");
  setTimeout(() => {
    mmmArea.classList.add("off");
    logoPg.style.display = "none";
    document.querySelector("body").classList.remove("hidden");
  }, 1500);
  setTimeout(() => {
    document.querySelector("body").classList.remove("hidden");
  }, 1000);
});
/////////////// 로고화면의 로고 클릭시 메인페이지 열림 ////////////////////

////////////////////// 병모양 따라오기 ///////////////////////////
// const mover = document.querySelector(".mover");
// const myBody = document.body;

// myBody.onmousemove = (e) => {
//   mover.style.left = e.pageX + "px";
//   mover.style.top = e.clientY + "px";
//   // console.log(e.pageX, this);
// }; //////////mousemove///////////////
// myBody.addEventListener("click", () => {});
////////////////////// 병모양 따라오기 ///////////////////////////

////////////////////// 병모양 클릭 기울이기 ///////////////////////////
// myBody.addEventListener("click", () => {
//   mover.classList.toggle("on");
// });
// HTML태그 로딩후 loadFn함수 호출! ///
////////////////////// 병모양 클릭 기울이기 ///////////////////////////

//////////////////////////////버튼클릭 슬라이드///////////////////////////////////////
addEvt(window, "DOMContentLoaded", loadFn);
/****************************************** 
 함수명: loadFn
 기능: 로딩 후 버튼 이벤트 및 기능구현
 ******************************************/
const collSlide = qs("#coll-slide");
function loadFn() {
  // console.log("로딩완료!");
  // 이동버튼 대상 : .abtn
  const abtn = qsa(".abtn");
  //변경대상 : #coll-slide
  // console.log(abtn,collSlide);
  
  //슬라이드 순번 전역변수
  let snum = 0;

  for (let x of abtn) {
    x.onclick = goSlide;
  } ///////////////for of ///////////////

  //광클 금지변수
  // let prot = 0;
  let prot = false;
  /* ****************************************
    함수명 : goSlide
    기능 : 슬라이드 이동
    *****************************************/

  function goSlide() {
    // 광클금지 설정하기
    // 클릭신호를 막아서 못들어오게 하고
    // 일정시간후 다시 열어준다!
    if (prot) return; // 돌아가!(함수나감!)
    prot = true; // 잠금! (뒤의호출막기)
    setTimeout(() => {
      prot = false; // 0.6초후 해제!
    }, 600);
    /////////////////////////////////////////

    //  1.오른쪽 버튼인 .ab2인가?
    let isRbtn = this.classList.contains("ab2");
    //   [classList 객체의 contains()메서드]
    // 해당요소의 특정 클래스 인지 여부를 리턴함 true,false
    // 해당클래스가 있으면 true ,없으면 false

    //호출확인
    // console.log('나 슬라이드야~!!!!!!!!!',this,isRbtn);
    // this 는 호출한 버튼 자신

    // 개별박스 li가로크기 계산
    let listW = collSlide.querySelectorAll("li")[0].offsetWidth;

    // 2. 버튼별 분기하기
    // 2-1.오른쪽 버튼일 경우 ///
    if (isRbtn) {
      // (1) 먼저 왼쪽으로 이동하기
      collSlide.style.left = `calc(${-listW}px - 2rem)`;
      collSlide.style.transition = ".6s ease-in-out";
      // (2) 이동하는 시간  0.6초간 기다림
      setTimeout(() => {
        // (2-1) 맨앞 li 맨뒤로이동
        collSlide.appendChild(collSlide.querySelectorAll("li")[0]);
        // 슬라이드 left 값이 -100% 이므로
        // (2-2) left값을 0으로 변경
        collSlide.style.left = "0";
        // (2-3) left 트랜지션 없애기
        collSlide.style.transition = "none";
      }, 600);

      //맨 앞 li 맨뒤로 이동하기
      // appendChild(요소)
      // -> 원래 뒤에 요소추가기능임
      // -> 기존있는 요소를 선택시 맨뒤로 이동함
      // 맨앞요소를 선택하여 맨뒤로 보냄
    } /////// if ///////////

    // 2-2.왼쪽쪽 버튼일 경우 ///
    else {
      // 하위 li수집
      let list = collSlide.querySelectorAll("li");
      // (1) 맨뒤 요소 li 맨앞으로 이동하기
      // 놈놈놈 시리즈!!!!
      // insertBefore(넣을놈,넣을놈전놈)
      // insertBefore(맨뒤 li,맨앞li)
      collSlide.insertBefore(list[list.length - 1], list[0]);

      // (2) left 값을 -100% 로 변경하여
      // 맨뒤 li가 맨앞으로 온것을 숨긴다.
      // 왼쪽에서 슬라이드 들어올 준비!!
      collSlide.style.left = `calc(${-listW}px - 2rem)`;
      // 트랜지션이 한번버튼클릭수 생기므로 없애줌
      collSlide.style.transition = "none";

      // 같은 left값을 변경하기 때문에
      //코드처리구역을 분리하여준다
      // 이때 사용되는 메서드는 setTimeout
      // 시간차는 어쩌죠?
      // 0을 줘도 코드를 분리하여 처리하므로
      // 동시처리가 아니고 비동기처리하기 때문에
      // 코드가 잘 작동한다.

      setTimeout(() => {
        // (3) left 값을 0으로 트랜지션 하여 들어옴
        collSlide.style.left = "0";
        collSlide.style.transition = ".6s ease-in-out";
      }, 0);
    } //////// else //////////
  } /////////////// goSlide /////////////////////
  ///////////////////////////////////////////////
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////

/////////////////////// 스크롤 이용한 상단영역 색 바뀌기 완성*****////////////////////////////////

const topAreaBgc = document.querySelector('.top-area-bgc');
const scAct = document.querySelectorAll('.scroll-area');

window.addEventListener('scroll', () => {
  scAct.forEach((ele, idx) => {
    const scRect = ele.getBoundingClientRect();
    // console.log(`영역 ${idx}의 top: ${scRect.top}, bottom: ${scRect.bottom}`);
    
    // 각각의 요소가 스크린의 상단을 지날 때
    if(scRect.top > 0){
      if (idx === 0) {
        topAreaBgc.classList.remove('on1');
        topAreaBgc.classList.remove('on2');
      }////////////////  if
    }
    if (scRect.top <= 0 && scRect.bottom >= 0) {
      // .partnerships-area
      if (idx === 0) {
        topAreaBgc.classList.add('on1');
        topAreaBgc.classList.remove('on2');
      }////////////////  if
      // .story-area
      else if (idx === 1) {
        topAreaBgc.classList.remove('on1');
        topAreaBgc.classList.add('on2');
      }////////////////  else if
      // .experience-area
      else  {
        topAreaBgc.classList.remove('on1');
        topAreaBgc.classList.remove('on2'); // 이건 빼도 작동을함 ... 왜???
      }////////////////  else 
    }////////////////   if
 
  
  });////////////forEach///////////////
});////////////window///////////////



////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
const collSlideItems = [
  ////////제품이름////////////
  // "SHERRY OAK 12 YEARS OLD",
  // "SHERRY OAK 18 YEARS OLD, 2023 RELEASE",
  // "SHERRY OAK 25 YEARS OLD, 2023 RELEASE",
  // "SHERRY OAK 30 YEARS OLD, 2023 RELEASE",
  // "DOUBLE CASK 12 YEARS OLD",
  // "DOUBLE CASK 15 YEARS OLD",
  // "DOUBLE CASK 18 YEARS OLD, 2023 RELEASE",
  // "DOUBLE CASK 30 YEARS OLD, 2023 RELEASE",
  ///////////////배열안의배열////////
  [1,"SHERRY OAK 12 YEARS OLD"],
  [2,"SHERRY OAK 18 YEARS OLD, 2023 RELEASE"],
  [3,"SHERRY OAK 25 YEARS OLD, 2023 RELEASE"],
  [4,"SHERRY OAK 30 YEARS OLD, 2023 RELEASE"],
  [5,"DOUBLE CASK 12 YEARS OLD"],
  [6,"DOUBLE CASK 15 YEARS OLD"],
  [7,"DOUBLE CASK 18 YEARS OLD, 2023 RELEASE"],
  [8,"DOUBLE CASK 30 YEARS OLD, 2023 RELEASE"],
  //////////////////객체///////////
  // {
  //   imgSrc: "../01.자료수집/main_img/main_page_bottle/coll_main01.jpg",
  //   spanText: "SHERRY OAK 12 YEARS OLD"
  // },
  // {
  //   imgSrc: "../01.자료수집/main_img/main_page_bottle/coll_main02.jpg",
  //   spanText: "SHERRY OAK 18 YEARS OLD, 2023 RELEASE"
  // },
  // {
  //   imgSrc: "../01.자료수집/main_img/main_page_bottle/coll_main03.jpg",
  //   spanText: "SHERRY OAK 25 YEARS OLD, 2023 RELEASE"
  // },
  // {
  //   imgSrc: "../01.자료수집/main_img/main_page_bottle/coll_main04.jpg",
  //   spanText: "SHERRY OAK 30 YEARS OLD, 2023 RELEASE"
  // },
  // {
  //   imgSrc: "../01.자료수집/main_img/main_page_bottle/coll_main05.jpg",
  //   spanText: "DOUBLE CASK 12 YEARS OLD"
  // },
  // {
  //   imgSrc: "../01.자료수집/main_img/main_page_bottle/coll_main06.jpg",
  //   spanText: "DOUBLE CASK 15 YEARS OLD"
  // },
  // {
  //   imgSrc: "../01.자료수집/main_img/main_page_bottle/coll_main07.jpg",
  //   spanText: "DOUBLE CASK 18 YEARS OLD, 2023 RELEASE"
  // },
  // {
  //   imgSrc: "../01.자료수집/main_img/main_page_bottle/coll_main08.jpg",
  //   spanText: "DOUBLE CASK 30 YEARS OLD, 2023 RELEASE"
  // },
];////////////////// collSlideItems 배열 ///////////////////////
    collSlideItems.forEach(v => {
      collSlide.innerHTML +=`
  <li>
    <a href="javascript:;" onclick="js();">
      <div class="coll-img">
        <img
          src="../01.자료수집/main_img/main_page_bottle/coll_main0${v[0]}.jpg"
          alt=""
        />
      </div>
      <div class="coll-span">
        ${v[1]}</span>
      </div>
    </a>
  </li>
  `;
    });
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////동일 버튼요소 뿌려주기////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
const buttonBtn = qsa('.button-btn');
buttonBtn.forEach(button => {
    button.innerHTML = `
        <svg>
            <path
                fill="currentColor"
                d="M24.887 15.5 10 6.196v18.608l4.667-2.917-1-1.733L12 21.196V9.804l9.113 5.696-5.75 3.594 1.001 1.733 8.523-5.327Z"
            ></path>
        </svg>
    `;
});
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

////////////////////////////////mat정보 배열로담아서 뿌리기//////////////////////////
//////////////////////////////////////////////////////////////////////////////////
const Mat = qsa('.mat');
const MatItems = [
  [2,"ALUMINUM",`Aluminium recovered from the Bentley Motors manufacturing
  process has also been incorporated. The sculptural
  foundation and bodywork of a Bentley motorcar features
  aluminium for its remarkable strength, versatility and
  stunning visual impact. The Macallan Horizon’s glass vessel
  is enveloped by an aluminium ribbon, precision engineered to
  Bentley’s exacting standards, in homage to this key material
  used in the engineering of a Bentley motorcar.`],
  [4,"GLASS",`Glass is a material intrinsic to both The Macallan and
  Bentley. A foundational material to both brands, The
  Macallan Horizon is presented in a highly innovative and
  unique bespoke glass vessel designed to be displayed
  horizontally, featuring a unique 180-degree twist detail.`],
 
  [1,"COPPER",`A material fundamental to our single malt whisky, The
  Macallan Horizon features a copper frame precision
  engineered from recycled copper, which includes copper from
  the disused Curiously Small Stills, which were located
  within our former Distillery. The Macallan’s Curiously Small
  Copper Stills contribute a rich and fruity character to our
  new make spirit.`],
  [3,"WOOD",`A material integral to both brands, The Macallan Horizon
  features an inlay of oak on the closure, crafted from one of
  the six casks used in the maturation of this whisky. The
  sculpture is finished with Bentley’s Crown Cut Walnut
  veneer, a specification meticulously developed for Bentley
  vehicles.`],
  [6,"THE WISKY",`The final component is the very special single malt being
  created for The Macallan Horizon. The Macallan Master Whisky
  Maker Kirsteen Campbell is developing the flavour profile
  for the whisky following a visit to Bentley Motors in Crewe,
  where she observed first hand their shared passion for
  creativity, craftsmanship and innovation. The result is a
  sophisticated and bold single malt whisky, crafted from six
  individual casks to capture the essence of a Bentley
  motorcar through taste, texture and natural colour.`],
  [5,"LEATHER",`Ethically sourced leather has been used to ornately finish
  and protect The Macallan Horizon. Chosen carefully and
  crafted with precision and pride, leather hides contribute
  enormously to the sense of comfort and refinement in every
  Bentley. At The Macallan, we believe in craftsmanship and
  have the greatest respect for the materials used in
  everything we do. To protect the vessel, The Macallan
  Horizon’s sculpture is lined with the finest low carbon
  leather, expertly crafted, in a chestnut colourway.`],
];
Mat.forEach((mat, index) => {
  const v = MatItems[index];
  mat.innerHTML += `
    <div class="mat-name">
      <h2 class="main-tit">${v[1]}</h2>
    </div>
    <div class="mat-sh">
      <div class="mat-img">
        <img src="../01.자료수집/main_img/THE MATERIALS/met${v[0]}.jpg" alt="${v[1]}" />
      </div>
      <div class="mat-info">
        <p class="main-text2">${v[2]}</p>
      </div>
    </div>
  `;
});
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const btnMenu = qs('.btnMenu');
const closeMenu = qs('.menu-close');
const gnb = qs('.gnb');
btnMenu.addEventListener('click', function(){
  gnb.classList.add('active');
  document.querySelector("body").classList.add("hidden")
});
closeMenu.addEventListener('click', function(){
  gnb.classList.remove('active');
  document.querySelector("body").classList.remove("hidden")
});


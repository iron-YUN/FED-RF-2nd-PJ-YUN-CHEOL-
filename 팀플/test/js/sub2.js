// 내함수 가져오기
import mFn from "./my_function.js";
import { creditsItems, awardsItems } from "./sub2_data.js";


//////////////////////////////////////////////////////////////////////////////////////////////////

scrollPage();
function scrollPage() {
  // 1.변수 설정하기 ////////////
  let stopSts = false;
  let pgNum = 0; // 1-1. 페이지변수
  let stsWheel = false; // 1-2. 휠 상태변수 (true 는 막기/ false는 통과)
  const elePage = mFn.qsa(".section"); // 1-3. .section 클래스요소
  const totalCnt = elePage.length; // 1-4. 전체페이지수
  console.log("대상:", elePage, totalCnt, "개");

  // 휠이벤트가 발생하면 wheelFn을 호출해라
  mFn.addEvt(window, "wheel", wheelFn, { passive: false });

  // [새로고침시 맨위로 강제 이동하기 설정]
  setTimeout(() => {
    window.scroll(0, 0);
  }, 500);

  const contBox = mFn.qs(".content-box");
  mFn.addEvt(contBox, "wheel", (e) => {
    // 막기상태가 true일때만 버블링막기
    if (stopSts) e.stopPropagation();

    // 휠중일때 contbox 막기
    if (e.type === "wheel" && e.target === contBox) {
      e.preventDefault();
    }
    // let scTop = e.currentTarget.scrollTop;
    // console.log(scTop);
    const scrollPercentage = Math.floor(getScrollPercentage(contBox));
    console.log(scrollPercentage + "%");

    if (scrollPercentage == 0 || scrollPercentage == 100) {
      stopSts = false;
    } else {
      stopSts = true;
    }

    contBox.addEventListener("mouseenter", () => {
      stopSts = true;
    });
    contBox.addEventListener("mouseleave", () => {
      stopSts = false;
    });

    console.log(stopSts);
  });

  // // 3. 함수 구현하기 ////////////////
  function wheelFn(e) {
    e.preventDefault();

    if (stopSts) return;

    // 2. 광휠금지장치 ////////
    if (stsWheel) {
      return; //돌아가
    }
    stsWheel = true; //잠금!!
    setTimeout(() => {
      stsWheel = false;
    }, 1000);
    //////////////////////////

    //  3. 휠방향 알아내기 ///
    let delta = e.wheelDelta;
    // 휠델타는 이벤트 객체에서 리턴해주는
    // 방향,이동거리 등의 정보값이다.
    console.log("델타값:", delta);
    //  -> 마이너스가 아랫방향임!

    // 4. 방향별 분기하기 ////
    if (delta < 0) {
      // 아랫페이지로 가야하니까 페이지번호증가
      pgNum++;
      //  한계수체크 (끝번호고정)
      if (pgNum === totalCnt) {
        pgNum = totalCnt - 1;
        //마지막페이지순번은
        // 전체개수 -1
      } //////if ///////
    } ///// if /////
    else {
      pgNum--;
      // 한계수체크 (0보다 작으면 0고정)
      if (pgNum < 0) {
        pgNum = 0;
      } ///// if ////////
    } ///// else //////
    console.log("pgNum:", pgNum);

    if (pgNum === 6) stopSts = true;

    // 5. 페이지 이동하기 ///
    // 5-1.이동할 위치 알아내기
    // -> .page 요소중 해당 순번페이지위치
    let pos = elePage[pgNum].offsetTop;
    //  offsetTop 은 최상단에서부터 거리
    console.log("이동할위치:", pos);

    // 5-2. 페이지 스크롤 위치 이동하기
    // scrollTo(0,y축이동값)
    window.scrollTo(0, pos);

    // 6.해당메뉴 순번 on넣기 / 나머지on빼기
    // chgMenu(pgNum);
  } /////////// wheelFn 함수 ////////////////
  ///////////////////////////////////////////
  /**********************************
   메뉴클릭시 이벤트 처리하기
  ********************************* */
  //  이벤트 대상 : .gnb a
  const gnb = document.querySelector(".gnb");
  const gnbA = document.querySelectorAll(".gnb a");
  //  이벤트 대상 : .indic a
  // const indic = document.querySelectorAll('.indic a');
  console.log("gnbA", gnbA);
  // 이벤트 설정하기 + 기능구현하기
  gnbA.forEach((ele, idx) => {
    ele.onclick = () => {
      // 메뉴 변경함수 호출
      chgMenu(idx);
    }; //////click함수 ////
  }); //////// forEach ////////////////

  // [메뉴 변경함수 : .gnb + .indic]
  function chgMenu(idx) {
    // idx - 순번
    // 클릭시 자신의 순번찍기
    console.log("순번:", idx);
    // 1.전역페이지변수에 순번 업데이트
    pgNum = idx;
    // 2.전체메뉴에 on빼기
    gnbA.forEach((ele, seq) => {
      // ele - a요소 / seq - 순번
      if (idx === seq) {
        //선택순번과 같으면 on넣기
        ele.parentElement.classList.add("on");
        // indic[seq].parentElement.classList.add('on');
      } /////if //////
      else {
        ele.parentElement.classList.remove("on");
        // indic[seq].parentElement.classList.remove('on');
      } ////// else///////
    }); //////forEach/////////
  } ///////////chgMenu ///////////
  ///////////////////////////////////

  function getScrollPercentage(element) {
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    const scrollableHeight = scrollHeight - clientHeight;
    const scrollPercentage = (scrollTop / scrollableHeight) * 100;

    return scrollPercentage;
  }
}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////크레딧뿌려주기///////////////////////////////////////////////////////

innerCredits();
function innerCredits() {
  const credits = mFn.qs(".credits-text");
  let hcode = ``;
  Object.keys(creditsItems).forEach((key) => {
    if (key !== "CAST") {
      hcode += `<p><strong>${key}</strong><br>${creditsItems[key]}<br></p>`;
    } /////////// if ///////////////////
    else {
      hcode += `<p><strong>${key}</strong><br></p>`;
    } //////////// else ///////////////
  });
  credits.innerHTML = hcode;
} ////////////////////////////////////크레딧뿌려주기/////////////////////////////////////////

///////////////////////////////어워즈 뿌려주기//////////////////////////////////////////////
innerAwards();
function innerAwards() {
  const awards = mFn.qs(".awards-text");
  let hcode = ``;
  Object.keys(awardsItems).forEach((key) => {
    hcode += `<p><strong>${key}</strong><br>`;
    awardsItems[key].forEach((item) => {
      hcode += `${item ? item + "<br>" : "<br>"}`;
    });
    hcode += `</p>`;
  });
  awards.innerHTML = hcode;
} /////////////////////////////////////어워즈 뿌려주기////////////////////////////////////////

//////////////////////////////////배경사진 어둡게///////////////////////////////////////////
const inBox = mFn.qsa(".ibx");
for (let i = 1; i < inBox.length; i++) {
  inBox[i].style.backgroundColor = "#00000098";
}
//////////////////////////////////배경사진 어둡게///////////////////////////////////////////

///////////////////////////////////////캐릭터뿌려주기//////////////////////////////////////////////

const charItems = [
  "DESIGN",
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

function innerChar() {
  const menu1 = mFn.qs(".menu1");
  let hcode = "";
  charItems.forEach((i) => {
    hcode += `
    <ul>
        <li>
        <a href="###">${i}</a>
        </li>
    </ul>
    `;
  });
  menu1.innerHTML = hcode;
}
innerChar();

///////////////////////////////////////캐릭터뿌려주기//////////////////////////////////////////////
///////////////////////////////////////월드 뿌려주기//////////////////////////////////////////////
///////////////////////////////////////월드 뿌려주기//////////////////////////////////////////////
///////////////////////////////////////로고 포스터 뿌려주기//////////////////////////////////////////////
function innerLogo() {
  const logo = mFn.qs(".logo");
  let hcode = `
  <a href="###">
  <img src="./IMG/img2/page_logo.png" alt="페이지로고" />
</a>
<a href="###">
  <img src="./IMG/img2/02_ts.jpg" alt="포스터" />
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
  <a href="###">
  <h1 class="main-tit">SUMMARY</h1>
</a>
<a href="###">
  <p class="main-text">
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
///////////////////////////////////////서머리 뿌려주기//////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
// 로고 나오기
// 대상 : .logo a:last-child
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
//////////////////////////////////////////////////////////////////////////////////////////////////

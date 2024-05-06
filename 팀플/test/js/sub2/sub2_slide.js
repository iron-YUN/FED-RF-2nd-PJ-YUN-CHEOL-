import mFn from "../my_function.js";
import { startSS, setScrollPos, SmoothScroll } from "./smoothScroll23.js";

export default function scrollPage() {
  //  부드러운스크롤 to content-box
  // 스크롤 5~6페이지 순번 이동시 서로간의 콘텐트박스 위치값 공유로 각자 잡아주었다
  // -> 그런데도 공유가 되고있다

  // 2. 이거 지워도될듯 - 의미없음
  // function applySmoothScrollToContentBox1() {
  //   const contentBoxes = document.querySelectorAll(".content-box")[0];
  //   new SmoothScroll(contentBoxes, 60, 30);
  // } ///////////////////////////////
  // applySmoothScrollToContentBox1();
  // function applySmoothScrollToContentBox2() {
  //   const contentBoxes = document.querySelectorAll(".content-box")[1];
  //   new SmoothScroll(contentBoxes, 60, 30);
  // } ///////////////////////////////
  // applySmoothScrollToContentBox2();


  // 1. 못고치면 스무스스크롤 자체제거
  //   function applySmoothScrollToContentBox() {
  //     // 스크롤 5~6페이지 순번 이동시 서로간의 콘텐트박스 위치값 공유로 각자 잡아주었다
  //     const contentBoxes = document.querySelectorAll('.content-box');
  //     contentBoxes.forEach(contentBox => {
  //         new SmoothScroll(contentBox, 60, 30);
  //     });
  // }///////////////////////////////
  // applySmoothScrollToContentBox();

  // 1.변수 설정하기 ////////////
  let stopSts = false;
  let pgNum = 0; // 1-1. 페이지변수
  let stsWheel = false; // 1-2. 휠 상태변수 (true 는 막기/ false는 통과)
  const elePage = mFn.qsa(".section"); // 1-3. .section 클래스요소
  const totalCnt = elePage.length; // 1-4. 전체페이지수
  // console.log("대상:", elePage, totalCnt, "개");

  // 휠이벤트가 발생하면 wheelFn을 호출해라
  mFn.addEvt(window, "wheel", wheelFn, { passive: false });

  // [새로고침시 맨위로 강제 이동하기 설정]http://127.0.0.1:5501/%ED%8C%80%ED%94%8C/test/sub2.html###
  setTimeout(() => {
    window.scroll(0, 0);
  }, 500);

  const contBox = mFn.qsa(".content-box");
  // console.log(contBox);

  contBox.forEach((ele) => {
    mFn.addEvt(ele, "wheel", setContBoxWheelEvent);
  });

  function setContBoxWheelEvent(e) {
    // 막기상태가 true일때만 버블링막기
    if (stopSts) e.stopPropagation();
    // console.log(e.currentTarget);
    // 휠중일때 contbox 막기
    // if (e.type === "wheel" && e.target === contBox) {
    //   e.preventDefault();
    // }
    // let scTop = e.currentTarget.scrollTop;
    // console.log(scTop);

    // contBox.addEventListener("mouseenter", () => {
    //   stopSts = true;
    // });
    // contBox.addEventListener("mouseleave", () => {
    //   stopSts = false;
    // });

    const scrollPercentage = Math.floor(getScrollPercentage(e.currentTarget));

    console.log(scrollPercentage + "%");
    console.log(e.deltaY);
    if (pgNum === 6 || pgNum === 5) {
      // 0이면서 윗방향일때
      if (scrollPercentage == 0 && e.deltaY < 0) {
        stopSts = false;
      }
      // 100이고 아랫방향일때
      else if (scrollPercentage == 100 && e.deltaY > 0) {
        stopSts = false;
      }
      // 기타일 경우
      else {
        stopSts = true;
      }
    }
    console.log(stopSts);
  } /////// setContBoxWheelEvent ///////////////////

  // // 3. 함수 구현하기 ////////////////
  function wheelFn(e) {
    // e.preventDefault();

    // 내가짜본코드..........의미가있나?ㅋㅋㅋㅋㅋㅋ 아래꺼랑 비교해보자
    // setTimeout(() => {
    //   stopSts = true;
    //   setTimeout(() => {
    //     stopSts = false;
    //   },0);
    // }, 500);


    // setTimeout 설정으로 페이지가 움직이는 동안에도
    // content-box 의 스크롤기능 막아보기 !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    stopSts = false;
    setTimeout(() => {
      stopSts = true;
    }, 500);

    console.log("잠금여부:", stopSts);

    if (stopSts) return;

    // 2. 광휠금지장치 ////////
    if (stsWheel) {
      return; //돌아가
    }
    stsWheel = true; //잠금!!
    setTimeout(() => {
      stsWheel = false;
    }, 500);
    //////////////////////////

    //  3. 휠방향 알아내기 ///
    let delta = e.wheelDelta;
    // 휠델타는 이벤트 객체에서 리턴해주는
    // 방향,이동거리 등의 정보값이다.
    // console.log("델타값:", delta);
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

    // else if(pgNum){}
    else {
      pgNum--;
      // 한계수체크 (0보다 작으면 0고정)
      if (pgNum < 0) {
        pgNum = 0;
      } ///// if ////////
    } ///// else //////
    console.log("페이지넘버:", pgNum);

    // 5. 페이지 이동하기 ///
    // 5-1.이동할 위치 알아내기
    // -> .page 요소중 해당 순번페이지위치
    let pos = elePage[pgNum].offsetTop;
    //  offsetTop 은 최상단에서부터 거리
    // console.log("이동할위치:", pos);

    // 5-2. 페이지 스크롤 위치 이동하기
    // scrollTo(0,y축이동값)
    window.scrollTo(0, pos);

    ////////////////////////////////
    // 부드러운 스크롤 적용시 상태값 튕김현상으로 0고정 일시제거
    ////////////////////////////////
    if (pgNum != 5 || pgNum != 6) {
        contBox.forEach((ele) => {
            ele.scrollTo(0, 0);
          });
        }
    ////////////////////////////////
    ////////////////////////////////

    // 6.해당메뉴 순번 on넣기 / 나머지on빼기
    chgMenu(pgNum);
  } /////////// wheelFn 함수 ////////////////
  ///////////////////////////////////////////
  /**********************************
     메뉴클릭시 이벤트 처리하기
    ********************************* */
  //  이벤트 대상 : .gnb a
  const gnb = document.querySelector(".gnb");
  const gnbA = document.querySelectorAll(".gnb a");
  // 이벤트 설정하기 + 기능구현하기
  gnbA.forEach((ele, idx) => {
    ele.onclick = () => {
      // 메뉴 변경함수 호출
      chgMenu(idx);
      let txt = ele.innerText;
      console.log(ele.innerText);
      if (txt !== "AWARDS" || txt !== "CREDITS") {
        contBox.forEach((ele) => {
          ele.scrollTo(0, 0);
        });
      }
    }; //////click함수 ////
  }); //////// forEach ////////////////

  // [메뉴 변경함수 : .gnb + .indic]
  function chgMenu(idx) {
    // idx - 순번
    // 클릭시 자신의 순번찍기
    // console.log("순번:", idx);
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

// 3번의 이유로 스무스스크롤 적용해보았지만 다른 오류가 생김 (3번오류는 거의없어짐)
// 오류해결해야함
// 1.위치값공유 오류 = 스무스 스크롤 적용다음부터임
// 2.콘텐트박스의 퍼센트가 98 또는 99로 멈춰서 아랫방향이 안됨
// 3. 페이지가 넘어가면서 true로 잠기는 현상있음 -> 내가 settimeout 걸어봤는데 의미없음
// 자동스크롤 JS - auto_scroll.js

/********************************************** 
    [ 자동스크롤 기능정의 ]
    1. 스크롤바가 없는 상태에서 
    또는 스크롤기능을 막아놓은 상태에서
    마우스 휠 작동시
    아래와 같이 기능구현됨
    (1) 휠 내림 : 다음페이지로 이동
    (2) 휠 올림 : 이전페이지로 이동

    2. 스크롤바 첫페이지와 끝페이지에서 이동안함

    [ 자동스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 발생!
    (이전 이벤트명: mousewheel / DOMMouseScroll(파이어폭스))
    (주의 : wheel 이벤트는 scroll이벤트와는 다름!)
    마우스의 바퀴를 돌릴때 발생함!
**********************************************/

// 1.전역변수 설정하기 ////////////
// 1-1. 페이지변수
let pgNum = 0;
// 1-2. 휠 상태변수 (true 는 막기/ false는 통과)
let stsWheel = false;
// 1-3. .page 클래스요소
const elePage = document.querySelectorAll(".page");
// 1-4. 전체페이지수
const totalCnt = elePage.length;
console.log("대상:", elePage, totalCnt, "개");

// 휠이벤트설정
// 휠이벤트가 발생하면 wheelFn을 호출해라
// window.addEventListener('wheel',wheelFn);
window.addEventListener("wheel", wheelFn, { passive: false });

//  [새로고침시 스크롤바 위치 인덱싱이 되므로
// 맨위로 강제 이동하기 설정]
setTimeout(() => {
    window.scroll(0,0);
}, 500);

// // 3. 함수 구현하기 ////////////////
function wheelFn(e) {
  // 1. 우리는 휠 기본기능을 막고
  // 자동으로 스크롤을 하나씩 되게 할 것이다.
  // -> passive:flase설정해야함!
  // 왜? window니까!!!
  e.preventDefault();

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
  console.log("델타값:", delta);
  //  -> 마이너스가 아랫방향임!

  // 4. 방향별 분기하기 ////
  if (delta < 0) {
    // 아랫페이지로 가야하니까 페이지번호증가
    pgNum++;
    //  한계수체크 (끝번호고정)
    if(pgNum===totalCnt) {
        pgNum = totalCnt-1;
        //마지막페이지순번은
        // 전체개수 -1
    }//////if ///////
  } ///// if /////
  else {
    pgNum--;
    // 한계수체크 (0보다 작으면 0고정)
    if(pgNum<0){
        pgNum = 0;
    }///// if ////////
  } ///// else //////
  console.log("pgNum:", pgNum);

    // 5. 페이지 이동하기 ///
    // 5-1.이동할 위치 알아내기
    // -> .page 요소중 해당 순번페이지위치
    let pos = elePage[pgNum].offsetTop;
    //  offsetTop 은 최상단에서부터 거리
    console.log('이동할위치:',pos);

    // 5-2. 페이지 스크롤 위치 이동하기
    // scrollTo(0,y축이동값)
    window.scrollTo(0,pos);

      // 6.해당메뉴 순번 on넣기 / 나머지on빼기
      chgMenu(pgNum);
} /////////// wheelFn 함수 ////////////////
///////////////////////////////////////////

/**********************************
 메뉴클릭시 이벤트 처리하기
********************************* */
//  이벤트 대상 : .gnb a
const gnb = document.querySelectorAll('.gnb a');
//  이벤트 대상 : .indic a
const indic = document.querySelectorAll('.indic a');
console.log('gnb',gnb,'indic',indic);
// 이벤트 설정하기 + 기능구현하기
gnb.forEach((ele,idx)=>{
    ele.onclick = ()=>{
      // 메뉴 변경함수 호출
      chgMenu(idx);
    };//////click함수 ////
}); //////// forEach ////////////////
indic.forEach((ele,idx)=>{
    ele.onclick = ()=>{
      // 메뉴 변경함수 호출
      chgMenu(idx);
    };//////click함수 ////
}); //////// forEach ////////////////


// [메뉴 변경함수 : .gnb + .indic]
function chgMenu(idx){
  // idx - 순번

   // 클릭시 자신의 순번찍기
   console.log('순번:',idx); 
   // 1.전역페이지변수에 순번 업데이트
   pgNum = idx;
   // 2.전체메뉴에 on빼기
   gnb.forEach((ele,seq)=>{
    // ele - a요소 / seq - 순번
    if(idx === seq){ //선택순번과 같으면 on넣기
      ele.parentElement.classList.add('on');
      indic[seq].parentElement.classList.add('on');
    }/////if //////
    else{
      ele.parentElement.classList.remove('on');
      indic[seq].parentElement.classList.remove('on');
    }////// else///////
   });//////forEach/////////

  //  for(let x of gnb){
  //      x.parentElement.classList.remove('on');
  //  }///// for of /////

   // 3.해당순번에 on넣기
  //  ele.parentElement.classList.add('on');
   // parentElement는 선택요소의 부모요소다!



}///////////chgMenu ///////////
///////////////////////////////////

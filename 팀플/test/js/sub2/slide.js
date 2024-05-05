// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //
import mFn from "../my_function.js";

export default function slideTrailersFn() {
  // 이동버튼 대상 : .abtn
  const abtn = mFn.qsa(".abtn");
  //변경대상 : #slide
  const slide = mFn.qs("#slide");

  // 2. 버튼을 모두 이벤트 설정하기
  for (let x of abtn) {
    x.onclick = goSlide;
  } ///////////////for of ///////////////
  //광클 금지변수
  let prot = false;

  function goSlide() { 
    if (prot) return; // 돌아가!(함수나감!)
    prot = true; // 잠금! (뒤의호출막기)
    setTimeout(() => {
      prot = false; // 0.6초후 해제!
    }, 600);
    /////////////////////////////////////////
    //  1.오른쪽 버튼인 .ab2인가?
    let isRbtn = this.classList.contains("ab2");
    console.log("나는 this",this);
    console.log("나는 오른쪽 버튼이냐?",isRbtn);
    // sts값이 true냐?
    // (true)맞으면 버튼을 클릭한 것이므로 this키워드에 의한 클레스 .ab2 존재여부를 물어라
    // false냐? 맞으면 무조건 true값을 할당해라!
    let listW = slide.querySelectorAll(".trailer")[0].offsetWidth;
    // console.log("나는 w값!!",listW);
    
    // 2. 버튼 분기
    // 2-1.오른쪽 버튼
    if (isRbtn) {
      // (1) 먼저 왼쪽으로 이동하기
      slide.style.left = `${-listW}px`;
      console.log("나는 뭐임?",slide.style.left);

      /////////////////////////////////////////////////////
      // slide.style.left 를 하려면 슬라이드 박스에
      // 포지션 지정이 되어있어야함~~~!!!!!!!!!!시발~~~~~~
      /////////////////////////////////////////////////////


      slide.style.transition = ".6s ease-in-out";
      // (2) 이동하는 시간  0.6초간 기다림
      setTimeout(() => {
        // (2-1) 맨앞 li 맨뒤로이동
        slide.appendChild(slide.querySelectorAll(".trailer")[0]);
        // 슬라이드 left 값이 -100% 이므로
        // (2-2) left값을 0으로 변경
        slide.style.left = "0";
        // (2-3) left 트랜지션 없애기
        slide.style.transition = "none";
      }, 600);
      // appendChild(요소)
      // -> 기존있는 요소를 선택시 맨뒤로 이동함
      // 맨앞요소를 선택하여 맨뒤로 보냄
    } /////// if ///////////
    // 2-2.왼쪽 버튼
    else {
      let list = slide.querySelectorAll(".trailer");
      // (1) 맨뒤 요소 맨앞으로 이동하기
      // insertBefore(넣을놈,넣을놈전놈)
      // insertBefore(맨뒤 li,맨앞li)
      slide.insertBefore(list[list.length - 1], list[0]);
      // (2) left 값을 -100% 로 변경하여
      // 맨뒤 li가 맨앞으로 온것을 숨긴다.
      // 왼쪽에서 슬라이드 들어올 준비!!
      slide.style.left = `${-listW}px`;
      // 트랜지션이 한번버튼클릭수 생기므로 없애줌
      slide.style.transition = "none";

      setTimeout(() => {
        // (3) left 값을 0으로 트랜지션 하여 들어옴
        slide.style.left = "0";
        slide.style.transition = ".6s ease-in-out";
      }, 0);
    } //////// else //////////
  } /////////////// goSlide /////////////////////
  ///////////////////////////////////////////////





} //////////////// slideTrailersFn 함수 ///////////////
/////////////////////////////////////////////

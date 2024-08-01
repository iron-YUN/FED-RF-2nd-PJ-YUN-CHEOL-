import mFn from "../my_function.js";

const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);
// HTML태그 로딩후 loadFn함수 호출! ///

export default function Sub1SlideFn() {
  // console.log("로딩완료!");
  // 이동 버튼 대상 : .abtn
  const abtn = mFn.qsa(".s1abtn");
  // 변경 대상 : #slide
  const slide = mFn.qs(".S1-slide");
  //console.log(abtn,slide);
  const chslide = mFn.qs(".S1-slide");
  console.log(chslide);

  // 블릿버튼 : .indic
  let indic = document.querySelector(".S1indic");
  //// 초기 셋팅하기
  if(chslide){
    for (let i = 0; i < 18; i++) {
      // 슬라이드 넣기
      chslide.innerHTML += `
      <li data-seq="${i}">
        <img src=${process.env.PUBLIC_URL}/images/img1/ched${i+1}.jpg alt="slide">
      </li>
      `;
  
      // 블릿 넣기
      indic.innerHTML += `
      <li ${i===0?'class="on"':''}>
      <img src=${process.env.PUBLIC_URL}/images/img1/dot1.png alt="흰색">
      <img src=${process.env.PUBLIC_URL}/images/img1/dot2.png alt="회색">
      </li>
      `;
    } ////////// for문 ///////
  }

  // 블릿의 li까지 수집! indic 변수
  indic = document.querySelectorAll('.S1indic li');

  // 2. 버튼을 모두 이벤트 설정하기
  for (let x of abtn) {
    console.log(x);
    x.onclick = function(e){
      e.preventDefault();
      goSlide(e);
    };
  } //////////////// for문

  // 광클 금지 변수
  let prot = false;
  /***************************************************************************************************************
                                          함수명 : goSlide
                                          기능 : 슬라이드 이동
  ***************************************************************************************************************/

  function goSlide(evt,sts=true){

    
    console.log('전달변수:',evt,sts,evt.currentTarget);
    
    // 만약 버튼 클릭일 경우 인터발 지우기 함수 호출
    if(sts){
      clearAuto();
    } //////// if ///////////

    if (prot) return;
    prot = true;
    setTimeout(() => {
      prot = false;
    }, 600);
    /////////////////////////////////////////////

    // 두번째 버튼인 .ab2인가?
    let isRbtn =
    sts?evt.currentTarget.classList.contains("ab2"):true;

    // 함수 호출 확인
    console.log("나 슬라이드",evt.currentTarget.classList.contains("ab2"), isRbtn);


    ///// 2. 버튼별 분기하기 (나누기)
    // 오른쪽 버튼일 경우 //
    if (isRbtn) {
      // (1) 먼저 왼쪽으로 이동하기
      slide.style.left = "-100%";
      slide.style.transition = ".6s ease-in-out";

      // (2) 이동하는 시간 0.6초간 기다림
      setTimeout(() => {
        // 맨앞 li 맨뒤로 이동
        slide.appendChild(slide.querySelectorAll("li")[0]);
        // 슬라이드 left 값이 -100%이므로 left값을 0으로 변경
        slide.style.left = "0";
        // left 트랜지션 없애기
        slide.style.transition = "none";
      }, 600);

    } // if문 ///

    /// 왼쪽 버튼일 경우
    else {
      // 하위 li 수집하기
      let list = slide.querySelectorAll("li");

      // (1) 맨뒤 li 맨앞으로 이동하기
      slide.insertBefore(list[list.length - 1], list[0]);

      // (2) left 값을 -100%로 변경
      slide.style.left = "-100%";

      slide.style.transition = "none";

      setTimeout(() => {
        /// (3) left 값을 0으로 트랜지션하여 들어옴
        slide.style.left = "0";
        slide.style.transition = ".6s ease-in-out";
      }, 0);
    } ////// else문

    // 3. 블릿을 위해 읽어올 슬라이드 순번 구하기

    let seq = slide.querySelectorAll('li')[isRbtn?1:0].getAttribute('data-seq');
console.log("순번:",seq);


    // 4. 블릿 변경하기
    indic.forEach((ele,idx)=>{

      // ele - 각각의 li , idx - 각각의 순번
     if(idx==seq){
       ele.classList.add('on');
     } /// if ////
     else {
       ele.classList.remove('on');
     } //// else ////
   }); /// forEach ///
  } /////////////////// goSlide 함수

//////////////// 인터발용 변수 (지울목적)
let autoI;
// 타임아웃용 변수 (지울 목적)
let autoT;
// 자동넘김 호출함수 최초 호출하기
autoSlide();

//////////////// 자동 넘김 호출 함수 /////////////////////////////////
function autoSlide(){
  autoI = setInterval(() => {
  }, 3000);
} ///////// autoSlide 함수


//////////// 인터발 지우기 함수 /////////////////
function clearAuto(){

   //console.log('인터발 지워');

   clearInterval(autoI);

   clearTimeout(autoT);

   autoT = setTimeout(() => {
     autoSlide();
   }, 5000);
} ///////// clearAuto함수

} //////////////// sub1SlideFn 함수 ///////////////
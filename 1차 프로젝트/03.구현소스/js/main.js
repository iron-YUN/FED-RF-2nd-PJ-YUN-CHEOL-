// 메인 JS - main.js


// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = 
(ele, evt, fn) => ele.addEventListener(evt, fn);
//========================================================

// 메인 동영상 파트 클릭시 이미지 보이기 숨기기
const banArea = qs('#ban-area');
const banImg = qs('.baner');
const banMv = qs('.ban-video');

banArea.addEventListener('click', () => {
  banImg.classList.toggle('on');
  banMv.classList.toggle('on');
});


// 파트너쉽영상 버튼클릭 - 동영상 재생 & 이미지와 버튼 숨기기
const partnerImg = qs('.ptmv-img');
const partnerBtn = qs('.ptmv-btn');
const ptmvVideo = qs('.ptmv-video');

partnerBtn.addEventListener('click', () => {
  partnerImg.classList.add('on');
  partnerBtn.classList.add('on');
  ptmvVideo.play();
}
);

// 로고화면의 로고 클릭시 메인페이지 열림 ////////////
////////////////////로고열림 테스트중///////////////////
// const mPg = document.querySelector('#mmm-area');
// const logoPg = document.querySelector('.mainlogo1');
// const mlogoBtn = document.querySelector('.logo-btn');

// mlogoBtn.addEventListener('click', ()=>{
//     mPg.classList.add('on');
//     setTimeout(() => {
//         logoPg.classList.add('on');
//     }, 5000);
// }
// );
////////////////////로고열림 테스트중2 이게조금더 나음.../////////////
const logoPg = qs('.mainlogo1');
const mlogo = qs('.mlogo-pg');
const mlogoBtn = qs('.logo-btn');

mlogoBtn.addEventListener('click', ()=>{
    logoPg.classList.add('on');
    mlogo.classList.add('on');
}
);
    
/////////////////병모양 테스트 ////////////////////
/* 
        ★[[ 이벤트발생시 위치값 ]]★
        1. clientX, clientY
            -> 현재 보이는 브라우저 화면이 기준******
            -> 화면을 기준한 fixed ***** 포지션에서 주로 사용!
        2. offsetX, offsetY
            -> 이벤트 대상이 기준
            -> 특정박스이 부모자격박스로 부터 위치를 사용할 경우
        3. pageX, pageY*********
            -> 전체 문서를 기준(스크롤 화면을 포함)
            -> 화면을 기준한 absolute ***** 포지션에서 주로 사용!
        4. screenX, screenY
            -> 모니터 화면을 기준
    */
    const mover = document.querySelector('.mover');
    const myBody = document.body;
    myBody.onmousemove = e => {
        mover.style.left = e.pageX + "px";
        mover.style.top = e.pageY + "px";
    };//////////mousemove///////////////




// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window,"DOMContentLoaded", loadFn);
/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#collSlide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/


//////////////////////////////버튼클릭 슬라이드///////////////////////////////////////
/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
    // console.log("로딩완료!");
    // 이동버튼 대상 : .abtn
    const abtn = qsa('.abtn');
    //변경대상 : #coll-slide
    const collSlide = qs('#coll-slide');
    // console.log(abtn,collSlide);

    //슬라이드 순번 전역변수
    let snum = 0;

    for(let x of abtn){
        x.onclick = goSlide;
    }///////////////for of ///////////////

    //광클 금지변수
    // let prot = 0;
    let prot = false;
    /* ****************************************
    함수명 : goSlide
    기능 : 슬라이드 이동
    *****************************************/
   
   function goSlide (){

    // 광클금지 설정하기
    // 클릭신호를 막아서 못들어오게 하고
    // 일정시간후 다시 열어준다!
    if(prot) return; // 돌아가!(함수나감!)
        prot=true; // 잠금! (뒤의호출막기)
        setTimeout(() => {
            prot=false; // 0.6초후 해제!
        }, 600);
        /////////////////////////////////////////

       //  1.오른쪽 버튼인 .ab2인가?
       let isRbtn = this.classList.contains('ab2');
    //   [classList 객체의 contains()메서드]
    // 해당요소의 특정 클래스 인지 여부를 리턴함 true,false
    // 해당클래스가 있으면 true ,없으면 false

        //호출확인
        // console.log('나 슬라이드야~!!!!!!!!!',this,isRbtn);
        // this 는 호출한 버튼 자신

        // 2. 버튼별 분기하기
        // 2-1.오른쪽 버튼일 경우 ///
        if (isRbtn) {
            // (1) 먼저 왼쪽으로 이동하기
            collSlide.style.left = '-100%';
            collSlide.style.transition = '.6s ease-in-out';
            // (2) 이동하는 시간  0.6초간 기다림
            setTimeout(() => {
                // (2-1) 맨앞 li 맨뒤로이동
                collSlide.appendChild(collSlide.querySelectorAll('li')[0]
                )
                // 슬라이드 left 값이 -100% 이므로
                // (2-2) left값을 0으로 변경
                collSlide.style.left= '0';
                // (2-3) left 트랜지션 없애기
                collSlide.style.transition = 'none';
            }, 600);

            //맨 앞 li 맨뒤로 이동하기
            // appendChild(요소)
            // -> 원래 뒤에 요소추가기능임
            // -> 기존있는 요소를 선택시 맨뒤로 이동함
            // 맨앞요소를 선택하여 맨뒤로 보냄
            
        }/////// if ///////////

         // 2-2.왼쪽쪽 버튼일 경우 ///
        else{
            // 하위 li수집
            let list = collSlide.querySelectorAll('li');
            // (1) 맨뒤 요소 li 맨앞으로 이동하기
            // 놈놈놈 시리즈!!!!
            // insertBefore(넣을놈,넣을놈전놈)
            // insertBefore(맨뒤 li,맨앞li)
            collSlide.insertBefore(list[list.length-1],list[0]);

        // (2) left 값을 -100% 로 변경하여 
        // 맨뒤 li가 맨앞으로 온것을 숨긴다.
        // 왼쪽에서 슬라이드 들어올 준비!!
        collSlide.style.left ='-100%';
        // 트랜지션이 한번버튼클릭수 생기므로 없애줌
        collSlide.style.transition = 'none';
        
        // 같은 left값을 변경하기 때문에
        //코드처리구역을 분리하여준다
        // 이때 사용되는 메서드는 setTimeout
        // 시간차는 어쩌죠?
        // 0을 줘도 코드를 분리하여 처리하므로 
        // 동시처리가 아니고 비동기처리하기 때문에
        // 코드가 잘 작동한다.
        
        setTimeout(() => {
            // (3) left 값을 0으로 트랜지션 하여 들어옴
            collSlide.style.left ='0';
            collSlide.style.transition = '.6s ease-in-out';
        }, 0);

        }; //////// else //////////

        }/////////////// goSlide /////////////////////
        ///////////////////////////////////////////////















} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
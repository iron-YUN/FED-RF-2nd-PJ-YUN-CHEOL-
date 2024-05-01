
import mFn from './my_function.js';

// 재귀함수 호출
// 초기셋팅하기
// 대상: .gbox
const gbox = mFn.qs(".gbox");

// 코드변수
let hcode = "<ul>";

// for문으로 코드 만들기 : ul>li>img
for(let i=1; i<=8; i++) {
    hcode += `
        <li>
            <img src="./IMG/img4/ts4_0${i}.jpg" 
            alt="갤러리이미지">
        </li>
    `;
} ///// for /////

hcode += "</ul>";

// 대상에 코드넣기
gbox.innerHTML = hcode;



///// 갤러리 박스를 왼쪽으로 계속 움직이게하는 재귀호출함수 만들기

// 움직일 대상 : .gbox ul
let target = mFn.qsEl(gbox,'ul');


// 기준값 업데이트 함수 : 윈도우 가로폭의 1/4 => li 하나 크기
// window.innerWidth/4
const updateCriteria = () => mFn.qsaEl(target,"li")[0].offsetWidth;


// 기준값(대상 li의 가로크기값)
let criteria = updateCriteria();

// 리사이즈시 업데이트
mFn.addEvt(window,"resize",

    ()=> {criteria = updateCriteria();
    // console.log('기준값 업데이트:',criteria);
});


// console.log('기준값:',criteria);

// 현재 translate 값
let currVal = 0;



// translate 참고 링크 : https://developer.mozilla.org/en-US/docs/Web/CSS/translate

function moveGallery(){
    // 현재값 1씩 감소

    target.style.translate = --currVal + "px";

    // 하나 크기만큼 나가면 처리
    // 기준값을 마이너스로 하고 소수점 아래는 버림
    // Math.floor()소수점 아래 내림(버림) 함수
    // == 비교보다는 <= 로 해야 안전함( 창크기를 줄여도 이미지가 짤리지 않음)
    if(currVal <= Math.floor(-criteria)){
        // 1. 맨앞 li 맨뒤로 이동 /  appendChild(맨앞 li)
        // 맨 앞 li는 새로 구해와야함(계속 변경되기때문에)
        target.appendChild(mFn.qsaEl(target,"li")[0]);


        // 2. translate 값 초기화
        target.style.translate =  "0px";

        // 3. 하나 크기만큼 나가면 currVal값 초기화
        currVal = 0;

    } ///////////////// if 문 /////////
    
    // 재귀호출(타임아웃함수로 호출함)
    // stopSts 변수값이 false일 때만 실행하기
    if(!stopSts)
    setTimeout(moveGallery,10);

} //////// moveGallery ///////////////


// 대상에 마우스 오버시 멈추고 아웃시 다시 흘러가게하기
// 대상 : .gbox ->  gbox변수
// 멈춤상태 변수
let stopSts = false;

// 1. 멈추기(mouseenter)
mFn.addEvt(gbox,"mouseenter",()=>{
    //  멈춤상태변수 true변경
    stopSts = true;

});
// 2. 다시 흘러가기(mouseleave)
mFn.addEvt(gbox,"mouseleave",()=>{
    //  멈춤상태변수 false 변경
    stopSts = false;
    // 재귀호출함수 호출하기
    moveGallery();
});
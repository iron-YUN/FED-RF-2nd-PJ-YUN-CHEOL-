
// 내함수 가져오기
import mFn from "./my_function.js";
import goSub from "./gosub.js";
goSub();
const background = mFn.qs('bg-image');

///////////////// 메인페이지 기능 및 이미지 불러오기 /////////////////
const showContent = () => {
    // 대상: .GNB
    const GNB = mFn.qs("#GNB");
    // 대상: .ts
    const TS = mFn.qs(".ts");
    // 대상: .bg-image
    const bgImage = mFn.qs(".bg-image");

    
    
    /////////////////////////////// a 태그 안에 "###" 대신 "./sub${i}.html" 고쳐서 넣으시오 ////////////////////////////////////////

    
    // li 요소와 이미지 요소를 찾아서 이벤트 리스너 추가
    const lis = mFn.qsaEl(GNB,'li');
    const tsImgs = mFn.qsaEl(TS,'.ts-img');

    lis.forEach((li, idx) => {
        mFn.addEvt(li,'mouseenter', () => {
            tsImgs.forEach((img, imgIndex) => {
                img.style.opacity = 0;
                if (imgIndex === idx) {
                    img.style.opacity = 1;
                }
            });
            // 배경 이미지에 filter 효과 적용
            bgImage.style.filter = "brightness(0.3)";
        });

        mFn.addEvt(li,'mouseleave', () => {
            tsImgs.forEach((img) => {
                img.style.opacity = 0;
            });
            // 배경 이미지의 filter 효과 초기화
            bgImage.style.filter = "brightness(0.8)";
        });
    });
};

// 함수 호출
showContent();



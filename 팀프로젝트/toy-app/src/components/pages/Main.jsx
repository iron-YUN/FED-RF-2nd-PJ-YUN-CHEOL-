// 데이터
import { mainItems } from "../data/top_foot_data";
// css 불러오기
import { useEffect } from "react";
import "../../css/main.scss"

const mData = mainItems;
export default function Main() {
useEffect(()=>{
    
        // li 요소와 이미지 요소를 찾아서 이벤트 리스너 추가
        const lis = document.querySelectorAll("#GNB li");
        const tsImgs = document.querySelectorAll(".ts .ts-img");
        const bgImage = document.querySelector(".bg-image");
        lis.forEach((li, idx) => {
            li.addEventListener('mouseenter', () => {
                tsImgs.forEach((img, imgIndex) => {
                    img.style.opacity = 0;
                    if (imgIndex === idx) {
                        img.style.opacity = 1;
                    }
                });
                // 배경 이미지에 filter 효과 적용
                bgImage.style.filter = "brightness(0.3)";
            });
    
            li.addEventListener('mouseleave', () => {
                tsImgs.forEach((img) => {
                    img.style.opacity = 0;
                });
                // 배경 이미지의 filter 효과 초기화
                bgImage.style.filter = "brightness(0.8)";
            });
        });
 
},[]);

  // 코드 리턴구역 ////
  return (
    <>
      <h1>토이스토리 메인</h1>
      <div className="bg-image"
      style={{background: `url(${process.env.PUBLIC_URL}/images/bg/bg2.jpg) no-repeat center/cover`}}
      ></div>
      <main className="main">
        <a href="###" className="logo"
        style={{cursor:"auto"}}>
          <img src={process.env.PUBLIC_URL +"/images/PIXAR_LOGO black.png"} alt="Main Logo" />
          <img src={process.env.PUBLIC_URL +"/images/toystory_logo2.png"} alt="Main Logo" />
        </a>
        <div className="ts" title="티저이미지">
            {   mData.map((v,i)=>
                <img key={i}
                src={process.env.PUBLIC_URL +v.src} 
                alt={v.text} 
                className="ts-img"/>
            )
            }
        </div>
        <nav id="GNB"></nav>
      </main>
    </>
  );
} /////// Main /////

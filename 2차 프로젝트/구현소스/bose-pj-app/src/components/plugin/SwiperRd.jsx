// 랜덤 모듈 스와이퍼 플러그인 컴포넌트
import React, { useState, useRef, useEffect, useLayoutEffect,useCallback  } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// 제이쿼리 불러오기
import $ from "jquery";
// Import Swiper styles 모듈용 기본 css파일로딩
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 네비게이션 - 양쪽이동버튼)
import { Navigation ,Pagination} from "swiper/modules";

// 아이템 데이터 불러오기
import { products } from "../data/items_main_data";
import { colorList } from "../data/color_data";
import { WishlistHeartIcon } from "../data/icons";

// css불러오기
import "./css/swiper_rd.scss";
///////////////////////////////////////////////////////////


export function SwiperRd({ catName }) {
   /////////////////////////////////////////////////////////////////
   const [selectedColors, setSelectedColors] = useState({});
   // 선택된 색상 상태 관리
   useEffect(() => {
     // 위시리스트 이벤트 등록하기
     // const wish = $(".wish");
     // console.log("나 위시리스트",wish);
 
     // 랜덤 아이템 총 개수
     // const itemGet = $(".cat-cont");
     // console.log("나 랜덤개수야~~", itemGet.length);
     // 컬리선택 체인지 이벤트 등록하기
   });///////////// useEffect ////////////////////
   
   useEffect(() => {
    // useEffect 안에서 jQuery를 이용한 이벤트 처리
    $(".wish svg").click(function() {
      // 현재 fill 속성 값을 가져옵니다.
      const currentFill = $(this).attr("fill");

      // 새로운 fill 속성 값을 설정합니다. 여기서는 빨강과 검정을 토글합니다.
      const newFill = currentFill === "red" ? "none" : "red";

      // 새로운 fill 속성 값을 적용합니다.
      $(this).attr("fill", newFill);
    });

    // clean-up 함수: 컴포넌트가 언마운트될 때 클릭 이벤트 핸들러를 제거합니다.
    return () => {
      $(".wish svg").off("click"); // 이벤트 제거
    };
  }, []); 
 


   // 램덤1 함수 ///////////////////////////////////////
   // 1. rdProduct : 리턴코드에서 products의 순번 카테고리를 받아서
   // 해당 카테고리 내의 순번개수만큼 랜덤돌리기를 한다
   // 2.rdColor : 위에서 결정된 제품내의 컬러리스트를 랜덤돌리기한다(위와같은방법).
   const getRdItem = (arr) => {
     // 예) 순번1:Headphones -> 품목개수6개 중 랜덤순번품목의 순번을 rdIdx 에 담는다
     const rdIdx = Math.floor(Math.random() * arr.length);
     // console.log(rdIdx);
     return arr[rdIdx];
     // 위에서 rdIdx 에 담은 순번을 Headphones[랜덤수] 로 리턴해 getRdItem 에 담는다.
   }; ////////////// 랜덤1 함수 getRdItem ////////////
 
   // 랜덤2 함수 ///////////////////////////////////
   const getRdItems = (arr) => {
     // 1. 1~2개 랜덤넘버
     const rNum = Math.ceil(Math.random() * 2); // 1 또는 2
     // const rNum = Math.floor(Math.random() * 2)+1; // 1 또는 2
     console.log("난 1개내지 2개",rNum)
 
     // 2. 선택된 아이템들을 배열로 담을 준비
     const items = [];
     // console.log("난 선택받은 용사들",items);
     // 선택된 제품을 저장 => 카테고리당 1~2 를 선택해 배열로 담음
 
     // 3.원본 배열 복사 : 카테고리의 품목 배열로 복사!
     const catCopyArr = [...arr];
     // console.log("카테고리 복사!",catCopyArr);
 
     // const catCopyArr = arr; // 이거하지마
     //  ->> 이건 원본배열의 주소만 복사한것으로 원본이 위험함
 
     // 출력코드
     // rNum 에서 1개또는 2개를 선택해서
     //  1개일때는 순번0 , 2개일때는 순번 1까지나옴
     // 이순번을 for문 사용 해서 출력
     for (let i = 0; i < rNum; i++) {
       // 1) catCopyArr 복사배열에서 무작위 아이템 선택
       const item = getRdItem(catCopyArr);
       // console.log("난 선택받은 용사",item);
       // 2) 선택된 아이템을 items 빈배열에 추가
       items.push(item);
       // console.log(items);
       // 3) 중복 방지를 위해 선택된 아이템 제거
       // catCopyArr 복사된 배열에서 랜덤 선택된 인덱스를 제거
       catCopyArr.splice(catCopyArr.indexOf(item), 1); // -> 이거안하면 중복됨
       // console.log(catCopyArr); // -> 선택된 제품 제외하고 나머지 나옴
     }
     return items;
   };////////////// 랜덤2 함수 getRdItems ////////////
 
 
 
   const colorFn = (e, clr) => {
     e.preventDefault();
     console.log("나를 선택했군!!",clr);
     // console.log("나를 선택했군!!",e.currentTarget);
     // ./images/speakers/1/white_smoke/0.webp
     // 0. 원조대상
     let org = $(e.currentTarget);
 
     // 1. 대상이미지선택
     let tg = org.parents(".rd-p-info").prev().find("img");
 
     // 2. 대상이미지 src값 읽기
     let isrc = tg.attr("src").split("/");
     console.log("전isrc:",JSON.stringify(isrc));
     // 3. 대상이미지 src값 변경
     isrc[4] = clr;
     console.log("후isrc:",isrc);
     // 4. 대상이미지경로 복원
     isrc = isrc.join("/");
     console.log("최종isrc:",isrc);
     // 5. 대상이미지 src 실제로 변경
     tg.attr("src",isrc);
 
     // 6. 현재 자신에게 클래스"on"넣기
     org.addClass("on").siblings().removeClass("on");
     
   };///////////// colorFn ////////////////
////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

  return (
    <>
      <Swiper
        // slidesPerView={4}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        // loop={true}
        navigation={true}
        /* 사용할 모듈을 여기에 적용시킨다 */
        modules={[Navigation,Pagination]}
        className="mySwiper-rd"
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{
          200: {
              slidesPerView: 1,
          },
          500: {
              slidesPerView: 2,
          },
          1000: {
              slidesPerView: 3,
          },
          1200: {
              slidesPerView: 4,
          },
        }}
      >
        {/* ///////////////////////////////////// */}
        {
          // 각 카테고리별로 1~2개의 제품 랜덤 선택
          products.flatMap((v, i) => {
            // 1.각 카테고리별로 1~2개 제품 랜덤선택
            const rdProduct = getRdItems(v);
            // console.log(rdProduct); // 랜덤오브젝트 확인하기
            return rdProduct.map((prod, j) => {
              // 2.선택된 제품에서의 가지고있는 색 랜덤선택
              const rdColor = getRdItem(prod.color);
              // console.log(rdColor); // 랜덤 컬러 확인하기
              return (
                <SwiperSlide key={`${i}-${j}`} className="rd-cat-cont">
                  <div className="rd-p-box">
                    <span className="wish">
                      {/* 1.위시리스트 버튼 */}
                      <WishlistHeartIcon
                        strokeWidth="1"
                        width="30"
                        height="30"
                      />
                    </span>
                    {/* 2.제품이미지 */}
                    <div className="rd-p-img">
                      <img
                        idx={prod.idx}
                        src={`${process.env.PUBLIC_URL}${prod.isrc}${prod.idx}/${rdColor}/0.webp`}
                        alt={prod.name}
                      />
                    </div>
                    {/* 3.제품별 정보박스 */}
                    <section className="rd-p-info">
                      {/* 3-1.제품명 */}
                      <p className="rd-p-name">{prod.name}</p>
                      {/* 3-2.제품가격 */}
                      <p className="rd-p-price">{prod.price}</p>
                      {/* 3-3.제품색상 */}
                      <div className="rd-p-color-box">
                        {prod.color.map((clr, idx) => (
                          <div
                            key={idx}
                            // map 컬러가 랜덤컬러와 일치시 클래스on ,나머지는 on을 뺌
                            // clr : map 을 돌린 컬러들임
                            className={`color-circle-wrap ${clr == rdColor ? "on" : ""
                            }`}   onClick={(e) => colorFn(e, clr)}>
                            <div

                              className="color-circle"
                              // 배경색상을 컬러리스트의 색상에서 불러온다
                              style={{ backgroundColor: colorList[clr] }}
                              title={clr}
                            />
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </SwiperSlide>
              );
            });
          })
        }
        {/* ///////////////////////////////////// */}
      </Swiper>
    </>

  );
} /////////// SwiperVid 컴포넌트 ///////////

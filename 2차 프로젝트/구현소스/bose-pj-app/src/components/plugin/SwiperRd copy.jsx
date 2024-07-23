// 랜덤 모듈 스와이퍼 플러그인 컴포넌트
import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  useContext,
} from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Navigation, Pagination } from "swiper/modules";

// 아이템 데이터 불러오기
import { products } from "../data/items_main_data";
import { colorList } from "../data/color_data";
import { WishlistHeartIcon } from "../data/icons";

// css불러오기
import "./css/swiper_rd.scss";
///////////////////////////////////////////////////////////
import { bCon, cCon } from "../modules/bCon";

export function SwiperRd({force, setForce }) {
  // 샵디테일 페이지 때문에 강제 리랜더링 .... 이었으나 실패
  // const [force,setForce] = useState(false);
  // const [nowColor, setNowColor] = useState(sel);
  // const { nowColor, setNowColor } = useContext(cCon);
  /////////////////////////////////////////////////////////////////
  // 위치탑으로 이동을 위한것
  const myCon = useContext(bCon); 
  // 색상저장 참조변수
  const rdColor = useRef(null);
  // 라우터 이동함수만들기
  const goNav = useNavigate();
  useEffect(() => {
    // useEffect 안에서 jQuery를 이용한 이벤트 처리
    $(".wish svg").click(function () {
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

  // 램덤 함수 1
  const getRdItem = (arr) => {
    const rdIdx = Math.floor(Math.random() 
    * arr.length);
    return arr[rdIdx];
  }; //////////////
  // 랜덤 함수 2
  const getRdItems = (arr) => {
    const rNum = Math.ceil(Math.random() 
    * 2);
    // 원본데이터 안전장치 : 빈배열 + 배열복사
    const items = [];
    const catCopyArr = [...arr];
    for (let i = 0; i < rNum; i++) {
      const item = getRdItem(catCopyArr);
      items.push(item);
      catCopyArr.splice(catCopyArr
        .indexOf(item), 1);
    }
    return items;
  }; //////////////

  // 제품 색상 변경 함수
  const colorFn = (e, clr) => {
    e.preventDefault();
    let org = $(e.currentTarget);
    // 1.바꿀대상 찾기
    let tg = org.parents(".rd-p-info")
    .prev().find("img");
    // 2.대상이미지 src값 읽기
    let isrc = tg.attr("src").split("/");
    // 3.대상이미지 src값 변경,색상 업데이트
    isrc[9] = clr;
    rdColor.current = clr;
    // 4. 대상이미지경로 복원
    isrc = isrc.join("/");
    // 5. 대상이미지 src 실제로 변경
    tg.attr("src", isrc);
    // 6. 현재 자신에게 클래스"on"넣기
    org.addClass("on").siblings()
    .removeClass("on");
  }; ///////////// colorFn ////////////////
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
        modules={[Navigation, Pagination]}
        className="mySwiper-rd"
        // 스와이퍼 사이즈별 슬라이드수 변경!
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          330: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
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
          products.map((v, i) => {
            // 1.각 카테고리별로 1~2개 제품 랜덤선택
            const rdProduct = getRdItems(v);
            return rdProduct.map((prod, j) => {
              // 2.선택된 제품에서의 가지고있는 색 랜덤선택
              rdColor.current = getRdItem(prod.color);
              return (
                <SwiperSlide key={`${i}-${j}`}
                 className="rd-cat-cont">
                  <p className="wish">
                    {/* 1.위시리스트 버튼 */}
                    <WishlistHeartIcon strokeWidth="1" width="30" height="30" />
                  </p>
                  <a href="#"
                  onClick={(e)=>{
                    e.preventDefault();
                    window.scrollTo(0, 0);
                    myCon.setPos(0);
                    // setForce(!force);
                    // rdClick();
                    // 현재 선택된 컬러 title속성값 읽기
                    let selColor = $(e.currentTarget).find(".color-circle-wrap.on .color-circle").attr("title");
                    console.log("이거 진짜임!!",selColor);
                    // 전역 선택 아이템 색상변수에 넣기
                    myCon.setSelColor(selColor);
                    // 이동
                    goNav("/detail",{state:{
                      pname: prod.name,
                      type: prod.MainType,
                      idx: prod.idx,
                      src: prod.isrc,
                      color: prod.color,
                      sel: selColor
                    }})
                  }}
                  >
                    <div className="rd-p-box">
                      {/* 2.제품이미지 */}
                      <div className="rd-p-img">
                        <img
                          idx={prod.idx}
                          src={`${process.env.PUBLIC_URL + prod.isrc}${
                            prod.idx
                          }/${rdColor.current}/0.webp`}
                          alt={prod.name}
                        />
                      </div>
                      {/* 3.제품별 정보박스 */}
                      <section className="rd-p-info">
                        {/* 3-1.제품명 */}
                        <p className="rd-p-name">{prod.name}</p>
                        {/* 3-2.제품가격 */}
                        <p className="rd-p-price">$ {prod.price}</p>
                        {/* 3-3.제품색상 */}
                        <div className="rd-p-color-box">
                          {prod.color.map((clr, idx) => (
                            <div
                              key={idx}
                              className={`color-circle-wrap ${
                                clr == rdColor.current ? "on" : ""
                              }`}
                              onClick={(e) =>{ 
                                e.stopPropagation(); 
                                colorFn(e, clr)}}
                            >
                              <div
                                className="color-circle"
                                style={{ backgroundColor: colorList[clr] }}
                                title={clr}
                              />
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                    </a>
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
